import React from "react";
import Layout from "../src/components/Layout";
import Home from "../src/components/HomeContent";

const Index = () => (
    <Layout isHome={true}>
        <Home />
    </Layout>
);

export default Index;
