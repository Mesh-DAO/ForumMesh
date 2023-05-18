'use client'
import { InputRadio } from "@/components/InputRadio";

export function TagFiltersForm() {
	return (
		<form
			className="flex gap-2"
		>
      <InputRadio SVG="clock">New</InputRadio>

      <InputRadio SVG="arrowUpRight">Top</InputRadio>

      <InputRadio SVG="fire">Hot</InputRadio>

      <InputRadio SVG="checkClose">Closed</InputRadio>
		</form>
	)
}