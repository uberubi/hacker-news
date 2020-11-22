import React from "react";
import { Link } from "react-router-dom";
import { Grid, Card } from "semantic-ui-react";

import dayjs from "dayjs";
import LocalizedFormat from "dayjs/plugin/localizedFormat";
dayjs.extend(LocalizedFormat); // extend dayjs with LocalizedFormat plugin

const Item = ({ id, by, time, title, score, url }) => {
  return (
    <Grid.Row>
      <Card fluid link as={Link} to={`/item/${id}`} color="red">
        <Card.Content>
          <Card.Header>{title}</Card.Header>
          <Card.Meta>{score}</Card.Meta>
          <Card.Meta>{dayjs.unix(time).format("LLL")}</Card.Meta>
          <Card.Description>{by}</Card.Description>
        </Card.Content>
      </Card>
    </Grid.Row>
  );
};
export default Item;
