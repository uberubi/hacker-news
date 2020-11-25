import { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Grid } from "semantic-ui-react";
import Item from "../../components/Item/Item";
import ItemSkeleton from "../../components/Item/ItemSkeleton/ItemSkeleton";
import RefreshButton from "../../components/RefreshButton/RefreshButton";
import {
  refreshItemsById,
  getLatestItemsById,
} from "../../redux/actions/home-actions";

const HomePage = () => {
  const { items, loading } = useSelector((state) => state.home);
  const dispatch = useDispatch();

  const refreshItems = useCallback(() => {
    dispatch(refreshItemsById(100));
  }, [dispatch]);

  const fetchItems = useCallback(() => {
    dispatch(getLatestItemsById(100));
  }, [dispatch]);

  useEffect(() => {
    fetchItems();
  }, [fetchItems]);
  
  return (
    <Grid columns={3}>
      <Grid.Row>
        <RefreshButton callback={refreshItems} loading={loading} />
      </Grid.Row>
      <Grid.Row>
        {loading
          ? Array.from(Array(100)).map((el, i) => <ItemSkeleton key={i}/>)
          : items.map((item) => (
              <Item
                key={item.id}
                id={item.id}
                by={item.by}
                time={item.time}
                score={item.score}
                title={item.title}
                descendants={item.descendants}
                loading={loading}
              />
            ))}
      </Grid.Row>
    </Grid>
  );
};

export default HomePage;
