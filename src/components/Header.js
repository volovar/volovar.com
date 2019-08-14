import React from "react";
import Link from "next/link";
import LinkList from "./LinkList";
import { css } from "@emotion/core";

let navS = css`
    align-items: center;
    display: flex;
    grid-area: header;
    justify-content: space-between;
`;

const Header = () => (
    <nav css={navS}>
        <h3>
            <Link href="/">
                <a>mike volovar.com</a>
            </Link>
        </h3>

        <LinkList />
    </nav>
);

export default Header;
