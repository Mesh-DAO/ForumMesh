import { Award } from "../Icons/Award";
import { Github } from "../Icons/Github";
import { Heart } from "../Icons/Heart";
import { HelpCircle } from "../Icons/HelpCircle";
import { Instagram } from "../Icons/Instagram";
import { List } from "../Icons/List";
import { MessageCircle } from "../Icons/MessageCircle";
import { Search } from "../Icons/Search";
import { Tag } from "../Icons/Tag";
import { Input } from "../Input";
import { Title } from "../Title";

export function SideBar() {
  return (
    <div className="fixed top-[130px] flex items-center flex-col justify-center w-[20%]">
      <div className="flex flex-col w-[70%] gap-4">
        <div className="flex items-center mb-5">
            <Search/>
            <Input placeHolder="Search" borderColor="transparent"  className="ml-3 flex-grow"/>
        </div>
        
        <div className="flex flex-col gap-10">
            <div className="flex flex-col gap-6">
                <Title size="sm" color="gray">MENU</Title>
                <Title><List/>Questions</Title>
                <Title><Tag/>Tags</Title>
                <Title><Award/>Ranking</Title>
            </div>
            
            <div className="flex flex-col gap-6">
                <Title size="sm" color="gray">PERSONAL NAVIGATOR</Title>
                <Title><HelpCircle/>Your questions</Title>
                <Title><MessageCircle/>Your answers</Title>
                <Title><Heart/>Your likes & Votes</Title>
            </div>
        </div>
        {/* <div className="flex flex-row items-center justify-center gap-5">
            <Github/>
            <Instagram/>
        </div> */}
      </div>
        <div className="fixed bottom-10 flex items-center justify-center">
          <div className="flex flex-row gap-3 items-center justify-center">
            <Github />
            <Instagram />
          </div>
        </div>
    </div>
  );
}
