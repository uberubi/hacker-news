import { useEffect, useCallback } from "react";
import { Header } from "semantic-ui-react";
import { useSelector, useDispatch } from "react-redux";
import {
  getComments,
  clearComments,
} from "../../redux/actions/commentsActions";
import SingleComment from "./SingleComment/SingleComment";
import RefreshButton from "../RefreshButton/RefreshButton";
import BackButton from "../BackButton/BackButton";
import ErrorMessage from "../ErrorMessage/ErrorMessage";

const Comments = ({ itemId, descendants }) => {
  const { comments, loading } = useSelector((state) => state.comments);
  const { error } = useSelector((state) => state.errors);

  const dispatch = useDispatch();

  const fetchComments = useCallback(async () => {
    dispatch(getComments(itemId));
  }, [dispatch, itemId]);

  useEffect(() => {
    fetchComments();
    return () => dispatch(clearComments());
  }, [fetchComments, dispatch]);

  return (
    <>
      {error && <ErrorMessage error={error} />}
      <Header as="h4" dividing>
        <div style={{ marginBottom: "20px" }}>
          <BackButton />
          <RefreshButton callback={fetchComments} loading={loading} />
        </div>
        {loading ? (
          <p>loading...</p>
        ) : descendants ? (
          `Comments (${descendants})`
        ) : (
          "No comments yet :("
        )}
      </Header>
      {comments &&
        comments.kids?.map((comment) => (
          <SingleComment key={comment.id} comment={comment} />
        ))}
    </>
  );
};

export default Comments;
