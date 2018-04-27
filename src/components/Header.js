import React from 'react'
import { Link } from 'react-router-dom'
import { css } from 'emotion'
import { linkStyle } from '../styles/link'

let linkS = css`
    margin-right: 0.6em;
    ${ linkStyle }
`

let navS = css`
    align-items: center;
    display: flex;
    justify-content: space-between;
`

let navListS = css`
    display: flex;
    list-style: none;
    padding: 0;

    a {
        margin-left: 0.6em;
    }
`

const Header = () => (
    <nav className={ navS }>
        <h3>
            <Link to='/'>Mike Volovar</Link>
        </h3>

        <ul className={ navListS }>
            <li><a className={ linkS } href='https://github.com/volovar' target='_blank'>github</a></li>
            <li><a className={ linkS } href='https://dribbble.com/volovar' target='_blank'>dribbble</a></li>
            <li><a className={ linkS } href='https://twitter.com/volovar' target='_blank'>twitter</a></li>
            <li><Link className={ linkStyle } to='/resume'>r&eacute;sum&eacute;</Link></li>
        </ul>
    </nav>
)

export default Header