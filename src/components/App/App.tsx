import type { Votes, VoteType } from "../../types/votes";
import CafeInfo from "../CafeInfo/CafeInfo";
import Notification from "../Notification/Notification";
import VoteOptions from "../VoteOptions/VoteOptions";
import VoteStats from "../VoteStats/VoteStats";
import css from "./App.module.css";
import { useState } from "react";

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
  const resetVotes = () => {
    setVote({
      good: 0,
      neutral: 0,
      bad: 0,
    });
  };
  const totalVotes: number = Object.values(votes).reduce(
    (sum, current) => sum + current,
    0
  );

  const positiveRate: number = totalVotes
    ? Math.round((votes.good / totalVotes) * 100)
    : 0;

  return (
    <div className={css.app}>
      <CafeInfo />
      <VoteOptions
        onVote={handleVote}
        onReset={resetVotes}
        canReset={totalVotes > 0}
      />
      {totalVotes > 0 ? (
        <VoteStats
          votes={votes}
          totalVotes={totalVotes}
          positiveRate={positiveRate}
        />
      ) : (
        <Notification />
      )}
    </div>
  );
}
