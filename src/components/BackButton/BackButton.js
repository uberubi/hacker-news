import { Button, Icon } from "semantic-ui-react";
import { Link } from "react-router-dom";

const BackButton = () => {
  return (
    <Button as={Link} to="/" size="tiny" color="red">
      <Icon name="arrow left" />
      GO BACK
    </Button>
  );
};
export default BackButton;
