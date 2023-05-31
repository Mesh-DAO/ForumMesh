"use client";
import { InputFile } from "@/components/InputFile";
import { AddImage, Send } from "@/components/Icons";
import { Button } from "@/components/Button";
import { Select } from "@/components/Select";
import { TextArea } from "@/components/TextArea";
import { Input } from "@/components/Input";
import { Controller, useForm } from "react-hook-form";
import { IPost, IPostPayload } from "@/interfaces";
import { PostResolve } from "@/validation/Post";
import { PostService } from "@/services/PostService";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

export function UpdatePostForm({ postId }: { postId: string }) {
  const [data, setData] = useState<IPost>();
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
      if (!postId) return;
      const { status } = await PostService.updateOne(postId, values);
      if (status === 201) toast.success("Post updated!");
      reset({ image: "", message: "", title: "", type: undefined });
    } catch (error) {
      toast.error("Error to update post!");
      console.error(error);
    }
  }

  useEffect(() => {
    async function fetchData() {
      if (!postId) return;
      const { status, data } = await PostService.findOne(postId);
      if (status === 200) setData(data);
    }
    fetchData();
  }, []);

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col w-[65%] mt-32 min-h-96 border-2 border-[#EAEAEA] rounded-md gap-5 p-10 shadow-md"
    >
      <Controller
        name="type"
        control={control}
        render={({ field }) => (
          <Select
            {...field}
            defaultValue={data?.type}
            placeHolder="Choose categories"
            options={["normal", "question"]}
          />
        )}
      />
      <Controller
        name="title"
        control={control}
        render={({ field }) => (
          <Input
            {...field}
            defaultValue={data?.title}
            placeHolder="Type catching attention title"
          />
        )}
      />
      <Controller
        name="message"
        control={control}
        render={({ field }) => (
          <TextArea
            {...field}
            defaultValue={data?.message}
            rows={10}
            placeHolder="Type your question"
          />
        )}
      />

      <div className="flex flex-col gap-2 text-red-600 font-Roboto text-sm">
        <span>{errors.image && errors.image.message}</span>
        <span>{errors.message && errors.message.message}</span>
        <span>{errors.title && errors.title.message}</span>
      </div>

      <div className="flex justify-between">
        <Controller
          name="image"
          control={control}
          render={({ field }) => (
            <InputFile {...field} defaultValue={data?.message}>
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
            className="font-medium text-xs flex items-center gap-2 text-white"
          >
            <Send />
            Publish
          </Button>
        </div>
      </div>
    </form>
  );
}
