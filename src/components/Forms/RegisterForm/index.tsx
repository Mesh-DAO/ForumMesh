"use client"
import Link from "next/link";
import { Button } from "../../Button";
import { Input } from "../../Input";
import { Title } from "../../Title";

export function RegisterForm() {
  return (
    <div className="flex items-center justify-center w-[35%]">
      <div className="flex flex-col w-[70%] gap-4">
        <Title className="mb-2" size="2xl" bold={900}>
          Join Mesh Community
        </Title>
        <Title size="lg">
          Get more features and priviliges by joining to the most helpful
          community
        </Title>
        <Input placeHolder="Username" />
        <Input placeHolder="Email" />
        <Input placeHolder="Password" />
        <Input placeHolder="Repeat password" />
        <Button color="orange" className="w-full">
          Register
        </Button>
        <Link href="/login"><Button color="white" className="w-full">Login</Button></Link>
      </div>
    </div>
  );
}
