import React from "react";
import PropTypes from "prop-types";
import Head from "next/head";
import Footer from "../Footer";
import Header from "../Header";
import { Global } from "@emotion/core";
import { contentCss, globalCss, layoutCss } from "./layout.styles";

const Layout = ({ children, isHome }) => (
    <>
        <Head>
            <meta charSet="UTF-8" />
            <meta httpEquiv="X-UA-Compatible" content="IE=edge,chrome=1" />
            <meta name="description" content="imho.pub details" />
            <meta
                name="viewport"
                content="width=device-width, initial-scale=1.0, maximum-scale=1.0"
            />

            <link rel="icon" type="image/x-icon" href="/favicon.ico" />
            <title>volovar.com</title>
        </Head>

        <Global styles={globalCss} />

        <div css={layoutCss}>
            {!isHome ? <Header /> : null}
            <div css={contentCss}>{children}</div>
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
