import { LinkIcon } from "../Icons/LinkIcon";
import { Star } from "../Icons/Star";
import { LinkPanel } from "../LinkPanel";
import { Title } from "../Title";

export function RightPanel(){
    return(
        <div className="flex flex-col w-[20%] border-2 border-[#EAEAEA] mr-[2%] p-[15px] gap-5 rounded-md">
            <div className="flex flex-col gap-3">
                <Title><Star/>Must-read posts</Title>
                <hr />
                <LinkPanel>Please read rules before you start working on a platform</LinkPanel>
                <LinkPanel>Vision & Strategy of Alemhelp</LinkPanel>
            </div>
            <div className="flex flex-col gap-3">
                <Title><LinkIcon/> Must-read posts</Title>
                <hr />
                <LinkPanel>Alemhelp source-code on github</LinkPanel>
                <LinkPanel>Golang best-practices</LinkPanel>
                <LinkPanel>Alem School dashboard</LinkPanel>
            </div>
        </div>
    )
}