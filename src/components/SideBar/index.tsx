import { Award } from "../Icons/Award";
import { Facebook } from "../Icons/Facebook";
import { Github } from "../Icons/Github";
import { Heart } from "../Icons/Heart";
import { HelpCircle } from "../Icons/HelpCircle";
import { Instagram } from "../Icons/Instagram";
import { List } from "../Icons/List";
import { MessageCircle } from "../Icons/MessageCircle";
import { Search } from "../Icons/Search";
import { Tag } from "../Icons/Tag";
import { Input } from "../Input";
import { MenuItem } from "../MenuItem";
import { Title } from "../Title";

export function SideBar() {
  return (
    <div className="fixed top-[130px] flex  flex-col justify-center w-[20%]">
      <div className="flex flex-col w-full gap-4">
        <div className="flex items-center mb-5 pl-[10%]">
            <Search/>
            <Input placeHolder="Search" borderColor="transparent"  className="ml-2 flex-grow"/>
        </div>
        
        <div className="flex flex-col gap-6 w-[60%]">
            <div className="flex flex-col ">
                <Title size="sm" color="gray" className="pl-[20%] mb-[10px]">MENU</Title>
                <MenuItem><List/>Questions</MenuItem>
                <MenuItem><Tag/>Tags</MenuItem>
                <MenuItem><Award/>Ranking</MenuItem>
            </div>
            
            <div className="flex flex-col ">
                <Title size="sm" color="gray" className="pl-[20%] mb-[10px]">PERSONAL NAVIGATOR</Title>
                <MenuItem><HelpCircle/>Questions</MenuItem>
                <MenuItem><MessageCircle/>Answers</MenuItem>
                <MenuItem><Heart/>Likes & Votes</MenuItem>
            </div>
        </div>
      </div>
        <div className="fixed bottom-[10px] flex items-center justify-center w-[20%]">
          <div className="flex flex-row gap-3 items-center justify-center">
            <Github />
            <Instagram />
            <Facebook/>
          </div>
        </div>
    </div>
  );
}
