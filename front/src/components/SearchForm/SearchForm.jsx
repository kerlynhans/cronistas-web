import React from "react";
import styles from "./SearchForm.module.scss";

const SearchForm = ({ className, marginTop }) => {
  return (
    <form className={`${className} ${styles.searchForm}`}>
      <div className={`row g-0 ${marginTop}`}>
        <div className="col">
          <input
            className="form-control border-secondary border-end-0 rounded-0"
            defaultValue={""}
            placeholder="Search"
          />
        </div>
        <div className="col-auto">
          <button className="btn btn-outline-secondary border-start-0 rounded-0 rounded-right">
            <i className="fa fa-search"></i>
          </button>
        </div>
      </div>
    </form>
  );
};

export default SearchForm;
