import React, { useState } from "react";
import logo from "../../imgs/logo.png";
import { connect } from "react-redux";
import { APPLY_TITLE_FILTER } from "../../constants/actionTypes";
import agent from "../../agent";

const mapStateToProps = (state) => ({
  ...state.itemList,
});

const mapDispatchToProps = (dispatch) => ({
  filterItemsByTitle: (title, payload) =>
    dispatch({ type: APPLY_TITLE_FILTER, title, payload }),
});

const Banner = (props) => {
  // console.log("Banner",props)

  const searchItems = (e) => {
    const { value } = e.target;

    const lengthOfInput = value.length;

    if (value && lengthOfInput >= 3) {
      props.filterItemsByTitle(value, agent.Items.byTitle(value));
    }

    if (!value || lengthOfInput < 3) {
      props.filterItemsByTitle("", agent.Items.all());
    }
  };

  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const showSearchBar = (e) => {
    e.preventDefault();
    setIsSearchOpen(true);
  };
  return (
    <div className="banner text-white">
      <div className="container p-4 text-center">
        <img src={logo} alt="banner" />
        <div>
          <span id="get-part">
            A place to{" "}
            <span
              style={{ cursor: "pointer" }}
              className="text-white"
              onClick={showSearchBar}
            >
              get
            </span>
          </span>
          {isSearchOpen ? (
            <input
              type="text"
              id="search-box"
              placeholder="What is it that you truly desire?"
              onChange={searchItems}
            />
          ) : (
            <></>
          )}
          <span> the cool stuff.</span>
        </div>
      </div>
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Banner);
