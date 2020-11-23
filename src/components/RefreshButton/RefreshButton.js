import React from "react";
import { Button, Icon } from "semantic-ui-react";

const RefreshButton = ({ callback, loading }) => {
  return (
    <Button size="tiny" color="red" onClick={callback} loading={loading}>
      <Icon name="redo alternate" />
      REFRESH
    </Button>
  );
};

export default RefreshButton;
