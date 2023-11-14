import '../css/App.css';
import React from 'react';

// Rest of your code here

import Header from '../components/Header';
import Menu from '../components/Menu';
import Table from '../components/Table';
import Footer from '../components/Footer';

function Duty() {
    return (
        <div class="wrapper">
            <Header />
            <Menu />
            <Table />
            <Footer />
        </div>
    );
}

export default Duty;