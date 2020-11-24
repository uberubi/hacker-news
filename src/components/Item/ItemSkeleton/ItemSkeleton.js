import { Card, Placeholder } from "semantic-ui-react";

const ItemSkeleton = ({ url, text }) => {
  return (
    <Card fluid color="red">
      <Card.Content>
        <Placeholder>
          <Placeholder.Line length="very long" />
          {url && <Placeholder.Line length="very long" />}
          {text && (
            <>
              <Placeholder.Line length="very long" />
              <Placeholder.Line length="very long" />
              <Placeholder.Line length="very long" />
            </>
          )}
          <Placeholder.Line length="medium" />
          <Placeholder.Line length="short" />
          <Placeholder.Line length="short" />
        </Placeholder>
      </Card.Content>
    </Card>
  );
};

export default ItemSkeleton;
