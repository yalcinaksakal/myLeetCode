import type { NextPage } from "next";
import dynamic from "next/dynamic";
import { useEffect, useRef, useState } from "react";
import Resizer from "../../components/DragableLine/DragableLine";
import Problem from "../../components/Problem/Problem";
import styles from "./editor.module.scss";

const CodeEditor = dynamic(import("../../components/Ace/Ace"), { ssr: false });

const Editor: NextPage = () => {
  const [widths, setWidths] = useState({ prblm: "40%", edtr: "40%" });
  const pageWidth = useRef(5000);
  const isResizing = useRef(false);
  useEffect(() => {
    pageWidth.current = window.innerWidth;
    const width = Math.floor(pageWidth.current / 2) - 5 + "px";
    setWidths({ prblm: width, edtr: width });
  }, []);

  const resize = pageX => {
    console.log(pageX);
    if (pageX < 150 || pageX > pageWidth.current - 150) {
      pageX = pageX < 150 ? 180 : pageWidth.current;
      pageX = pageX > pageWidth.current - 150 ? pageWidth.current - 180 : pageX;
      isResizing.current = false;
    }
    const edtr = `${pageWidth.current - pageX - (pageX ? 20 : 0)}px`;
    const prblm = `${pageX - 5}px`;
    setWidths({
      prblm,
      edtr,
    });
  };
  return (
    <div
      className={styles.editor}
      onMouseMove={e => {
        if (isResizing.current) resize(e.pageX);
      }}
      // onMouseUp={() => (isResizing.current = false)}
    >
      <div style={{ width: widths.prblm, height: "100%" }}>
        <Problem />
      </div>
      <div
        onMouseDown={() => (isResizing.current = true)}
        onMouseUp={() => (isResizing.current = false)}
        style={{ height: "100%" }}
      >
        <Resizer />
      </div>
      <div style={{ width: widths.edtr, height: "100%" }}>
        <CodeEditor />
      </div>
    </div>
  );
};

export default Editor;
