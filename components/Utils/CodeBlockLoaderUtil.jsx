import { Prism as SyntaxHighlighter } from "react-syntax-highlighter/";
import { okaidia as style } from "react-syntax-highlighter/dist/cjs/styles/prism";

const CodeBlockUtil = ({ language, value }) => {
  return (
    <SyntaxHighlighter
      language={language}
      style={style}
      customStyle={{
        lineHeight: "0.75",
        fontSize: ".9em",
      }}
    >
      {value}
    </SyntaxHighlighter>
  );
};

export default CodeBlockUtil;
