import styles from "./NewProblem.module.scss";

import Form from "./ProblemForm/Form";
import { getLeetCodeProblem } from "../../utils/getProblem";
import { useState, useRef } from "react";

import Spinner from "../../UI/Spinner/Spinner";
import LCProblemText from "./LCProblemText/LCProblemText";

const NewProblem: React.FC = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [showTextarea, setShowTextarea] = useState(false);
  const data = useRef({
    no: "",
    title: "",
    text: "",
    difficulty: "",
  });
  const createProblem = () => {
    console.log("creating ", data.current);
  };
  const formSubmitHandler = async (
    no: string,
    title: string,
    text: string,
    isLC: boolean
  ) => {
    setIsLoading(true);
    if (isLC) {
      const problemData = await getLeetCodeProblem(no);
      data.current = { no, ...problemData };
      if (problemData.text === null) {
        setShowTextarea(true);
        setIsLoading(false);
        return;
      }
      setIsLoading(false);
      createProblem();
      return;
    }
    data.current = { no, title, text, difficulty: "" };
    setIsLoading(false);
    createProblem();
  };
  return isLoading ? (
    <Spinner />
  ) : showTextarea ? (
    <LCProblemText
      heading={`${data.current.no}- ${data.current.title} (${data.current.difficulty})`}
      continueClicked={text => {
        data.current.text = text;
        createProblem();
      }}
      backClicked={() => {
        setShowTextarea(false);
      }}
    />
  ) : (
    <Form onSubmit={formSubmitHandler} />
  );
};

export default NewProblem;
