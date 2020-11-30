import { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Grid } from "semantic-ui-react";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";
import ItemCard from "../../components/ItemCard/ItemCard";
import ItemCardSkeleton from "../../components/ItemCard/ItemCardSkeleton/ItemCardSkeleton";
import RefreshButton from "../../components/RefreshButton/RefreshButton";
import { getLatestItemsById } from "../../redux/actions/homeActions";

const Home = () => {
  const { items, loading } = useSelector((state) => state.home);
  const { error } = useSelector((state) => state.errors);

  const dispatch = useDispatch();

  const refreshItems = useCallback(() => {
    const isRefresh = true;
    dispatch(getLatestItemsById(100, isRefresh));
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
      {error && (
        <Grid.Row>
          <ErrorMessage error={error} />
        </Grid.Row>
      )}
      <Grid.Row>
        {items.length === 0
          ? Array.from(Array(100)).map((el, i) => <ItemCardSkeleton key={i} />)
          : items.map((item) => (
              <ItemCard
                key={item.id}
                id={item.id}
                by={item.by}
                time={item.time}
                score={item.score}
                title={item.title}
                descendants={item.descendants}
              />
            ))}
      </Grid.Row>
    </Grid>
  );
};

export default Home;
