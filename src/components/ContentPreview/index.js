import React from "react";
import PropTypes from "prop-types";
import Link from "next/link";
import {
    descriptionCss,
    itemCss,
    itemHighlightCss,
    titleCss
} from "./content-preview.styles";

const ContentPreview = ({ description, href, isHighlight, title }) =>
    href ? (
        <Link href={href}>
            <a css={[itemCss, isHighlight && itemHighlightCss]}>
                {title && <h3 css={titleCss}>{title}</h3>}

                {description && <p css={descriptionCss}>{description}</p>}
            </a>
        </Link>
    ) : (
        <div>{title}</div>
    );

ContentPreview.propTypes = {
    description: PropTypes.string,
    href: PropTypes.string,
    isHighlight: PropTypes.bool,
    title: PropTypes.string
};

export default ContentPreview;
