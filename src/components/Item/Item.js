import React from "react";
import { Link } from "react-router-dom";
import { Card } from "semantic-ui-react";
import timeParser from "../../utils/time-parser";

const Item = ({ id, by, time, title, score, descendants, url, loading }) => {
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
            <Card.Description>
              by {by} {timeParser(time)}
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
