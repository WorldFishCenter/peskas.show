import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

const RichText = ({ content, className }) => {
    if (!content) return null;

    const wrapperClass =
        className && className.length > 0
            ? className
            : "text-body-text color-gray-600";

    return (
        <div className={wrapperClass}>
            <ReactMarkdown remarkPlugins={[remarkGfm]}>
                {content}
            </ReactMarkdown>
        </div>
    );
};

export default RichText;
