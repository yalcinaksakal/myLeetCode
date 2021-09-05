import type { NextPage } from "next";
import dynamic from "next/dynamic";
const CodeEditor = dynamic(import("../components/Ace/Ace"), { ssr: false });

const Editor: NextPage = () => {
  return <CodeEditor />;
};

export default Editor;
