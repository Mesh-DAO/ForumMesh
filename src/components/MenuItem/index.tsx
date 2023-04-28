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
        <Title className="hover:bg-[#FCF4EC] hover:text-[#F48023] hover:border-l-4 hover:border-[#F48023] hover:cursor-pointer pl-5 h-[50px]">{children}</Title>
    )
}