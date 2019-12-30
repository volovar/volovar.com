import React from "react";
import Link from "next/link";
import { linkCss, navCss } from "./link-list.styles";

const LinkList = () => (
    <ul css={navCss}>
        <li>
            <a
                css={linkCss}
                href="https://github.com/volovar"
                rel="noopener noreferrer"
                target="_blank"
            >
                github
            </a>
        </li>
        <li>
            <a
                css={linkCss}
                href="https://dribbble.com/volovar"
                rel="noopener noreferrer"
                target="_blank"
            >
                dribbble
            </a>
        </li>
        <li>
            <a
                css={linkCss}
                href="https://twitter.com/volovar"
                rel="noopener noreferrer"
                target="_blank"
            >
                twitter
            </a>
        </li>
        <li>
            <Link href="/resume">
                <a css={linkCss}>resume</a>
            </Link>
        </li>
    </ul>
);

export default LinkList;
