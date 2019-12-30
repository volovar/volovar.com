import React from "react";
import PropTypes from "prop-types";
import ContentPreview from "../ContentPreview";
import { headerCss, sectionCss } from "./section.styles";

const Section = ({ items, title }) => {
    return (
        <div css={sectionCss}>
            <h1 css={headerCss}>{title}</h1>

            {items.map((item, i) => (
                <ContentPreview {...item} key={i} />
            ))}
        </div>
    );
};

Section.propTypes = {
    items: PropTypes.array,
    title: PropTypes.string
};

export default Section;
