import React, { useEffect } from "react";
import { compose } from "redux";
import { connect } from "react-redux";
import { getItem } from "../../redux/item-reducer";
import { Card } from "semantic-ui-react";
import dayjs from "dayjs";
import LocalizedFormat from "dayjs/plugin/localizedFormat";
import Comments from "../../components/Comments/Comments";
dayjs.extend(LocalizedFormat); // extend dayjs with LocalizedFormat plugin

const SingleItem = ({ getItem, item, loading, ...props }) => {
  const itemId = props.match.params.id;
  useEffect(() => {
    fetchItem();
  }, []);

  function fetchItem() {
    getItem(itemId);
  }

  return (
    <>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <>
          <Card fluid color="red">
            <Card.Content>
              <Card.Header>{item.title}</Card.Header>
              <Card.Meta>{item.score}</Card.Meta>
              <Card.Meta>{dayjs.unix(item.time).format("LLL")}</Card.Meta>
              <Card.Description>{item.by}</Card.Description>
            </Card.Content>
          </Card>
          <Comments itemId={itemId} />
        </>
      )}
    </>
  );
};

const mapStateToProps = (state) => ({
  item: state.item.item,
  loading: state.item.loading,
});

export default compose(connect(mapStateToProps, { getItem })(SingleItem));
