import React, { useEffect, useState, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getItem } from "../../redux/actions/item-actions";
import Item from "../../components/Item/Item";
import Comments from "../../components/Comments/Comments";
import Spinner from "../../components/Spinner/Spinner";

const ItemPage = ({ ...props }) => {
  const [loading, setLoading] = useState(true);
  const item = useSelector((state) => state.item.item);
  const dispatch = useDispatch();
  const itemId = props.match.params.id;

  const fetchItem = useCallback(async () => {
    setLoading(true);
    await Promise.resolve(dispatch(getItem(itemId)));
    setLoading(false);
  }, [dispatch, itemId]);

  useEffect(() => {
    fetchItem(itemId);
  }, [fetchItem, itemId]);

  return (
    <>
      {loading ? (
        <Spinner />
      ) : (
        <>
          <Item
            key={item.id}
            id={item.id}
            by={item.by}
            time={item.time}
            score={item.score}
            title={item.title}
            url={item.url}
            descendants={item.descendants}
            loading={loading}
          />
          <Comments itemId={itemId} descendants={item.descendants} />
        </>
      )}
    </>
  );
};

export default ItemPage;
