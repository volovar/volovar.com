import React from "react";
import PropTypes from "prop-types";
import Layout from "../src/components/Layout";

const Work = ({ name }) => (
    <Layout>
        <div>{name}</div>
    </Layout>
);

Work.getInitialProps = async ({ query }) => ({ name: query.name });

Work.propTypes = {
    name: PropTypes.string
};

export default Work;
