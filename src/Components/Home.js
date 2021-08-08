import React from 'react'
import Footer from './Footer'
import Header from './Header'
import Navbar from './Navbar'
import Summary from './Summary'

function Home({handleLogout}) {
    return (
        <div>
            <Navbar handleLogout={handleLogout} />
            <Header />
            <Summary />
            <Footer />
            
        </div>
    )
}

export default Home
