import { Title } from "../Title"

type Props = {
    className?: string
    children: React.ReactNode
}

export function MenuItem({
    className,
    children
} : Props){
    return(
        <Title className="hover:bg-gradient-to-r from-[#FCF4EC] to-white hover:text-[#FF4555] hover:border-l-4 hover:border-[#FF4555] hover:cursor-pointer pl-[20%] h-[50px]">{children}</Title>
    )
}