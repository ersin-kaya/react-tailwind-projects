import React from 'react'
import './Layout.css'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'

type Props = {
    children: React.ReactNode;
}

const Layout = ({ children }: Props) => {
    return (
        <div className='layout overflow-x-hidden'>
            <Navbar />
            <div className="body-container">
                {children}
            </div>
            <Footer />
        </div>
    )
}

export default Layout