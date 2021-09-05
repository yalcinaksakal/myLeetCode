import AceEditor from "react-ace";

import "ace-builds/src-noconflict/mode-javascript";
import "ace-builds/src-noconflict/mode-java";
import "ace-builds/src-noconflict/mode-python";

import "ace-builds/src-noconflict/snippets/javascript";
import "ace-builds/src-noconflict/snippets/java";
import "ace-builds/src-noconflict/snippets/python";

import "ace-builds/src-noconflict/theme-tomorrow_night_bright";
import "ace-builds/src-noconflict/theme-tomorrow";

import "ace-builds/src-noconflict/ext-language_tools";

import styles from "./Ace.module.scss";
import Modes from "./Modes/Modes";
import { useState } from "react";

const Ace: React.FC = () => {
  const [lang, setLang] = useState("javascript");
  const [theme, setTheme] = useState("tomorrow_night_bright");
  const themeHandler = theme => setTheme(theme);
  const langHandler = lang => setLang(lang);
  return (
    <div className={styles.editor}>
      <Modes onThemeChange={themeHandler} onLangChange={langHandler} />
      <AceEditor
        placeholder="// Paste or write your code"
        width="100%"
        height="100%"
        wrapEnabled={true}
        mode={lang}
        theme={theme}
        name="UNIQUE_ID_OF_DIV"
        fontSize={14}
        focus
        //   enableBasicAutocompletion
        enableLiveAutocompletion
        enableSnippets
        onLoad={editorInstance =>
          (editorInstance.container.style.resize = "both")
        }
        // // mouseup = css resize end
        // document.addEventListener("mouseup", e => (
        //   editorInstance.resize()

        //   annotations={[{ row: 0, column: 2, type: "error", text: "Some error." }]}
      />
    </div>
  );
};

export default Ace;
