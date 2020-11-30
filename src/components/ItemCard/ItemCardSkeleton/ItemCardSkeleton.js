import { Card, Placeholder } from "semantic-ui-react";

const ItemCardSkeleton = () => {
  return (
    <Card fluid color="red">
      <Card.Content>
        <Placeholder>
          <Placeholder.Line length="very long" />
          <Placeholder.Line length="very long" />
          <Placeholder.Line length="medium" />
          <Placeholder.Line length="short" />
          <Placeholder.Line length="short" />
        </Placeholder>
      </Card.Content>
    </Card>
  );
};

export default ItemCardSkeleton;
