import React from 'react'
import { Link } from 'react-router-dom'
import { wrapperBlock } from '../styles/layout'

const Header = () => (
    <nav className={ wrapperBlock }>
        <h3>
            <Link to='/'>Mike Volovar</Link>
        </h3>

        <ul>
            <li><a href='https://github.com/volovar' target='_blank'>github</a></li>
            <li><a href='https://dribbble.com/volovar' target='_blank'>dribbble</a></li>
            <li><a href='https://twitter.com/volovar' target='_blank'>twitter</a></li>
            <li><Link to='/resume'>r&eacute;sum&eacute;</Link></li>
        </ul>
    </nav>
)

export default Header