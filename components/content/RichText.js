import { TinaMarkdown } from "tinacms/dist/rich-text";

const RichText = ({ content, className }) => {
    if (!content) {
        return null;
    }

    if (typeof content === "string") {
        return <p className={className}>{content}</p>;
    }

    return (
        <div className={className}>
            <TinaMarkdown content={content} />
        </div>
    );
};

export default RichText;

