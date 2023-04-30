import { Comments } from "../Comments"
import { Dots } from "../Icons/Dots"
import { Shares } from "../Shares"
import { Tag } from "../Tag"
import { Title } from "../Title"
import { Views } from "../Views"

type Props = {
    name?: string
    img?: string
    postTitle?: string
    postContent?: string
    time?: string
}

export function Post({
    name = "teste",
    img = "/fotoPessoa.png",
    postTitle = "Eu amo o Silvio Santos mais que tudo",
    postContent = "O silvio santos é tao legal, eu gosto tanto dele, silvio santos se um dia vc ler isso eu gostaria que voce jogasse um aviaozinho pra mim, voce é o meu idolo e eu sou o teu fã",
    time = "5 minutos atras"
}:Props){
    return(
        <div className="flex flex-col max-w[300px] border-2 border-[#EAEAEA] mr-[2%] ml-[30%] p-[15px] gap-5 rounded-md">
            <div>
                <div className="flex flex-row mb-[5%]">
                    <img src={img} alt="foto perfil"/>
                    <div className="flex flex-row justify-between w-full">
                        <div className="pl-[2%]">
                            <Title><strong>{name}</strong></Title>
                            <small>{time}</small>
                        </div>
                        <Dots/>
                    </div>
                </div>
                <div>
                    <Title><strong>{postTitle}</strong></Title>
                    <Title>{postContent}</Title>
                </div>
                <div className="flex flex-row justify-between">
                    <div className="flex flex-row p-4 gap-4">
                        <Tag>Silvio</Tag>
                        <Tag>Santos</Tag>
                        <Tag>Silvio Santos</Tag>
                    </div>

                    <div className="flex flex-row p-4 gap-2">
                        <Views/>
                        <Comments/>
                        <Shares/>
                    </div>
                </div>
            </div>
        </div>
    )
}