import styles from './search_header.module.css';
import React, { memo, useRef } from 'react';


const SearchHeader = memo(({ onSearch }) => {
        const inputRef = useRef(); //메모
        const handleSearch = () => {
            const value = inputRef.current.value;
            //console.log(value); //검색단어 받아오는지 확인
        
            onSearch(value);
            //검색하는 것을 props로 받아오기
        }
        const onClick = () => {
            //console.log('onClick') 확인해보기
            handleSearch();
        }

    const onKeyPress = (event) => {
        //console.log('onKeyPress') 확인해보기
        if (event.key === 'Enter') {
            handleSearch();
        }
    };
    
        return (
            <header className={styles.header}>
                <div className={styles.logo}>
                    <img className={styles.img} src="youtube/images/logo.png" alt="logo" />
                    <h1 className={styles.title}>Youtube</h1>
                </div>
                <input ref={inputRef} className={styles.input} type="search" placeholder="Search..." onKeyPress={onKeyPress} />
                <button className={styles.button} type="submit" onClick={onClick}>
                    <img className={styles.buttonImg} src="youtube/images/search.png" alt="search" />
                </button>
            </header>
        )
    }
);

export default SearchHeader;