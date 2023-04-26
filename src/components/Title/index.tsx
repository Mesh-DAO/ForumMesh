import classNames from "classnames";

type Props = {
    children: React.ReactNode
    size?: string
    color?: string
}

export function Title({
    children,
    size = "base",
    color = "black"
}: Props){
    return(
        <h1 className={classNames(
            `text-${size} text-${color} font-Roboto`,
        )}>{children}</h1>
    )
}