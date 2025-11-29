/* eslint-disable @next/next/no-img-element */
import Head from "next/head";
import Link from "next/link";
import { useEffect, useState } from "react";
import Layout from "../../components/layout/Layout";
import { getPostBySlug, getAllPostSlugs } from "../../lib/posts";
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';

function BlogPost({ post }) {
    // Handle script tags in content
    useEffect(() => {
        if (typeof window !== 'undefined' && post?.content) {
            // Extract script tags from the raw content
            const scriptRegex = /<script\s+src=["']([^"']+)["'][^>]*><\/script>/gi;
            let match;
            const scriptSources = new Set();
            
            while ((match = scriptRegex.exec(post.content)) !== null) {
                scriptSources.add(match[1]);
            }
            
            // Also check for data-script-src attributes from placeholder divs
            const placeholders = document.querySelectorAll('.blog-content [data-script-src]');
            placeholders.forEach((placeholder) => {
                const src = placeholder.getAttribute('data-script-src');
                if (src) scriptSources.add(src);
            });
            
            // Also check for script tags in the rendered DOM
            const domScripts = document.querySelectorAll('.blog-content script[src]');
            domScripts.forEach((script) => {
                const src = script.getAttribute('src');
                if (src) scriptSources.add(src);
            });
            
            // Load all unique scripts
            scriptSources.forEach((src) => {
                if (!document.querySelector(`script[src="${src}"]`)) {
                    const newScript = document.createElement('script');
                    newScript.src = src;
                    newScript.async = true;
                    // Find the placeholder and insert script before it, or append to body
                    const placeholder = document.querySelector(`[data-script-src="${src}"]`);
                    if (placeholder && placeholder.parentNode) {
                        placeholder.parentNode.insertBefore(newScript, placeholder);
                    } else {
                        document.body.appendChild(newScript);
                    }
                }
            });
        }
    }, [post]);
    // Process content to convert Hugo shortcodes to markdown images and handle HTML entities
    const processContent = (content) => {
        // Decode HTML entities (like &#x2F; -> /)
        let processed = content.replace(/&#x2F;/g, '/');
        processed = processed.replace(/&#x2f;/g, '/');
        processed = processed.replace(/&amp;/g, '&');
        processed = processed.replace(/&lt;/g, '<');
        processed = processed.replace(/&gt;/g, '>');
        processed = processed.replace(/&quot;/g, '"');
        
        // Convert Hugo mermaid shortcodes to mermaid code blocks
        // {{<mermaid>}}...{{</mermaid>}} -> ```mermaid\n...\n```
        // Also handle {{<mermaid>}} without closing tag variations
        processed = processed.replace(
            /\{\{<mermaid>\}\}([\s\S]*?)\{\{<\/mermaid>\}\}/g,
            (match, mermaidContent) => {
                const cleaned = mermaidContent.trim();
                return `\n\`\`\`mermaid\n${cleaned}\n\`\`\`\n`;
            }
        );
        
        // Also handle case where closing tag might have different spacing
        processed = processed.replace(
            /\{\{<\s*mermaid\s*>\}\}([\s\S]*?)\{\{<\s*\/\s*mermaid\s*>\}\}/g,
            (match, mermaidContent) => {
                const cleaned = mermaidContent.trim();
                return `\n\`\`\`mermaid\n${cleaned}\n\`\`\`\n`;
            }
        );
        
        // Convert Hugo rawhtml shortcodes to HTML
        // {{< rawhtml >}}...{{< /rawhtml >}} -> ... (keep as HTML)
        processed = processed.replace(
            /\{\{< rawhtml >\}\}([\s\S]*?)\{\{< \/rawhtml >\}\}/g,
            (match, htmlContent) => {
                return htmlContent.trim();
            }
        );
        
        // Convert Hugo figure shortcodes to markdown images
        // {{< figure src="/img/image.jpg" >}} -> ![](/assets/imgs/page/blog/image.jpg)
        processed = processed.replace(
            /\{\{< figure src="([^"]+)"\s*>\}\}/g,
            (match, src) => {
                // Convert /img/ to /assets/imgs/page/blog/
                const imagePath = src.replace(/^\/img\//, '/assets/imgs/page/blog/');
                return `![Image](${imagePath})`;
            }
        );
        
        // Also handle regular markdown images with /img/ paths
        processed = processed.replace(
            /!\[([^\]]*)\]\(\/img\/([^)]+)\)/g,
            '![$1](/assets/imgs/page/blog/$2)'
        );
        
        return processed;
    };
    
    // State to track if mermaid is loaded
    const [mermaidLoaded, setMermaidLoaded] = useState(false);

    // Load and initialize mermaid
    useEffect(() => {
        if (typeof window !== 'undefined') {
            import('mermaid').then((mermaidModule) => {
                const mermaid = mermaidModule.default;
                mermaid.initialize({
                    startOnLoad: false,
                    theme: 'neutral',
                    securityLevel: 'loose',
                    fontFamily: 'Roboto Condensed',
                    fontSize: '14px',
                });
                setMermaidLoaded(true);
            });
        }
    }, []);

    // Render mermaid diagrams after mermaid is loaded and content is rendered
    useEffect(() => {
        if (!mermaidLoaded || typeof window === 'undefined') return;

        const renderMermaidDiagrams = async () => {
            const mermaidModule = await import('mermaid');
            const mermaid = mermaidModule.default;
            
            const mermaidElements = document.querySelectorAll('.mermaid:not([data-rendered])');
            
            if (mermaidElements.length === 0) return;

            mermaidElements.forEach(async (element, index) => {
                element.setAttribute('data-rendered', 'true');
                
                const graphDefinition = element.getAttribute('data-mermaid-code') || element.textContent.trim();
                
                if (!graphDefinition) return;

                try {
                    // Clear the element
                    element.textContent = '';
                    
                    // Generate unique ID for this diagram
                    const id = `mermaid-${Date.now()}-${index}`;
                    
                    // Render the diagram
                    const { svg } = await mermaid.render(id, graphDefinition);
                    
                    // Insert the SVG
                    element.innerHTML = svg;
                } catch (error) {
                    console.error('Error rendering mermaid diagram:', error);
                    element.textContent = graphDefinition;
                }
            });
        };

        // Try rendering after a short delay to ensure DOM is ready
        const timer = setTimeout(renderMermaidDiagrams, 300);
        
        return () => clearTimeout(timer);
    }, [mermaidLoaded, post]);
    if (!post) {
        return (
            <>
                <Head>
                    <title>Post Not Found - Peskas Blog</title>
                    <meta name="description" content="The requested blog post could not be found." />
                </Head>
                <Layout>
                <section className="section-box">
                    <div className="container mt-100">
                        <div className="row">
                            <div className="col-lg-12 text-center">
                                <h1 className="text-heading-1 color-gray-900 mb-20">Post Not Found</h1>
                                <Link href="/blog" className="btn btn-black icon-arrow-right-white">
                                    Back to Blog
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>
            </Layout>
            </>
        );
    }

    return (
        <>
            <Head>
                <title>{post ? `${post.title} - Peskas Blog` : 'Post Not Found - Peskas Blog'}</title>
                <meta name="description" content={post?.description || post?.content?.substring(0, 160) || 'Peskas blog post'} />
                {post?.author && <meta name="author" content={post.author} />}
                {post?.date && <meta property="article:published_time" content={post.date} />}
            </Head>
            <Layout>
                <section className="section-box">
                    <div className="banner-hero banner-breadcrums bg-gray-100">
                        <div className="container text-center">
                            <div className="row">
                                <div className="col-lg-12">
                                <Link href="/blog" className="text-body-text color-gray-600 mb-10 d-inline-block">
                                    ← Back to Blog
                                </Link>
                                    <h1 className="text-display-3 color-gray-900 mb-20">{post.title}</h1>
                                    <div className="text-heading-6 color-gray-600 mb-20">
                                        {post.date && (
                                            <span>
                                                {new Date(post.date).toLocaleDateString('en-US', {
                                                    year: 'numeric',
                                                    month: 'long',
                                                    day: 'numeric'
                                                })}
                                            </span>
                                        )}
                                        {post.author && (
                                            <span>
                                                {post.date && ' • '}
                                                By {post.author}
                                            </span>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="section-box">
                    <div className="container mt-100">
                        <div className="row">
                            <div className="col-lg-1 col-sm-1 col-12" />
                            <div className="col-lg-10 col-sm-10 col-12">
                                {post.coverImage && (
                                    <div className="mb-40">
                                        <img
                                            src={post.coverImage.replace(/^\/img\//, '/assets/imgs/page/blog/')}
                                            alt={post.title}
                                            style={{ width: '100%', height: 'auto', borderRadius: '16px' }}
                                        />
                                    </div>
                                )}
                                {post.description && (
                                    <p className="text-body-lead-large color-gray-600 mb-40">{post.description}</p>
                                )}
                                <div className="blog-content text-body-text color-gray-600">
                                    <ReactMarkdown
                                        remarkPlugins={[remarkGfm]}
                                        rehypePlugins={[rehypeRaw]}
                                        components={{
                                            p: ({ children, ...props }) => <p {...props}>{children}</p>,
                                            h1: ({ children, ...props }) => <h1 {...props}>{children}</h1>,
                                            h2: ({ children, ...props }) => <h2 {...props}>{children}</h2>,
                                            h3: ({ children, ...props }) => <h3 {...props}>{children}</h3>,
                                            h4: ({ children, ...props }) => <h4 {...props}>{children}</h4>,
                                            h5: ({ children, ...props }) => <h5 {...props}>{children}</h5>,
                                            h6: ({ children, ...props }) => <h6 {...props}>{children}</h6>,
                                            ul: ({ children, ...props }) => <ul {...props}>{children}</ul>,
                                            ol: ({ children, ...props }) => <ol {...props}>{children}</ol>,
                                            li: ({ children, ...props }) => <li {...props}>{children}</li>,
                                            blockquote: ({ children, ...props }) => <blockquote {...props}>{children}</blockquote>,
                                            code: ({ node, inline, className, children, ...props }) => {
                                                const match = /language-(\w+)/.exec(className || '');
                                                const language = match ? match[1] : '';
                                                
                                                if (inline) {
                                                    return <code className={className} {...props}>{children}</code>;
                                                }
                                                
                                                // Handle mermaid diagrams
                                                if (language === 'mermaid') {
                                                    const mermaidCode = String(children).replace(/\n$/, '').trim();
                                                    return (
                                                        <div className="mermaid-container">
                                                            <div 
                                                                className="mermaid" 
                                                                data-mermaid-code={mermaidCode}
                                                            >
                                                                {mermaidCode}
                                                            </div>
                                                        </div>
                                                    );
                                                }
                                                
                                                return (
                                                    <pre className={className} {...props}>
                                                        <code>{children}</code>
                                                    </pre>
                                                );
                                            },
                                            pre: ({ children, ...props }) => <pre {...props}>{children}</pre>,
                                            a: ({ children, ...props }) => <a {...props}>{children}</a>,
                                            strong: ({ children, ...props }) => <strong {...props}>{children}</strong>,
                                            em: ({ children, ...props }) => <em {...props}>{children}</em>,
                                            hr: ({ ...props }) => <hr {...props} />,
                                            br: ({ ...props }) => <br {...props} />,
                                            small: ({ children, ...props }) => <small {...props}>{children}</small>,
                                            div: ({ children, ...props }) => <div {...props}>{children}</div>,
                                            iframe: ({ ...props }) => <iframe {...props} />,
                                            script: ({ node, ...props }) => {
                                                // Return a placeholder div that will be handled by useEffect
                                                // This ensures the script tag is in the DOM for the useEffect to find
                                                return (
                                                    <div 
                                                        data-script-src={props.src} 
                                                        style={{ minHeight: '100px' }}
                                                        className="script-placeholder"
                                                    />
                                                );
                                            },
                                            img: ({ node, ...props }) => (
                                                <img
                                                    {...props}
                                                    src={props.src?.replace(/^\/img\//, '/assets/imgs/page/blog/')}
                                                    alt={props.alt || ''}
                                                    style={{ maxWidth: '100%', height: 'auto', borderRadius: '8px', margin: '2rem 0' }}
                                                />
                                            ),
                                        }}
                                    >
                                        {processContent(post.content)}
                                    </ReactMarkdown>
                                </div>
                                {post.tags && post.tags.length > 0 && (
                                    <div className="mt-40">
                                        <div className="d-flex flex-wrap gap-2">
                                            {post.tags.map((tag, index) => (
                                                <span key={index} className="tag-dot">{tag}</span>
                                            ))}
                                        </div>
                                    </div>
                                )}
                                <div className="mt-40 pt-40 bd-top">
                                    <Link href="/blog" className="btn btn-black icon-arrow-right-white">
                                        Back to Blog
                                    </Link>
                                </div>
                            </div>
                            <div className="col-lg-1 col-sm-1 col-12" />
                        </div>
                    </div>
                </section>
                <style jsx global>{`
                    .blog-content {
                        line-height: 1.8;
                    }
                    .blog-content h1,
                    .blog-content h2,
                    .blog-content h3,
                    .blog-content h4,
                    .blog-content h5,
                    .blog-content h6 {
                        color: #101828;
                        margin-top: 2rem;
                        margin-bottom: 1rem;
                        font-weight: 600;
                        line-height: 1.3;
                    }
                    .blog-content h1 {
                        font-size: 2rem;
                    }
                    .blog-content h2 {
                        font-size: 1.75rem;
                    }
                    .blog-content h3 {
                        font-size: 1.5rem;
                    }
                    .blog-content h4 {
                        font-size: 1.25rem;
                    }
                    .blog-content h5 {
                        font-size: 1.1rem;
                    }
                    .blog-content h6 {
                        font-size: 1rem;
                    }
                    .blog-content p {
                        margin-bottom: 1.5rem;
                        line-height: 1.8;
                        white-space: normal;
                    }
                    .blog-content p:last-child {
                        margin-bottom: 0;
                    }
                    .blog-content ul,
                    .blog-content ol {
                        margin-bottom: 1.5rem;
                        padding-left: 2rem;
                        line-height: 1.8;
                    }
                    .blog-content ul {
                        list-style-type: disc;
                    }
                    .blog-content ol {
                        list-style-type: decimal;
                    }
                    .blog-content li {
                        margin-bottom: 0.75rem;
                        line-height: 1.8;
                    }
                    .blog-content li > p {
                        margin-bottom: 0.5rem;
                        margin-top: 0.5rem;
                    }
                    .blog-content li > p:first-child {
                        margin-top: 0;
                    }
                    .blog-content li > p:last-child {
                        margin-bottom: 0;
                    }
                    .blog-content img {
                        max-width: 100%;
                        height: auto;
                        border-radius: 8px;
                        margin: 2rem 0;
                        display: block;
                    }
                    .blog-content a {
                        color: #0b81a9;
                        text-decoration: underline;
                    }
                    .blog-content a:hover {
                        color: #101828;
                    }
                    .blog-content code {
                        background-color: #f2f4f7;
                        padding: 2px 6px;
                        border-radius: 4px;
                        font-size: 0.9em;
                        font-family: 'Courier New', monospace;
                    }
                    .blog-content pre {
                        background-color: #f2f4f7;
                        padding: 1rem;
                        border-radius: 8px;
                        overflow-x: auto;
                        margin: 1.5rem 0;
                        line-height: 1.6;
                    }
                    .blog-content pre code {
                        background-color: transparent;
                        padding: 0;
                        font-size: 0.9em;
                    }
                    .blog-content blockquote {
                        border-left: 4px solid #0b81a9;
                        padding-left: 1.5rem;
                        margin: 1.5rem 0;
                        font-style: italic;
                        color: #6b7280;
                        background-color: #f9fafb;
                        padding: 1rem 1.5rem;
                        border-radius: 4px;
                    }
                    .blog-content blockquote p {
                        margin-bottom: 0.5rem;
                    }
                    .blog-content blockquote p:last-child {
                        margin-bottom: 0;
                    }
                    .blog-content hr {
                        border: none;
                        border-top: 1px solid #e5e7eb;
                        margin: 2rem 0;
                    }
                    .blog-content table {
                        width: 100%;
                        border-collapse: collapse;
                        margin: 1.5rem 0;
                    }
                    .blog-content table th,
                    .blog-content table td {
                        border: 1px solid #e5e7eb;
                        padding: 0.75rem;
                        text-align: left;
                    }
                    .blog-content table th {
                        background-color: #f9fafb;
                        font-weight: 600;
                    }
                    .blog-content strong {
                        font-weight: 600;
                        color: #101828;
                    }
                    .blog-content em {
                        font-style: italic;
                    }
                    .blog-content small {
                        font-size: 0.875rem;
                        color: #6b7280;
                        display: block;
                        margin-top: 0.5rem;
                    }
                    .blog-content div[style*="position: relative"] {
                        margin: 2rem 0;
                    }
                    .blog-content iframe {
                        border-radius: 8px;
                    }
                    .blog-content .mermaid-container {
                        margin: 2rem 0;
                        width: 100%;
                        overflow-x: auto;
                        overflow-y: visible;
                        -webkit-overflow-scrolling: touch;
                    }
                    .blog-content .mermaid {
                        background: #ffffff;
                        padding: 1.5rem;
                        border-radius: 8px;
                        border: 1px solid #e5e7eb;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        min-height: 200px;
                    }
                    .blog-content .mermaid svg {
                        max-width: 100%;
                        height: auto;
                        display: block;
                    }
                    .blog-content figcaption {
                        font-size: 0.875rem;
                        color: #6b7280;
                        font-style: italic;
                        margin-top: 0.5rem;
                        text-align: center;
                    }
                `}</style>
            </Layout>
        </>
    );
}

export async function getStaticProps({ params }) {
    const post = getPostBySlug(params.slug);
    return {
        props: {
            post,
        },
    };
}

export async function getStaticPaths() {
    const paths = getAllPostSlugs();
    return {
        paths,
        fallback: false,
    };
}

export default BlogPost;

