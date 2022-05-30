import React from 'react';

import styles from './Search.module.scss';

const Search = ({ searchValue, setSearchValue }) => {
  return (
    <div className={styles.rootSearch}>
      <img className={styles.searchIcon} src="/img/search.svg" alt="search" />
      <input
        value={searchValue}
        className={styles.inputSearch}
        onChange={(e) => setSearchValue(e.target.value)}
        placeholder="Поиск..."
      />
      {searchValue && (
        <img
          className={styles.closeIcon}
          onClick={() => setSearchValue('')}
          src="/img/close_icon.svg"
          alt="close"
        />
      )}
    </div>
  );
};

export default Search;
