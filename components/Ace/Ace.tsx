import AceEditor from "react-ace";
import "ace-builds/src-noconflict/mode-javascript";
import "ace-builds/src-noconflict/theme-tomorrow_night_bright";
import "ace-builds/src-noconflict/ext-language_tools";
import "ace-builds/src-noconflict/snippets/javascript";

import styles from "./Ace.module.scss";

const Ace: React.FC = () => {
  return (
    <div className={styles.editor}>
      <AceEditor
        placeholder="// Paste or write your code"
        width="100%"
        height="100%"
        wrapEnabled={true}
        mode="javascript"
        theme="tomorrow_night_bright"
        name="UNIQUE_ID_OF_DIV"
        editorProps={{ $blockScrolling: true }}
        fontSize={14}
        focus
        //   enableBasicAutocompletion
        enableLiveAutocompletion
        enableSnippets

        //   annotations={[{ row: 0, column: 2, type: "error", text: "Some error." }]}
      />
    </div>
  );
};

export default Ace;
