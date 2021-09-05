import styles from "./Problem.module.scss";

const Problem: React.FC = () => {
  return (
    <textarea
      className={styles.problem}
      disabled
      value="In mollit adipisicing Lorem do reprehenderit voluptate aliqua esse amet. Minim ea magna elit in nostrud Lorem sunt ad reprehenderit amet exercitation. Cillum anim mollit id quis velit dolore ex Lorem do nostrud. Ex ullamco occaecat nisi incididunt velit eiusmod excepteur sint quis culpa.

Aliqua aliquip ullamco magna magna exercitation minim Lorem esse exercitation velit. Occaecat duis voluptate elit proident laboris eu pariatur exercitation eu nisi duis ipsum. Labore pariatur laboris non enim culpa. Consequat aute deserunt laborum sint dolore tempor est tempor.

Proident voluptate anim nulla ad elit aliqua. Deserunt mollit ipsum occaecat id. Non commodo in excepteur et irure nulla esse adipisicing aliquip laborum laborum velit nisi. Voluptate sint Lorem minim Lorem."
    ></textarea>
  );
};

export default Problem;
