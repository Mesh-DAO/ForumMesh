import { VoteService } from "@/services/VoteService";
import { VoteStore } from "@/stores";
import { useEffect, useState } from "react";

export function useGetVotesByPost(id: string) {
  const { votes, setVotes } = VoteStore((state) => state);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    VoteService.findAllByPost(id)
      .then(({ data }) => {
        setVotes(data);
        setLoading(false);
      })
      .catch((err) => console.error(err));
  }, [id, setVotes]);
  return { votes, loading };
}
