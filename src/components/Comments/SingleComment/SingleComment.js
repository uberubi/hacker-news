import React, { useState } from "react";
import { Comment } from "semantic-ui-react";
import timeParser from "../../../utils/time-parser";

const SingleComment = ({ comment }) => {
  const [collapsed, setCollapsed] = useState(true);

  function handleCheckbox() {
    if (singleCommentsCount !== "0") {
      setCollapsed(!collapsed);
    }
  }
  const nestedComments = (comment.kids || []).map((_comment) => {
    return <SingleComment key={_comment.id} comment={_comment} />;
  });

  const singleCommentsCount =
    comment.kids?.length === undefined ? "0" : comment.kids?.length;

  return (
    <>
      <Comment.Group style={{ maxWidth: "100%" }}>
        <Comment>
          <Comment.Content>
            <Comment.Author>{comment.by}</Comment.Author>
            <Comment.Metadata>
              <span>{timeParser(comment.time)}</span>
            </Comment.Metadata>
            <Comment.Text
              dangerouslySetInnerHTML={{ __html: comment.text }}
            ></Comment.Text>
            <Comment.Actions>
              <Comment.Action
                style={
                  singleCommentsCount > 0
                    ? { color: "red" }
                    : { color: "grey", cursor: "default" }
                }
                onClick={handleCheckbox}
              >{`Comments ${singleCommentsCount}`}</Comment.Action>
            </Comment.Actions>
          </Comment.Content>
          <Comment.Group collapsed={collapsed}>{nestedComments}</Comment.Group>
        </Comment>
      </Comment.Group>
    </>
  );
};

export default SingleComment;
