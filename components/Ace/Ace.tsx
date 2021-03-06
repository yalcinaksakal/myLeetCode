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
import { useRef } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../store";
import { savePrblm } from "../../utils/deleteSaveProblem";

const Ace: React.FC<{ data: string; isPrivate: boolean; no: string }> = ({
  data,
  isPrivate,
  no,
}) => {
  const editorInstance = useRef(null);
  const textInEditor = useRef(data);
  const { language, theme } = useSelector((state: RootState) => state.login);
  if (editorInstance.current) {
    editorInstance.current.resize();
    editorInstance.current.focus();
  }
  const saveHandler = async () => {
    await savePrblm(no, textInEditor.current);
    return true;
    //////////////////////////////////////
  };

  return (
    <div className={styles.editor}>
      <Modes showSaveButton={isPrivate} type="editor" onSave={saveHandler} />
      <AceEditor
        placeholder="// Paste or write your code"
        width="100%"
        height="100%"
        wrapEnabled
        mode={language}
        theme={theme}
        name="UNIQUE_ID_OF_DIV"
        fontSize={13}
        focus
        //   enableBasicAutocompletion
        enableLiveAutocompletion
        enableSnippets
        onLoad={instance => (editorInstance.current = instance)}
        value={textInEditor.current}
        onChange={val => (textInEditor.current = val)}

        //   annotations={[{ row: 0, column: 2, type: "error", text: "Some error." }]}
      />
    </div>
  );
};

export default Ace;
