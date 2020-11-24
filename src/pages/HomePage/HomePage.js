import React, { useCallback, useEffect, useState } from "react";
import { Grid } from "semantic-ui-react";
import { useSelector, useDispatch } from "react-redux";
import { getLatestItemsById } from "../../redux/actions/home-actions";
import Item from "../../components/Item/Item";
import Spinner from "../../components/Spinner/Spinner";
import RefreshButton from "../../components/RefreshButton/RefreshButton";

const HomePage = () => {
  const [loading, setLoading] = useState(true);
  const items = useSelector((state) => state.home.items);
  const dispatch = useDispatch();

  const fetchItems = useCallback(async () => {
    setLoading(true);
    await Promise.resolve(dispatch(getLatestItemsById(100)));
    setLoading(false);
  }, [dispatch]);

  useEffect(() => {
    fetchItems();
    const refreshInterval = setInterval(() => {
      fetchItems();
    }, 60000);
    return () => clearInterval(refreshInterval);
  }, [fetchItems]);

  return (
    <Grid columns={3}>
      {loading ? (
        <Spinner />
      ) : (
        <>
          <Grid.Row>
            <RefreshButton callback={fetchItems} loading={loading} />
          </Grid.Row>
          <Grid.Row>
            {items.map((item) => (
              <Item
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
        </>
      )}
    </Grid>
  );
};

export default HomePage;
