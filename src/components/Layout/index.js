import React from "react";
import PropTypes from "prop-types";
import Footer from "../Footer";
import Head from "../Head";
import Header from "../Header";
import { layoutCss, bodyCss } from "./layout.styles";

const Layout = ({ children, isHome }) => (
    <>
        <Head />
        <div css={layoutCss}>
            {!isHome ? <Header /> : null}
            <div css={bodyCss}>{children}</div>
            <Footer />
        </div>
    </>
);

Layout.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ]),
    isHome: PropTypes.bool
};

export default Layout;
