"use client";
import { InputFile } from "@/components/InputFile";
import { AddImage, Send } from "@/components/Icons";
import { Button } from "@/components/Button";
import { Select } from "@/components/Select";
import { TextArea } from "@/components/TextArea";
import { Input } from "@/components/Input";
import { Controller, useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { IPostPayload } from "@/interfaces";
import { PostResolve } from "@/validation/Post";
import { PostService } from "@/services/PostService";
import { useState } from "react";

export function CreatePostForm() {
  const [file, setFile] = useState<any>();
  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<IPostPayload>({
    resolver: PostResolve,
  });

  async function onSubmit(values: IPostPayload) {
    try {
      console.log(values);
      const payload = { ...values, file };
      await PostService.create(payload);
      toast.success("Post created!");
      reset({ image: "", message: "", title: "", type: undefined });
    } catch (error) {
      toast.error("Error to create a post!");
      console.error(error);
    }
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col w-[65%] mt-32 min-h-96 h-96 border-2 border-[#EAEAEA] rounded-md gap-5 p-10 shadow-md"
    >
      <Controller
        name="type"
        control={control}
        render={({ field }) => (
          <Select
            {...field}
            onChange={(e) => console.log(e)}
            placeHolder="Choose categories"
            options={["option1", "option2"]}
          />
        )}
      />
      <Controller
        name="title"
        control={control}
        render={({ field }) => (
          <Input {...field} placeHolder="Type catching attention title" />
        )}
      />
      <Controller
        name="message"
        control={control}
        render={({ field }) => (
          <TextArea {...field} placeHolder="Type your question" />
        )}
      />

      <div className="flex justify-between">
        <Controller
          name="image"
          control={control}
          render={({ field }) => (
            <InputFile {...field} onChange={(e) => setFile(e.target.files)}>
              <AddImage />
              Add Image
            </InputFile>
          )}
        />

        <div className="flex gap-5">
          <Button type="button" color="white" className="font-medium text-xs">
            Save as draft
          </Button>
          <Button
            type="submit"
            color="red"
            className="font-medium text-xs flex gap-2 text-white"
          >
            <Send />
            Publish
          </Button>
        </div>
      </div>
    </form>
  );
}
