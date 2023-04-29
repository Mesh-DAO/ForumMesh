import Link from "next/link";
import { Button } from "../Button";
import { Logo, Userplus } from "../Icons";
import { Title } from "../Title";

export function Header() {
  return (
    <div className="bg-white absolute top-0 w-full h-20 drop-shadow-sm shadow-md rounded-b-md flex items-center justify-between px-10">
      <div className="flex items-center gap-[15px]">
        <img src="/LogoLight.png" alt=""/>
        <Title>
          Mesh <strong>Community</strong>
        </Title>
        
      </div>

      <div className="flex items-center gap-10">
        <Title>
          Forum
        </Title>
        <Title>
          Cursos
        </Title>
        <Title>
          Incubadora
        </Title>
      </div>

      <div className="flex items-center">
        <Link href="/register">
          <Button color="blue" textColor="white" className="gap-2">
            <Userplus />
            Register
          </Button>
        </Link>
        <Link href="/login">
          <Button color="red"  width="w-[72px]"  className="ml-4">
            Login
          </Button>
        </Link>
      </div>
    </div>
  );
}
