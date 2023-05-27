import { Button } from "@/components/Button";
import { Input } from "@/components/Input";
import { Title } from "@/components/Title";
import { useCreateComment } from "@/hooks/useCreateComment";
import { CommentResolve } from "@/validation";
import { Controller, useForm } from "react-hook-form";

export function CreateComment({ id }: { id: string }) {
  const { createComment, loading } = useCreateComment(id);
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<{ message: string }>({
    resolver: CommentResolve,
  });

  return (
    <form
      onSubmit={handleSubmit(createComment)}
      className="flex flex-col border border-[#EAEAEA] p-6 w-[50vw] rounded-md gap-6 shadow-lg drop-shadow-xl hover:border-[#c9c9c9] hover:shadow-xl transition-all duration-300 ease-in-out"
    >
      <Controller
        name="message"
        control={control}
        render={({ field }) => (
          <Input
            {...field}
            placeHolder="Type here your wise suggestion"
            className="h-12"
          />
        )}
      />
      {errors.message && (
        <Title size="sm" color="red">
          {errors.message.message}
        </Title>
      )}
      <Button color="red" type="submit" className="text-white self-end">
        {loading ? "Loading..." : "Suggest"}
      </Button>
    </form>
  );
}
