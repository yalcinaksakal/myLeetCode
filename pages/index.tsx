import type { NextPage } from "next";
import ProblemList from "../components/ProblemList/ProblemList";

import styles from "../styles/Home.module.scss";

const Home: NextPage = () => {
  const list = [
    { no: 1, name: "Two Sum", difficulty: "Easy" },
    { no: 2, name: "Add Two Numbers", difficulty: "Medium" },
    {
      no: 3,
      name: "Longest Substring Without Repeating Characters",
      difficulty: "Medium",
    },
    {
      no: 2000,
      name: "Longest Substring Without Repeating Longest Substring Without Repeating Characters",
      difficulty: "Difficult",
    },
  ];
  return <ProblemList list={list} />;
};

export default Home;
