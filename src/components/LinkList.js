import React from "react";
import Link from "next/link";
import { css } from "@emotion/core";

let styles = {
    nav: css`
        display: flex;
        list-style: none;
        padding: 0;
    `,
    link: css`
        color: red;
        cursor: pointer;
        font-weight: 600;
        margin-right: 0.6em;
        transition: color 120ms linear;
        text-decoration: underline;

        &:hover {
            color: maroon;
        }
    `
};

const LinkList = () => (
    <ul css={styles.nav}>
        <li>
            <a
                css={styles.link}
                href="https://github.com/volovar"
                target="_blank"
            >
                github
            </a>
        </li>
        <li>
            <a
                css={styles.link}
                href="https://dribbble.com/volovar"
                target="_blank"
            >
                dribbble
            </a>
        </li>
        <li>
            <a
                css={styles.link}
                href="https://twitter.com/volovar"
                target="_blank"
            >
                twitter
            </a>
        </li>
        <li>
            <Link href="/resume">
                <a css={styles.link}>resume</a>
            </Link>
        </li>
    </ul>
);

export default LinkList;
