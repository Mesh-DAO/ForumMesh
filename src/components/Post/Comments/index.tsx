import { MessageSquare } from "../../Icons/MessageSquare";

type Props = {
  comments: number;
};

export function Comments({ comments }: Props) {
  return (
    <span className="flex flex-row items-center gap-1">
      <MessageSquare />
      {comments}
    </span>
  );
}
