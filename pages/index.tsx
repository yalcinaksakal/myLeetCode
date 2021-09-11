import type { NextPage } from "next";
import ProblemList from "../components/ProblemList/ProblemList";

const HomePage: NextPage = () => {
  const list = [
    { no: 1, name: "Two Sum", difficulty: "Easy" },
    { no: 2, name: "Add Two Numbers", difficulty: "Medium" },
    {
      no: 3,
      name: "Longest Substring Without Repeating Characters",
      difficulty: "Medium",
    },
    { no: 1, name: "Two Sum", difficulty: "Easy" },
    { no: 2, name: "Add Two Numbers", difficulty: "Medium" },
    { no: 1, name: "Two Sum", difficulty: "Easy" },
    { no: 2, name: "Add Two Numbers", difficulty: "Medium" },
    {
      no: 3,
      name: "Longest Substring Without Repeating Characters",
      difficulty: "Medium",
    },
    { no: 2, name: "Add Two Numbers", difficulty: "Medium" },
    {
      no: 3,
      name: "Longest Substring Without Longest Substring Without Repeating Longest Substring Without Longest Substring Without Characters",
      difficulty: "Medium",
    },
  ];
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        background: "whitesmoke",
        padding: "5px 0",
        margin: "10px 0",
      }}
    >
      <ProblemList type="open" />
    </div>
  );
};

export default HomePage;
