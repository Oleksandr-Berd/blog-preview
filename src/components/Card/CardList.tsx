import * as SC from "./CardStyled"

import data from "../../data/data.json"
import { handleDataCard } from "../../utils/services/handleDataCard";

const CardList = () => {
    return ( <SC.CardList>
        {handleDataCard(data)}
    </SC.CardList> );
}
 
export default CardList;