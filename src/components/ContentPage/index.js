import React from "react";
import PropTypes from "prop-types";
import ContentSection from "../ContentSection";
import { Redirect } from "react-router-dom";

import content from "../../data/content.json";

const ContentPage = ({ match }) => {
    const data = content[match.params.name];

    return typeof data === "undefined" ? (
        <Redirect to="/404" />
    ) : (
        <div>
            <h1>{data.title}</h1>

            <div>
                {data.sections.map((section, i) => (
                    <ContentSection
                        {...section}
                        showHr={i + 1 < data.sections.length}
                        key={i}
                    />
                ))}
            </div>
        </div>
    );
};

ContentPage.propTypes = {
    match: PropTypes.shape({
        params: PropTypes.shape({
            name: PropTypes.string
        })
    })
};

export default ContentPage;
