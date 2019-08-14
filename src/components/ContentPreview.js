import React from "react";
import Link from "next/link";
import { css } from "@emotion/core";
import { linkStyle } from "../styles/link";

const ContentPreview = ({ title, description, url, linkText, externalUrl }) => {
    const text = linkText ? linkText : "Read More";

    console.log(url);
    return (
        <div>
            {title ? <strong>{title}</strong> : null}

            {description ? (
                <p
                    css={css`
                        line-height: 1.4em;
                        margin: 0;
                    `}
                >
                    {description}
                </p>
            ) : null}

            {externalUrl ? (
                <a
                    css={css`
                        display: block;
                        ${linkStyle}
                    `}
                    href={externalUrl}
                    target="_blank"
                >
                    {text}
                </a>
            ) : null}

            {url ? (
                <Link href={url}>
                    <a css={linkStyle}>{text}</a>
                </Link>
            ) : null}
        </div>
    );
};

export default ContentPreview;
