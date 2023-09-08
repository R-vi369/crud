import React from 'react'
import { Link } from 'react-router-dom'
import './styles/Header.scss'

const Header = () => {
    return (
        <>

            <div className="header">

                <Link className='allLink' to='/Create'>Create </Link>
                <Link className='allLink' to='/Read'>Read </Link>
                <Link className='allLink' to='/Update'>Update </Link>
                <Link className='allLink' to='/Delete'>Delate </Link>


            </div>

        </>
    )
}

export default Header