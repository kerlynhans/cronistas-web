import { useState } from "react";
import SearchForm from "@/components/SearchForm/SearchForm";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass, faTimes } from "@fortawesome/free-solid-svg-icons";

const SearchBar = () => {
  const [showSearch, setShowSearch] = useState(false);

  const handleShowSearch = (e) => {
    e.preventDefault();
    setShowSearch(!showSearch);
  };

  return (
    <>
      {/* Search icon */}
      <ul className="navbar-nav ">
        <li className="nav-item search hidden-xs hidden-sm ">
          <a className="nav-link" href="#" onClick={handleShowSearch}>
            {showSearch ? (
              <FontAwesomeIcon icon={faTimes} />
            ) : (
              <FontAwesomeIcon icon={faMagnifyingGlass} />
            )}
          </a>
        </li>
      </ul>

      {/* Search content bar. */}
      <div
        className="top-search navigation-shadow"
        style={{ display: showSearch ? "block" : "none" }}
      >
        <div className="container">
          <div className="input-group ">
            <SearchForm marginTop="mt-3" />
          </div>
        </div>
      </div>
    </>
  );
};

export default SearchBar;
