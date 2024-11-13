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
            <SC.DateCon>
                <p>Published {date}</p>
            </SC.DateCon>
            <SC.Title>{title}</SC.Title>
            <SC.Content>{content}</SC.Content>
            <SC.AuthorCon>
                <img src={authorAvatar} alt="author" />
                <p>{author}</p>
            </SC.AuthorCon>
        </SC.CardStyled>
     );
}
 
export default Card;