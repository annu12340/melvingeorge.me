import { PrismLight as SyntaxHighlighter } from "react-syntax-highlighter";
import { okaidia as style } from "react-syntax-highlighter/dist/cjs/styles/prism";

const CodeBlockUtil = ({ language, value }) => {
  return (
    <SyntaxHighlighter
      language={language}
      style={style}
      customStyle={{
        lineHeight: "0.75",
        fontSize: ".83em",
        paddingTop: "25px",
        paddingBottom: "25px",
        marginTop: "35px",
        marginBottom: "35px",
      }}
    >
      {value}
    </SyntaxHighlighter>
  );
};

export default CodeBlockUtil;
