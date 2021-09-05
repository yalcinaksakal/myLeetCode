import type { NextPage } from "next";
import dynamic from "next/dynamic";
import { useEffect, useRef, useState } from "react";
import Resizer from "../../components/DragableLine/DragableLine";
import Problem from "../../components/Problem/Problem";
import styles from "./editor.module.scss";

const CodeEditor = dynamic(import("../../components/Ace/Ace"), { ssr: false });

const Editor: NextPage = () => {
  const [widths, setWidths] = useState({ prblm: "40%", edtr: "40%" });
  const [pageWidth, setPageWidth] = useState(5000);
  const isResizing = useRef(false);
  useEffect(() => {
    const handleResize = () => {
      setPageWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);

    setPageWidth(window.innerWidth);
    const width =
      pageWidth <= 600 ? "100%" : Math.floor(pageWidth / 2) - 5 + "px";
    setWidths({ prblm: width, edtr: width });
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const resize = pageX => {
    if (pageX < 150 || pageX > pageWidth - 150) {
      pageX = pageX < 150 ? 180 : pageWidth;
      pageX = pageX > pageWidth - 150 ? pageWidth - 180 : pageX;
      isResizing.current = false;
    }
    const edtr = `${pageWidth - pageX - (pageX ? 20 : 0)}px`;
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
    >
      <div style={{ width: widths.prblm, height: "100%" }}>
        <Problem />
      </div>

      <div
        className={styles.resizer}
        onMouseDown={() => (isResizing.current = true)}
        onMouseUp={() => (isResizing.current = false)}
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
