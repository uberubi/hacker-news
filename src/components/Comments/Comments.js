import React, { useState, useEffect, useCallback } from "react";
import { Header } from "semantic-ui-react";
import { useSelector, useDispatch } from "react-redux";
import { getComments } from "../../redux/actions/comments-actions";
import SingleComment from "./SingleComment/SingleComment";
import Spinner from "../Spinner/Spinner";
import RefreshButton from "../RefreshButton/RefreshButton";
import BackButton from "../BackButton/BackButton";

const Comments = ({ itemId, descendants }) => {
  const [loading, setLoading] = useState(true);

  const comments = useSelector((state) => state.comments.comments);
  const dispatch = useDispatch();

  const fetchComments = useCallback(async () => {
    setLoading(true);
    await Promise.resolve(dispatch(getComments(itemId)));
    setLoading(false);
  }, [dispatch, itemId]);
  
  useEffect(() => {
    fetchComments();
    const refreshInterval = setInterval(() => {
      fetchComments();
    }, 60000);
    return () => clearInterval(refreshInterval);
  }, [fetchComments, descendants]);

  return (
    <>
      <Header as="h4" dividing >
        <div style={{ marginBottom: "20px" }}>
          <BackButton />
          <RefreshButton
            callback={fetchComments}
            loading={loading}
          />
        </div>
        <div>{descendants === 0 ? "No comments yet.." : `Comments (${descendants})`}</div>
      </Header>

      {loading ? (
        <Spinner />
      ) : (
        comments.kids &&
        comments.kids.map((comment) => (
          <SingleComment key={comment.id} comment={comment} />
        ))
      )}
    </>
  );
};

export default Comments;
