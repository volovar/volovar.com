import React from "react";
import Link from "next/link";
import LinkList from "../LinkList";
import { navCss } from "./header.styles";

const Header = () => (
    <nav css={navCss}>
        <h3>
            <Link href="/">
                <a>mike volovar.com</a>
            </Link>
        </h3>

        <LinkList />
    </nav>
);

export default Header;
