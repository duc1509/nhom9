import '../css/App.css';
import React from 'react';

// Rest of your code here

import Header from '../components/Header';
import Menu from '../components/Menu';

import Footer from '../components/Footer';
import Report from '../components/Report';


function Reportt() {
    return (
        <div class="wrapper">
            <Header />
            <Menu />
            <Report />
            <Footer />
        </div>
    );
}

export default Reportt;