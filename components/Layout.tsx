import React from 'react';
import NavBar from './Nav';
import Footer from './Footer';

type Child ={
    children: string;
}

function Layout({children}: Child) {
    return (
        <>
            <NavBar/>
            <main>{children}</main>
            <Footer/>
        </>
    )
}

export default Layout;