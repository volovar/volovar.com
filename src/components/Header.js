import React from 'react'
import { wrapperBlock } from '../styles/layout'

const Header = () => (
    <div className={ wrapperBlock }>
        <a className="link-alt" href="/">
            <h3>Mike Volovar</h3>
        </a>

        <ul className="nav-block">
            <li><a href="http://github.com/volovar" target="_blank">github</a></li>
            <li><a className="dribbble" href="http://dribbble.com/volovar">dribbble</a></li>
            <li><a className="twitter" href="https://twitter.com/volovar">twitter</a></li>
            <li><a className="resume" href="/resume.html">r&eacute;sum&eacute;</a></li>
        </ul>
    </div>
)

export default Header