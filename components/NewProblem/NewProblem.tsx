import styles from "./NewProblem.module.scss";

import Form from "./ProblemForm/Form";

const NewProblem: React.FC = () => {
  const formSubmitHandler = (no: string, title: string, text: string): void => {
    console.log(no, title, text);
  };
  return <Form onSubmit={formSubmitHandler} />;
};

export default NewProblem;
