import { Button } from "../Button";
import { Input } from "../Input";
import { Title } from "../Title";

export function RegisterForm(){
    return(
        <>
        <div className="flex items-center w-[580px] h-[815px] pl-[120px]">
            <div className="flex flex-col w-[400px] h-[600px]">
                <Title className="mb-4" size="[4em]"><strong>Join Mesh Community</strong></Title>
                <Title className="mb-2">Get more features and priviliges by joining to the most helpful community</Title>
                <Input placeHolder="Username"></Input>
                <Input placeHolder="Email"></Input>
                <Input placeHolder="Password"></Input>
                <Input placeHolder="Repeat password"></Input>
                <Button color="orange" className="mt-2 w-[380px]">Register</Button>
            </div>
        </div>
        </>
    )
}