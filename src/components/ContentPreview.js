import React from "react";
import Link from "next/link";
import { css } from "@emotion/core";

const styles = {
    description: css`
        line-height: 1.4em;
        margin: 0;
    `,
    item: css`
        background: transparent;
        border-bottom: 0.2rem solid lightgrey;
        cursor: pointer;
        flex-basis: 30%;

        &:hover {
            background: lightgrey;
        }
    `,
    title: css`
        margin: 0;
    `
};

const ContentPreview = ({ title, description, href }) =>
    href ? (
        <Link href={href}>
            <a css={styles.item}>
                {title && <h3 css={styles.title}>{title}</h3>}

                {description && <p css={styles.description}>{description}</p>}
            </a>
        </Link>
    ) : (
        <div>{title}</div>
    );

export default ContentPreview;
