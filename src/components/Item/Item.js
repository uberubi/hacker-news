import React from "react";
import { Link } from "react-router-dom";
import { Card } from "semantic-ui-react";
import timeParser from "../../utils/time-parser";

const Item = ({
  id,
  by,
  time,
  title,
  score,
  descendants,
  url,
  loading,
  text,
}) => {
  return (
    <>
      {!loading && (
        <Card
          fluid
          {...(!url && { link: true, as: Link, to: `/item/${id}` })}
          color="red"
        >
          <Card.Content>
            <Card.Header>{title}</Card.Header>
            {url && (
              <Card.Description>
                <a href={url}>{url}</a>
              </Card.Description>
            )}
            {text && (
              <Card.Description dangerouslySetInnerHTML={{ __html: text }}>
              </Card.Description>
            )}

            <Card.Description>
              by <b>{by}</b> {timeParser(time)}
            </Card.Description>
            <Card.Meta>score: {score}</Card.Meta>
            <Card.Meta>Comments: {descendants}</Card.Meta>
          </Card.Content>
        </Card>
      )}
    </>
  );
};
export default Item;
