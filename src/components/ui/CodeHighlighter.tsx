// IMPORTING NECESSARY FILES
    // IMPORTING PROPS
import { CodeHighlighterProps } from "@/types/props";

// EXPORTING A COMPONENT FOR THE ACTUAL HIGHLIGHTING
export default function CodeHighlighter({ code }: CodeHighlighterProps){
  return (
    <pre className="hljs">
      <code dangerouslySetInnerHTML={{ __html: code }} />
    </pre>
  );
};