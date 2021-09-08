import dynamic from "next/dynamic";
import { useEffect, useRef, useState } from "react";
import Resizer from "../../UI/DragableLine/DragableLine";
import Problem from "../Problem/Problem";
import styles from "./Editor.module.scss";

const CodeEditor = dynamic(import("../Ace/Ace"), { ssr: false });

const Editor: React.FC = () => {
  const [widths, setWidths] = useState({ prblm: "40%", edtr: "40%" });
  const [pageWidth, setPageWidth] = useState(5000);
  const isResizing = useRef(false);

  useEffect(() => {
    const handleResize = () => {
      const w = window.innerWidth;
      setPageWidth(w);
    };
    window.addEventListener("resize", handleResize);
    const w = window.innerWidth;
    setPageWidth(w);
    const width = w <= 500 ? "100%" : Math.floor(pageWidth / 2) - 5 + "px";
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
      <div
        style={{
          width: pageWidth > 500 ? widths.prblm : "95%",
          height: pageWidth > 500 ? "100%" : "240px",
        }}
      >
        <Problem />
      </div>

      <div
        className={styles.resizer}
        onMouseDown={() => (isResizing.current = true)}
        onMouseUp={() => (isResizing.current = false)}
      >
        <Resizer />
      </div>

      <div
        style={{
          width: pageWidth > 500 ? widths.edtr : "100%",
          height: "100%",
        }}
      >
        <CodeEditor />
      </div>
    </div>
  );
};

export default Editor;
