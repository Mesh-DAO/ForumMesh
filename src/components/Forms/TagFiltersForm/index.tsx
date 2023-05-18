'use client'
import { ArrowUpRight } from "@/components/Icons/ArrowUpRight";
import { CheckClose } from "@/components/Icons/CheckClose";
import { Clock } from "@/components/Icons/Clock";
import { Fire } from "@/components/Icons/Fire";
import { InputRadio } from "@/components/InputRadio";

export function TagFiltersForm() {
	return (
		<form
			className="flex gap-2"
		>
      <InputRadio>
        <Clock />
        New
      </InputRadio>

      <InputRadio>
        <ArrowUpRight />
        Top
      </InputRadio>

      <InputRadio>
        <Fire />
        Hot
      </InputRadio>

      <InputRadio>
        <CheckClose />
        Closed
      </InputRadio>
		</form>
	)
}