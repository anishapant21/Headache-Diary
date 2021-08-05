import React from 'react'
import Header from './Header'
import Navbar from './Navbar'
import Summary from './Summary'

function Home({handleLogout}) {
    return (
        <div>
            <Navbar handleLogout={handleLogout} />
            <Header />
            <Summary />
            
        </div>
    )
}

export default Home
