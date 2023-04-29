import { Dots } from "../Icons/Dots"
import { Title } from "../Title"

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
    postTitle = "titulo teste",
    postContent = "conteudo teste",
    time = "5 minutos atras"
}:Props){
    return(
        <div>
            <div>
                <div>
                    <img src={img} alt="foto perfil" />
                    <div>
                        <Title>{name}</Title>
                        <small>{time}</small>
                    </div>
                    <Dots/>
                </div>
                <div>
                    <Title>{postTitle}</Title>
                    <Title>{postContent}</Title>
                </div>
            </div>
        </div>
    )
}