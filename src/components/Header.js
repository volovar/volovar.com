import React from "react"
import Link from "next/link"
import { css } from "emotion"
import { linkStyle } from "../styles/link"

let linkS = css`
    margin-right: 0.6em;
    ${linkStyle};
`

let navS = css`
    align-items: center;
    display: flex;
    grid-area: header;
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
    <nav className={navS}>
        <h3>
            <Link href="/">
                <a>Mike Volovar</a>
            </Link>
        </h3>

        <ul className={navListS}>
            <li>
                <Link href="https://github.com/volovar">
                    <a className={linkS} target="_blank">
                        github
                    </a>
                </Link>
            </li>
            <li>
                <Link href="https://dribbble.com/volovar">
                    <a className={linkS} target="_blank">
                        dribbble
                    </a>
                </Link>
            </li>
            <li>
                <Link href="https://twitter.com/volovar">
                    <a className={linkS} target="_blank">
                        twitter
                    </a>
                </Link>
            </li>
            <li>
                <Link href="/resume">
                    <a className={linkStyle}>resume</a>
                </Link>
            </li>
        </ul>
    </nav>
)

export default Header
