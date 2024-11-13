import CardList from "../components/Card/CardList";
import * as SC from "./SharedLayoutStyled";

const SharedLayout: React.FC = () => {
  return (
    <SC.StyledSharedLayout>
      <CardList />
    </SC.StyledSharedLayout>
  );
};

export default SharedLayout;
