import { VoteService } from "@/services/VoteService";
import { VoteStore } from "@/stores";
import { useState } from "react";
import toast from "react-hot-toast";

export function useCreateVote(id: string) {
  const { votes, setVotes } = VoteStore((state) => state);
  const [loading, setLoading] = useState(false);
  async function createVote() {
    try {
      const { status, data } = await VoteService.create(id);
      setVotes([...votes, data]);
      if (status === 201) toast.success("Voted!");
      setLoading(false);
      return { status, data };
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  }

  return { createVote, loading };
}
