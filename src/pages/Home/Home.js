import React, { useEffect } from "react";
import { Grid } from "semantic-ui-react";
import { compose } from "redux";
import { connect } from "react-redux";
import { getLatestItemsById } from "../../redux/home-reducer";
import Item from "../../components/Item/Item";

const Home = ({ items, loading, getLatestItemsById }) => {
  
  useEffect(() => {
    fetchItems();
  }, []);

 function fetchItems() {
  getLatestItemsById()
 }
  return (
    <Grid columns={3}>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        items.map((item) => (
          <Item
            key={item.id}
            id={item.id}
            by={item.by}
            time={item.time}
            score={item.score}
            title={item.title}
            url={item.url}
          />
        ))
      )}
    </Grid>
  );
};

const mapStateToProps = (state) => {
  return {
    items: state.home.items,
    loading: state.home.loading,
  };
};

export default compose(connect(mapStateToProps, { getLatestItemsById })(Home));
