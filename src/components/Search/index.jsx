import debounce from 'lodash.debounce';
import React, { useCallback, useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { setSearchValue } from '../redux/slices/filterSlice';

import styles from './Search.module.scss';

const Search = () => {
  const dispatch = useDispatch();
  const [value, setValue] = useState('');
  const inputRef = useRef();

  const onClickClear = () => {
    dispatch(setSearchValue(''));
    setSearchValue('');
    setValue('');
    inputRef.current.focus();
  };

  const updateSearchValue = useCallback(
    debounce((str) => {
      dispatch(setSearchValue(str));
    }, 300),
    [],
  );

  const onChangeInput = (e) => {
    setValue(e.target.value);
    updateSearchValue(e.target.value);
  };

  return (
    <div className={styles.rootSearch}>
      <img className={styles.searchIcon} src="/img/search.svg" alt="search" />
      <input
        ref={inputRef}
        value={value}
        className={styles.inputSearch}
        onChange={onChangeInput}
        placeholder="Поиск..."
      />
      {value && (
        <img
          className={styles.closeIcon}
          onClick={onClickClear}
          src="/img/close_icon.svg"
          alt="close"
        />
      )}
    </div>
  );
};

export default Search;
