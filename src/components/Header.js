import React from 'react'
import { Link } from 'react-router-dom'
import { css } from 'emotion'

const Header = () => (
    <nav className={ css`
        align-items: center;
        display: flex;
        justify-content: space-between;
    ` }>
        <h3>
            <Link to='/'>Mike Volovar</Link>
        </h3>

        <ul className={ css`
            display: flex;
            list-style: none;
            padding: 0;
        ` }>
            <li><a href='https://github.com/volovar' target='_blank'>github</a></li>
            <li><a href='https://dribbble.com/volovar' target='_blank'>dribbble</a></li>
            <li><a href='https://twitter.com/volovar' target='_blank'>twitter</a></li>
            <li><Link to='/resume'>r&eacute;sum&eacute;</Link></li>
        </ul>
    </nav>
)

export default Header