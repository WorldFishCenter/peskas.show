import { TinaMarkdown } from "tinacms/dist/rich-text";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

const RichText = ({ content, className }) => {
    if (!content) return null;

    // Legacy / markdown-string content: render as Markdown
    if (typeof content === "string") {
        return (
            <div className={className}>
                <ReactMarkdown remarkPlugins={[remarkGfm]}>
                    {content}
                </ReactMarkdown>
            </div>
        );
    }

    // Rich-text AST from Tina
    return (
        <div className={className}>
            <TinaMarkdown content={content} />
        </div>
    );
};

export default RichText;


