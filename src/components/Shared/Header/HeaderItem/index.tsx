import classNames from "classnames";
import { Title } from "../../../Title";

type Props = {
    className?: string
    children: React.ReactNode
}

export function HeaderItem({
    className,
    children
}: Props){
    return(
        <Title className={classNames(
            `${className} hover:bg-white hover:text-[#FF4555] hover:border-b-4 hover:border-[#FF4555] h-full pr-[25px] pl-[25px] hover:rounded-b-lg`
        )}>
            {children}
        </Title>
    )
    
}