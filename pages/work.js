import React, { Component } from "react";
import Layout from "../src/components/Layout";

class Index extends Component {
    static async getInitialProps({ query }) {
        return { ...query };
    }

    render() {
        console.log(this.props);
        const { id } = this.props;
        return (
            <Layout>
                <div>{id}</div>
            </Layout>
        );
    }
}

export default Index;
