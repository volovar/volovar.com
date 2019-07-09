import React from "react";
import Head from "next/head";

const Meta = () => (
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
        <style jsx global>{`
            body {
                background: #333;
                box-sizing: border-box;
                font-family: "SF Pro", "Segoe UI", "Roboto", "Helvetica Neue",
                    "Arial", sans-serif;
                font-size: 100%;
                margin: 0;
                padding: 0;
            }
        `}</style>
    </>
);

export default Meta;
