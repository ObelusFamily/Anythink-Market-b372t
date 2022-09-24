import ItemPreview from "./ItemPreview";
import ListPagination from "./ListPagination";
import React from "react";

const ItemList = (props) => {
  if (!props.items) {
    return <div className="py-4">Loading...</div>;
  }

  if (props.searchTitle !== "" && props.items.length === 0) {
    return (
      <div
        id="empty"
        className=" mx-auto text-center py-5 mt-4"
        style={{
          width: "100%",
          maxWidth: "568px",
          backgroundColor: "rgba(85,22,120,0.7)",
        }}
      >
        <i className="ion-sad-outline display-1"></i>
        <p>
          No items found for "<b>{props.searchTitle}</b>"
        </p>
      </div>
    );
  }

  if (props.items.length === 0) {
    return <div className="py-4 no-items">No items are here... yet.</div>;
  }

  return (
    <div className="container py-2">
      <div className="row">
        {props.items.map((item) => {
          return (
            <div className="col-sm-4 pb-2" key={item.slug}>
              <ItemPreview item={item} />
            </div>
          );
        })}
      </div>

      <ListPagination
        pager={props.pager}
        itemsCount={props.itemsCount}
        currentPage={props.currentPage}
      />
    </div>
  );
};

export default ItemList;
