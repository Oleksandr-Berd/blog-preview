import data from "../../data/data.json"
import { handleDataCard } from "../../utils/services/handleDataCard";

const CardList = () => {
    return ( <ul>
        {handleDataCard(data)}
    </ul> );
}
 
export default CardList;