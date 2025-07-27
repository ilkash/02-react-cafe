import CafeInfo from "../CafeInfo/CafeInfo";
import VoteOptions from "../VoteOptions/VoteOptions";
import VoteStats from "../VoteStats/VoteStats";
import css from "./App.module.css";
import { useState } from "react";

interface Votes {
  good: number;
  neutral: number;
  bad: number;
}

type VoteType = keyof Votes;
export default function App() {
  const [votes, setVote] = useState<Votes>({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const handleVote = (voteNames: VoteType) => {
    setVote({
      ...votes,
      [voteNames]: votes[voteNames] + 1,
    });
  };
  return (
    <div className={css.app}>
      <CafeInfo />
      <VoteOptions onVote={handleVote} />
      <VoteStats votes={votes} />
    </div>
  );
}
