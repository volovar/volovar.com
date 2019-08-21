import React, { Component } from "react";
import Layout from "../src/components/Layout";

const Work = ({ name }) => (
    <Layout>
        <div>{name}</div>
    </Layout>
);

Work.getInitialProps = async ({ query }) => ({ name: query.name });

export default Work;
