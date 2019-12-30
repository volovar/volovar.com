import React from "react";
import PropTypes from "prop-types";
import {
    imgCss,
    linkCss,
    sectionCss
} from "../styles/content-section.styles.js";

const ContentSection = ({ description, images, link, showHr, title }) => (
    <div css={sectionCss}>
        {title ? <strong>About</strong> : null}

        {description ? (
            <p>
                {description}
                {link ? (
                    <a
                        css={linkCss}
                        href={link.url}
                        rel="noopener noreferrer"
                        target="_blank"
                    >
                        {link.text} &rarr;
                    </a>
                ) : null}
            </p>
        ) : null}

        {images
            ? images.map((image, i) => <img css={imgCss} src={image} key={i} />)
            : null}

        {showHr ? <hr /> : null}
    </div>
);

ContentSection.propTypes = {
    description: PropTypes.string,
    images: PropTypes.array,
    link: PropTypes.shape({
        text: PropTypes.string,
        url: PropTypes.string
    }),
    showHr: PropTypes.bool,
    title: PropTypes.string
};

export default ContentSection;
