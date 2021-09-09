import styles from "./NewProblem.module.scss";

import Form from "./ProblemForm/Form";
import { getLeetCodeProblem } from "../../utils/getProblem";
import { useState, useRef } from "react";

import Spinner from "../../UI/Spinner/Spinner";
import LCProblemText from "./LCProblemText/LCProblemText";
import { createNewProblem } from "../../utils/createProblem";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store";
import { loginActions } from "../../store/login-slice";
import { useRouter } from "next/router";

const NewProblem: React.FC = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [showTextarea, setShowTextarea] = useState(false);
  const [showErrMsg, setShowErrMsg] = useState(false);
  const { hard, easy, medium, personal, total } = useSelector(
    (state: RootState) => state.login
  );
  const router = useRouter();
  const dispatch = useDispatch();
  const data = useRef({
    no: "",
    name: "",
    text: "",
    difficulty: "",
    isLC: false,
  });

  const createProblem = async () => {
    setIsLoading(true);
    const result = await createNewProblem(data.current, {
      hard,
      easy,
      medium,
      total,
      personal,
    });
    setIsLoading(false);
    setShowErrMsg(false);
    if (!result?.ok) {
      setShowErrMsg(true);
      return;
    }
    //update store
    if (result.isUpdated)
      dispatch(loginActions.setStatistics(result.isUpdated));
    //route to editor
    router.push(`/editor?type=open&no=${data.current.no}`);
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
      data.current = { no, ...problemData, isLC };
      if (problemData.text === null) {
        setShowTextarea(true);
        setIsLoading(false);
        return;
      }
      setIsLoading(false);
      createProblem();
      return;
    }
    data.current = { no, name: title, text, difficulty: "", isLC };
    setIsLoading(false);
    createProblem();
  };
  return isLoading ? (
    <Spinner />
  ) : showTextarea ? (
    <LCProblemText
      heading={`${data.current.no}- ${data.current.name} (${data.current.difficulty})`}
      continueClicked={text => {
        data.current.text = text;
        createProblem();
        setShowTextarea(false);
      }}
      backClicked={() => {
        setShowTextarea(false);
      }}
    />
  ) : (
    <>
      <Form onSubmit={formSubmitHandler} />
      {showErrMsg && (
        <h5 className={styles.err}>Backend error, please try again.</h5>
      )}
    </>
  );
};

export default NewProblem;
