import { ArrowUp } from "../../Icons/ArrowUp";

type Props = {
  votes: number;
};

export function Votes({ votes }: Props) {
  return (
    <span className="flex flex-row items-center gap-1">
      <ArrowUp />
      {votes}
    </span>
  );
}
