import { useEffect } from "react";
import { Button, Icon } from "semantic-ui-react";

const RefreshButton = ({ callback, loading }) => {

  useEffect(() => {
    const refreshInterval = setInterval(() => {
      callback();
    }, 60000);
    return () => clearInterval(refreshInterval);
  }, [callback]);

  return (
    <Button
      size="tiny"
      color="red"
      onClick={callback}
      loading={loading}
      disabled={loading}
    >
      <Icon name="redo alternate" />
      REFRESH
    </Button>
  );
};

export default RefreshButton;
