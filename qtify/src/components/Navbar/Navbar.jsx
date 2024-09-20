import React from 'react';

import styles from './Navbar.module.css';
import { Link } from 'react-router-dom';
import Button from '../Button/Button';
import Logo from '../Logo/Logo';
import Search from '../Search/Search';

function Navbar({ searchData }) {

  return (
    <>
    <nav  className={styles.navbar}>
      <Link to="/">
        <Logo />
      </Link>
      <Search
        placeholder="Search a song of your choice"
        searchData={searchData}
        type="wrapperdesktop"
        isMobile={false}
      />
      <Button >Give Feedback</Button>
      
    </nav>
    <Search
    placeholder="Search a song of your choice"
    searchData={searchData}
    type="wrappermobile"
    isMobile={true}
  />
    </>
    
  );
}

export default Navbar;
