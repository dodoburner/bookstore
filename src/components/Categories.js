import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { checkStatus } from "../redux/categories/categories";

const Categories = () => {
  const dispatch = useDispatch();
  const status = useSelector((state) => state.categories);

  return (
    <div className="categories">
      <button
        className="update-progress-btn"
        type="button"
        onClick={() => {
          dispatch(checkStatus());
        }}
      >
        Check status
      </button>
      <h1>{status ? status[0] : null}</h1>
    </div>
  );
};

export default Categories;
