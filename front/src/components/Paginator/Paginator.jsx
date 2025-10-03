import React from "react";

const Paginator = () => {
  return (
    <div className="pagination-area">
      <div
        className="pagination wow fadeIn animated"
        data-wow-duration="2s"
        data-wow-delay="0.5s"
        style={{
          visibility: "visible",
          animationDuration: "2s",
          animationDelay: "0.5s",
          animationName: "fadeIn",
        }}
      >
        <a href="#">«</a>
        <a href="#">1</a>
        <a className="active" href="#">
          2
        </a>
        <a href="#">3</a>
        <a href="#">4</a>
        <a href="#">5</a>

        <a href="#">»</a>
      </div>
    </div>
  );
};

export default Paginator;
