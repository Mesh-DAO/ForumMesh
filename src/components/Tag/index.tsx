type Props = {
    children: React.ReactNode
}

export function Tag({
    children
}: Props){
    return(
        <div className="bg-[#EAEAEA] rounded-lg text-[#808080] flex justify-center items-cente p-2">
            {children}
        </div>
    )
}