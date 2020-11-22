import React, { useState } from "react";
import { Checkbox, Comment } from "semantic-ui-react";

const SingleComment = ({ id, comment, isRootComment }) => {
  const [collapsed, setCollapsed] = useState(true);

  function handleCheckbox() {
    if (commentsCount !== "0") {
      setCollapsed(!collapsed);
    }
  }

  const nestedComments = (comment.kids || []).map((_comment) => (
    // <div key={comment.id}>
    //   <Comment.Group>
    //     <p>{comment.title}</p>
    //     <p>{comment.by}</p>
    //     <p>{comment.text}</p>
    //     <p>{comment.url}</p>
    //   </Comment.Group>
    // </div>
    <SingleComment key={_comment.id} comment={_comment} />
  ));

  let commentsCount =
    comment.kids?.length === undefined ? "0" : comment.kids?.length;

  return (
    <>
      <Comment.Group>
        <Comment>
          <Comment.Content>
            <Comment.Author>{comment.by}</Comment.Author>
            <Comment.Metadata>
              <span>{comment.time}</span>
            </Comment.Metadata>
            <Comment.Text
              dangerouslySetInnerHTML={{ __html: comment.text }}
            ></Comment.Text>
            <Comment.Actions>
              <Comment.Action
                onClick={handleCheckbox}
              >{`Comments ${commentsCount}`}</Comment.Action>
            </Comment.Actions>
          </Comment.Content>
          <Comment.Group collapsed={collapsed}>{nestedComments}</Comment.Group>
        </Comment>
      </Comment.Group>
    </>
  );
};

export default SingleComment;
