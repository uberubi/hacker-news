import { useEffect, useState, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getItem } from "../../redux/actions/itemActions";
import ItemCard from "../../components/ItemCard/ItemCard";
import Comments from "../../components/Comments/Comments";
import ItemSkeleton from "../../components/ItemCard/ItemCardSkeleton/ItemCardSkeleton";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";

const Item = ({ ...props }) => {
  const [itemId] = useState(props.match.params.id);
  const { item, loading } = useSelector((state) => state.item);
  const { error } = useSelector((state) => state.errors);

  const dispatch = useDispatch();

  const fetchItem = useCallback(() => {
    dispatch(getItem(itemId));
  }, [dispatch, itemId]);

  useEffect(() => {
    fetchItem(itemId);
  }, [fetchItem, itemId]);

  return (
    <>
      {error && <ErrorMessage error={error} />}
      {item && (
        <>
          {loading ? (
            <ItemSkeleton />
          ) : (
            <ItemCard
              key={item.id}
              id={item.id}
              by={item.by}
              time={item.time}
              score={item.score}
              title={item.title}
              text={item.text}
              url={item.url}
              descendants={item.descendants}
            />
          )}

          <Comments itemId={itemId} descendants={item.descendants} />
        </>
      )}
    </>
  );
};

export default Item;
