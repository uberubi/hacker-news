import { memo } from "react";
import { Link } from "react-router-dom";
import { Card } from "semantic-ui-react";
import timeParser from "../../utils/time-parser";

const ItemCard = memo(
  ({ id, by, time, title, score, descendants, url, text }) => {
    return (
      <>
        {
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
                <Card.Description
                  dangerouslySetInnerHTML={{ __html: text }}
                ></Card.Description>
              )}

              <Card.Description>
                by <b>{by}</b> {timeParser(time)}
              </Card.Description>
              <Card.Meta>score: {score}</Card.Meta>
              <Card.Meta>Comments: {descendants}</Card.Meta>
            </Card.Content>
          </Card>
        }
      </>
    );
  }
);
export default ItemCard;
