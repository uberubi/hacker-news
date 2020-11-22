import React, { useEffect } from "react";
import { Comment, Header } from "semantic-ui-react";
import { compose } from "redux";
import { connect } from "react-redux";
import { getComments } from "../../redux/comments-reducer";
import SingleComment from "./SingleComment/SingleComment";

const Comments = ({ itemId, getComments, comments }) => {
  useEffect(() => {
    fetchComments();
  }, []);

  function fetchComments() {
    getComments(itemId);
  }

  console.log('COMMENTS', comments)
  return (
    <Comment.Group>
      <Header as="h3" dividing>
        Comments
      </Header>
      {comments.kids && comments.kids.map((comment) => (
        <SingleComment
          key={comment.id}
          comment={comment}
          isRootComment={true}
        />
      ))}
    </Comment.Group>
  );
};

const mapStateToProps = (state) => {
  return {
    comments: state.comments.comments,
    // loading: state.home.loading,
  };
};

export default compose(connect(mapStateToProps, { getComments })(Comments));
