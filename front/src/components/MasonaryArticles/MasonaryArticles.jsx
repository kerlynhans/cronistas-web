"use client";

import { Masonry } from "react-plock";

const MasonaryArticles = () => {
  const items = [
    <div className="wrap__masonary-card">
      <div className="card">
        <div className="card-img-top">
          <a href="#" className="">
            <img
              className=" img-fluid h-240  "
              src="/images/placeholder/500x400.jpg"
              alt="Card image cap"
            />
          </a>
        </div>
        <div className="card-body">
          <div className="masonary__category bg-masonary-category">
            <span>
              <a href="#">travel tips</a>
            </span>
          </div>
          <h4 className="card-title">
            <a href="#">Card title that wraps to a new line</a>
          </h4>
          <p className="card-text">
            This is a longer card with supporting text below as a natural
            lead-in to additional content. This content is a little bit longer.
          </p>
        </div>
        <div className="card-footer masonary__title-info-author-card bg-white">
          <ul className="list-inline">
            <li className="list-inline-item">
              <span>By David Hall,</span>
            </li>
            <li className="list-inline-item">
              <span>Descember 09, 2016</span>
            </li>
          </ul>
        </div>
      </div>
    </div>,
    <div className="wrap__masonary-card">
      <div className="card">
        <div className="card-img-top">
          <a href="#" className="">
            <img
              className=" img-fluid h-150  "
              src="/images/placeholder/500x400.jpg"
              alt="Card image cap"
            />
          </a>
        </div>
        <div className="card-body">
          <div className="masonary__category bg-masonary-category">
            <span>
              <a href="#">travel tips</a>
            </span>
          </div>
          <h4 className="card-title">
            <a href="#">Card title that wraps to a new line</a>
          </h4>
          <p className="card-text">
            This is a longer card with supporting text below as a natural
            lead-in to additional content. This content is a little bit longer.
          </p>
        </div>
        <div className="card-footer masonary__title-info-author-card bg-white">
          <ul className="list-inline">
            <li className="list-inline-item">
              <span>By David Hall,</span>
            </li>
            <li className="list-inline-item">
              <span>Descember 09, 2016</span>
            </li>
          </ul>
        </div>
      </div>
    </div>,
    <div className="wrap__masonary-card">
      <div className="card">
        <div className="card-img-top">
          <a href="#" className="">
            <img
              className=" img-fluid h-270  "
              src="/images/placeholder/500x400.jpg"
              alt="Card image cap"
            />
          </a>
        </div>
        <div className="card-body">
          <div className="masonary__category bg-masonary-category">
            <span>
              <a href="#">travel tips</a>
            </span>
          </div>
          <h4 className="card-title">
            <a href="#">Card title that wraps to a new line</a>
          </h4>
          <p className="card-text">
            This is a longer card with supporting text below as a natural
            lead-in to additional content. This content is a little bit longer.
          </p>
        </div>
        <div className="card-footer masonary__title-info-author-card bg-white">
          <ul className="list-inline">
            <li className="list-inline-item">
              <span>By David Hall,</span>
            </li>
            <li className="list-inline-item">
              <span>Descember 09, 2016</span>
            </li>
          </ul>
        </div>
      </div>
    </div>,
    <div className="wrap__masonary-card">
      <div className="card">
        <div className="card-img-top">
          <a href="#" className="">
            <img
              className=" img-fluid h-270  "
              src="/images/placeholder/500x400.jpg"
              alt="Card image cap"
            />
          </a>
        </div>
        <div className="card-body">
          <div className="masonary__category bg-masonary-category">
            <span>
              <a href="#">travel tips</a>
            </span>
          </div>
          <h4 className="card-title">
            <a href="#">Card title that wraps to a new line</a>
          </h4>
          <p className="card-text">
            This is a longer card with supporting text below as a natural
            lead-in to additional content. This content is a little bit longer.
          </p>
        </div>
        <div className="card-footer masonary__title-info-author-card bg-white">
          <ul className="list-inline">
            <li className="list-inline-item">
              <span>By David Hall,</span>
            </li>
            <li className="list-inline-item">
              <span>Descember 09, 2016</span>
            </li>
          </ul>
        </div>
      </div>
    </div>,
    <div className="wrap__masonary-card">
      <div className="card">
        <div className="thumbnail-cover ">
          <a href="#">
            <img
              className="img-fluid h-540"
              src="/images/placeholder/600x600.jpg"
              alt="Card image"
            />
          </a>
        </div>
        <div className="masonary__category bg-masonary-category">
          <span>
            <a href="#">travel tips</a>
          </span>
        </div>
        <div className="masonary__title">
          <h4>
            <a href="#">
              Expert Tips: How To Become A Professional Travel Blogger{" "}
            </a>
          </h4>
          <p>
            When we get out of the glass bottle of our ego and when we escape
            like the squirrels in the...
          </p>
        </div>
        <div className="masonary__title-info-author">
          <ul className="list-inline">
            <li className="list-inline-item">
              <span>By David Hall,</span>
            </li>
            <li className="list-inline-item">
              <span>Descember 09, 2016</span>
            </li>
          </ul>
        </div>
      </div>
    </div>,
    <div className="wrap__masonary-card">
      <div className="card">
        <div className="card-img-top">
          <a href="#" className="">
            <img
              className=" img-fluid h-150  "
              src="/images/placeholder/500x400.jpg"
              alt="Card image cap"
            />
          </a>
        </div>
        <div className="card-body">
          <div className="masonary__category bg-masonary-category">
            <span>
              <a href="#">travel tips</a>
            </span>
          </div>
          <h4 className="card-title">
            <a href="#">Card title that wraps to a new line</a>
          </h4>
          <p className="card-text">
            This is a longer card with supporting text below as a natural
            lead-in to additional content. This content is a little bit longer.
          </p>
        </div>
        <div className="card-footer masonary__title-info-author-card bg-white">
          <ul className="list-inline">
            <li className="list-inline-item">
              <span>By David Hall,</span>
            </li>
            <li className="list-inline-item">
              <span>Descember 09, 2016</span>
            </li>
          </ul>
        </div>
      </div>
    </div>,
    <div className="wrap__masonary-card">
      <div className="card">
        <div className="thumbnail-cover ">
          <a href="#">
            <img
              className="img-fluid h-540"
              src="/images/placeholder/600x600.jpg"
              alt="Card image"
            />
          </a>
        </div>
        <div className="masonary__category bg-masonary-category">
          <span>
            <a href="#">travel tips</a>
          </span>
        </div>
        <div className="masonary__title">
          <h4>
            <a href="#">
              Expert Tips: How To Become A Professional Travel Blogger{" "}
            </a>
          </h4>
          <p>
            When we get out of the glass bottle of our ego and when we escape
            like the squirrels in the...
          </p>
        </div>
        <div className="masonary__title-info-author">
          <ul className="list-inline">
            <li className="list-inline-item">
              <span>By David Hall,</span>
            </li>
            <li className="list-inline-item">
              <span>Descember 09, 2016</span>
            </li>
          </ul>
        </div>
      </div>
    </div>,
    <div className="wrap__masonary-card">
      <div className="card">
        <div className="card-img-top">
          <a href="#" className="">
            <img
              className=" img-fluid h-360  "
              src="/images/placeholder/500x400.jpg"
              alt="Card image cap"
            />
          </a>
        </div>
        <div className="card-body">
          <div className="masonary__category bg-masonary-category">
            <span>
              <a href="#">travel tips</a>
            </span>
          </div>
          <h4 className="card-title">
            <a href="#">Card title that wraps to a new line</a>
          </h4>
          <p className="card-text">
            This is a longer card with supporting text below as a natural
            lead-in to additional content. This content is a little bit longer.
          </p>
        </div>
        <div className="card-footer masonary__title-info-author-card bg-white">
          <ul className="list-inline">
            <li className="list-inline-item">
              <span>By David Hall,</span>
            </li>
            <li className="list-inline-item">
              <span>Descember 09, 2016</span>
            </li>
          </ul>
        </div>
      </div>
    </div>,
    <div className="wrap__masonary-card">
      <div className="card">
        <div className="card-img-top">
          <a href="#" className="">
            <img
              className=" img-fluid h-240  "
              src="/images/placeholder/500x400.jpg"
              alt="Card image cap"
            />
          </a>
        </div>
        <div className="card-body">
          <div className="masonary__category bg-masonary-category">
            <span>
              <a href="#">travel tips</a>
            </span>
          </div>
          <h4 className="card-title">
            <a href="#">Card title that wraps to a new line</a>
          </h4>
          <p className="card-text">
            This is a longer card with supporting text below as a natural
            lead-in to additional content. This content is a little bit longer.
          </p>
        </div>
        <div className="card-footer masonary__title-info-author-card bg-white">
          <ul className="list-inline">
            <li className="list-inline-item">
              <span>By David Hall,</span>
            </li>
            <li className="list-inline-item">
              <span>Descember 09, 2016</span>
            </li>
          </ul>
        </div>
      </div>
    </div>,
  ];

  const items2 = [
    { height: 600, color: "#D32F2F", id: 1 }, // Extra Tall - Darker Red
    { height: 200, color: "#00796B", id: 2 }, // Short - Darker Teal
    { height: 400, color: "#1976D2", id: 3 }, // Tall - Darker Blue
    { height: 300, color: "#2E7D32", id: 4 }, // Medium - Darker Green
    { height: 500, color: "#F57F17", id: 5 }, // Very Tall - Darker Yellow
    { height: 250, color: "#C2185B", id: 6 }, // Medium-Short - Darker Pink
    { height: 450, color: "#4527A0", id: 7 }, // Tall - Darker Purple
    { height: 200, color: "#1565C0", id: 8 }, // Short - Darker Blue
    { height: 350, color: "#D84315", id: 9 }, // Medium-Tall - Darker Orange
    { height: 550, color: "#1B5E20", id: 10 }, // Very Tall - Darker Green
    { height: 150, color: "#B71C1C", id: 11 }, // Very Short - Darker Red
    { height: 400, color: "#311B92", id: 12 }, // Tall - Darker Purple
    { height: 300, color: "#00695C", id: 13 }, // Medium - Darker Turquoise
    { height: 250, color: "#E65100", id: 14 }, // Medium-Short - Darker Orange
    { height: 500, color: "#880E4F", id: 15 }, // Very Tall - Darker Pink
    { height: 200, color: "#0D47A1", id: 16 }, // Short - Darker Blue
    { height: 450, color: "#3E2723", id: 17 }, // Tall - Darker Brown
    { height: 350, color: "#4A148C", id: 18 }, // Medium-Tall - Darker Purple
    { height: 500, color: "#01579B", id: 19 }, // Medium - Darker Blue
    { height: 400, color: "#AD1457", id: 20 }, // Tall - Darker Pink
    { height: 300, color: "#E65100", id: 21 }, // Medium-Short - Darker Orange
  ];

  return (
    <div className="wrap__masonary mt-4">
      <Masonry
        items={items}
        config={{
          columns: [1, 2, 3],
          gap: [10, 27, 27],
          media: [480, 900, 1024],
          useBalancedLayout: false,
        }}
        render={(item) => item}
      />
    </div>
  );
};

export default MasonaryArticles;
