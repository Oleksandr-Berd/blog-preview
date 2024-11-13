import * as SC from "./CardStyled"

import ICard from "../../utils/interfaces/icard";

const Card:React.FC<ICard> = (props) => {
    const {id, imagePost, status, date, title, content, author, authorAvatar} = props
   
    return ( 
        <SC.CardStyled key={id}>
            <img src={imagePost} alt="card" />
            <SC.StatusCon>
                <p>{status}</p>
            </SC.StatusCon>
            <div>
                <p>PubSC.CardStyledshed {date}</p>
            </div>
            <h3>{title}</h3>
            <p>{content}</p>
            <div>
                <img src={authorAvatar} alt="author" />
                <p>{author}</p>
            </div>
        </SC.CardStyled>
     );
}
 
export default Card;