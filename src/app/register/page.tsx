import { Header } from "@/components/Header";
import { RegisterForm } from "@/components/RegisterForm";



export default function Register(){
    return (
        <>
        <Header/>
        <div className="flex">
            <RegisterForm />
            <img src="/RegisterBanner.png" alt="" className="w-full h-full object-cover" />
        </div>
        </>
    )
}