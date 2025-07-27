import css from "./VoteOptions.module.css";

interface VoteOptionsProps {
  onVote: (voteName: "neutral" | "good" | "bad") => void;
}
export default function VoteOptions({ onVote }: VoteOptionsProps) {
  return (
    <div className={css.container}>
      <button onClick={() => onVote("good")} className={css.button}>
        Good
      </button>
      <button onClick={() => onVote("neutral")} className={css.button}>
        Neutral
      </button>
      <button onClick={() => onVote("bad")} className={css.button}>
        Bad
      </button>
      <button className={`${css.button} ${css.reset}`}>Reset</button>
    </div>
  );
}
