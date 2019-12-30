import { css } from "@emotion/core";
import { m } from "../global.styles";

export const sectionCss = css`
    display: grid;
    grid-gap: 1.2em 0;
    margin-bottom: 3em;

    ${m} {
        grid-gap: 1.2em 2em;
        grid-template-columns: 1fr 1fr;
        grid-template-rows: 2.8em;
    }
`;

export const headerCss = css`
    margin: 0;

    ${m} {
        grid-column: 1 / 3;
    }
`;