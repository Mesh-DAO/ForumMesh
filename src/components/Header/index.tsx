import { Button } from "../Button";
import { Logo, Userplus } from "../Icons";
import { Title } from "../Title";

export function Header(){
    return (
        <div className="bg-white h-20 drop-shadow-2xl shadow-2xl flex items-center justify-between px-10">
            <div className="flex items-center gap-2">
                <Logo/>
                <Title>Mesh <strong>Forum</strong></Title>
            </div>

            <div> 
                <Button color="orange"><Userplus/>Register</Button>
                <Button color="white" width="w-[72px]" className="ml-4">Login</Button>
            </div>
        </div>
    )
}

