import React from 'react';
import styles from '../styles/components.module.scss';

function SearchBar(props) {

    return (
        <form className={styles.searchbar}>
            <input type="text"></input>
            <button type="submit"><i class="fa fa-fw fa-search"></i></button>
        </form>

    )
}

export default SearchBar;

/*
    <input style={style} {...props} type="text">
        {props.children}
    </input>
    */ 