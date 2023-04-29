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
        <Title className="hover:bg-gradient-to-r from-[#FCF4EC] to-white hover:text-[#F48023] hover:border-l-4 hover:border-[#F48023] hover:cursor-pointer pl-[10%] h-[50px]">{children}</Title>
    )
}