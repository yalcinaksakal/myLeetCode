import styles from "./LCProblemText.module.scss";

import { useRef, useState } from "react";

const LCProblemText: React.FC<{
  heading: string;
  continueClicked: (text: string) => void;
  backClicked: () => void;
}> = ({ heading, backClicked, continueClicked }) => {
  const textElement = useRef();
  const [isTextEntered, setIsTextEntered] = useState(false);
  return (
    <div className={styles.text}>
      <p>LeetCode Problem</p>
      <h4>{heading}</h4>
      <textarea
        ref={textElement}
        placeholder="Problem"
        autoFocus
        onChange={() => setIsTextEntered(textElement.current.value.length > 0)}
      ></textarea>
      <div>
        <button className={styles.red} onClick={backClicked}>
          Back
        </button>
        <button
          disabled={!isTextEntered}
          onClick={() => continueClicked(textElement.current.value)}
        >
          Continue
        </button>
      </div>
    </div>
  );
};

export default LCProblemText;
