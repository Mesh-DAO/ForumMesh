'use client'
import { Input } from "../../Input";
import { Select } from "../../Select";
import { Button } from "../../Button";
import { TextArea } from "../../TextArea";
import { InputFile } from "@/components/InputFile";
import { AddImage, Send } from "@/components/Icons";

export function CreatePostForm() {
	return (
		<form
			className="flex flex-col w-2/4 h-[562px] border-2 border-[#EAEAEA] rounded-md gap-5 px-8 py-10 shadow-md"
		>
			<Select placeHolder="Choose categories" options={['option1', 'option2']} value="option1" />

			<Input placeHolder="Type catching attention title" />

			<TextArea placeHolder="Type your question" />

			<div className="flex justify-between">
				<InputFile>
					<AddImage  />
      		Add Image
				</InputFile>

				<div className="flex gap-5">
					<Button className="flex gap-2 font-Roboto font-normal text-xs bg-[#EAEAEA] opacity-50 text-slate-500 hover:opacity-100">
						Save as draft
					</Button>

					<Button className="flex gap-2 font-Roboto font-black text-xs bg-brand-red opacity-50 text-white hover:opacity-100">
						<Send  />
						Publish
					</Button>
				</div>
			</div>
		</form>
	)
}