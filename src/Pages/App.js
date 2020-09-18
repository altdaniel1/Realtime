import React, { useState } from 'react'
import Footer from '../components/Footer';
import Header from '../components/Header';
import Table from '../components/Table';
import Drawer from '../components/Drawer';

export default function App() {
    const [filterDrawer, setFilterDrawer] = useState(false);

    return (
        <div>
            <Header setFilterDrawer={setFilterDrawer} />
            <div style={{ margin: '24px 40px 0 40px' }}><Table /></div>
            <Footer />

            <Drawer filterDrawer={filterDrawer} setFilterDrawer={setFilterDrawer} />
        </div>
    )
}
