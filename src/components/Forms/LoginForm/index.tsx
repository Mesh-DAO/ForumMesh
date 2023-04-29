import { Button } from "@/components/Button";
import { Input } from "@/components/Input";
import { Title } from "@/components/Title";

export function LoginForm() {
  return (
    <div className="flex items-center justify-center w-[35%]">
      <div className="flex flex-col w-[70%] gap-4">
        <Title className="mb-2" size="2xl" bold={900}>
          We've Missed You!
        </Title>
        <Title size="lg">
          More than 150 questions are waiting for your wise!
        </Title>

        <Input placeHolder="Username" />
        <Input placeHolder="Password" />

        <Button color="blue" textColor="white" className="w-full">
          Login
        </Button>
      </div>
    </div>
  );
}
