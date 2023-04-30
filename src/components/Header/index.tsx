import Link from "next/link";
import { Button } from "../Button";
import { Logo, Userplus } from "../Icons";
import { Title } from "../Title";
import { HeaderItem } from "../HeaderItem";

export function Header() {
  return (
    <div className="bg-white absolute top-0 w-full h-20 drop-shadow-sm shadow-md rounded-b-md flex items-center justify-between px-10">
      <Link href="https://mesh-site-bf2x.vercel.app/#inte" target="_blank">
        <div className="flex items-center gap-[15px]">
          <img src="/LogoLight.png" alt=""/>
          <Title>
            Mesh <strong>Community</strong>
          </Title>
        </div>
      </Link>

      <div className="flex items-center h-full cursor-pointer">
        <HeaderItem>
          Forum
        </HeaderItem>
        <HeaderItem>
          Cursos
        </HeaderItem>
        <HeaderItem>
          Incubadora
        </HeaderItem>
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
