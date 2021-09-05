import type { NextPage } from "next";
import dynamic from "next/dynamic";
import Resizer from "../../components/DragableLine/DragableLine";
import Problem from "../../components/Problem/Problem";
import styles from "./editor.module.scss";

const CodeEditor = dynamic(import("../../components/Ace/Ace"), { ssr: false });

const Editor: NextPage = () => {
  return (
    <div className={styles.editor}>
      <Problem />
      <Resizer />
      <CodeEditor />
    </div>
  );
};

export default Editor;
