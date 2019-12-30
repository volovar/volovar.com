import React from "react";
import PropTypes from "prop-types";

const WorkContent = ({ name }) => <div>{name}</div>;

WorkContent.propTypes = {
    name: PropTypes.string
};

export default WorkContent;
