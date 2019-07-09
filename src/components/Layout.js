import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Meta from "./Meta";
import { layoutStyle, bodyStyle } from "../styles/Layout.styles";

const Layout = props => (
    <>
        <Meta />
        <div className={layoutStyle}>
            <Header />
            <div className={bodyStyle}>{props.children}</div>
            <Footer />
        </div>
    </>
);

export default Layout;
