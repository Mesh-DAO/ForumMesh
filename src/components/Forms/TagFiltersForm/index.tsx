"use client";
import { ArrowUpRight } from "@/components/Icons/ArrowUpRight";
import { Clock } from "@/components/Icons/Clock";
import { Fire } from "@/components/Icons/Fire";
import { InputRadio } from "@/components/InputRadio";
import { PostStore } from "@/stores";

export function TagFiltersForm() {
  const { setSelectedTag } = PostStore();
  return (
    <form className="flex gap-2">
      <InputRadio defaultChecked={true} onChange={() => setSelectedTag("new")}>
        <Clock />
        New
      </InputRadio>

      <InputRadio onChange={() => setSelectedTag("top")}>
        <ArrowUpRight />
        Top
      </InputRadio>

      <InputRadio onChange={() => setSelectedTag("hot")}>
        <Fire />
        Hot
      </InputRadio>
    </form>
  );
}
