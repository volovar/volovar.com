import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Meta from "./Meta";
import { layoutStyle, bodyStyle } from "../styles/Layout.styles";

const Layout = ({ children, isHome }) => (
    <>
        <Meta />
        <div css={layoutStyle}>
            {!isHome ? <Header /> : null}
            <div css={bodyStyle}>{children}</div>
            <Footer />
        </div>
    </>
);

export default Layout;
