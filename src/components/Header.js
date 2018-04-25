import React from 'react'
import { Link } from 'react-router-dom'
import { wrapperBlock } from '../styles/layout'

const Header = () => (
    <nav className={ wrapperBlock }>
        <h3>
            <Link to='/'>Mike Volovar</Link>
        </h3>

        <ul className='nav-block'>
            <li><a href='http://github.com/volovar' target='_blank'>github</a></li>
            <li><a className='dribbble' href='http://dribbble.com/volovar' target='_blank'>dribbble</a></li>
            <li><a className='twitter' href='https://twitter.com/volovar' target='_blank'>twitter</a></li>
            <li><Link className='resume' to='/resume'>r&eacute;sum&eacute;</Link></li>
        </ul>
    </nav>
)

export default Header