import React from "react";
import Link from "next/link";
import { css } from "@emotion/core";

let navListS = css`
    display: flex;
    list-style: none;
    padding: 0;

    a {
        margin-left: 0.6em;
    }
`;

let linkS = css`
    margin-left: 0.6em;
    color: red;
    font-weight: 600;
    transition: color 120ms linear;

    &:hover {
        color: maroon;
    }
`;

const LinkList = () => (
    <ul css={navListS}>
        <li>
            <Link href="https://github.com/volovar">
                <a css={linkS} target="_blank">
                    github
                </a>
            </Link>
        </li>
        <li>
            <Link href="https://dribbble.com/volovar">
                <a css={linkS} target="_blank">
                    dribbble
                </a>
            </Link>
        </li>
        <li>
            <Link href="https://twitter.com/volovar">
                <a css={linkS} target="_blank">
                    twitter
                </a>
            </Link>
        </li>
        <li>
            <Link href="/resume">
                <a css={linkS}>resume</a>
            </Link>
        </li>
    </ul>
);

export default LinkList;
