import React, { useEffect, useState, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getItem } from "../../redux/actions/item-actions";
import Item from "../../components/Item/Item";
import Comments from "../../components/Comments/Comments";
import Spinner from "../../components/Spinner/Spinner";

const ItemPage = ({ ...props }) => {
  const [itemId] = useState(props.match.params.id);
  const { item, loading } = useSelector((state) => state.item);
  const dispatch = useDispatch();

  const fetchItem = useCallback(() => {
    dispatch(getItem(itemId));
  }, [dispatch, itemId]);

  useEffect(() => {
    fetchItem(itemId);
  }, [fetchItem, itemId]);

  return (
    <>
      <Item
        key={item.id}
        id={item.id}
        by={item.by}
        time={item.time}
        score={item.score}
        title={item.title}
        text={item.text}
        url={item.url}
        descendants={item.descendants}
        loading={loading}
      />
      <Comments itemId={itemId} descendants={item.descendants} />
    </>
  );
};

export default ItemPage;
