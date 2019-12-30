import React from "react";
import PropTypes from "prop-types";
import Layout from "../src/components/Layout";
import WorkContent from "../src/components/WorkContent";

const Work = ({ name }) => (
    <Layout>
        <WorkContent name={name} />
    </Layout>
);

Work.getInitialProps = async ({ query }) => ({ name: query.name });

Work.propTypes = {
    name: PropTypes.string
};

export default Work;
