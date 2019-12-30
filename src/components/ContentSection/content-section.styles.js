import { css } from "@emotion/core";
import { gLinkCss } from "../global.styles";

export const imgCss = css`
    display: block;
    max-width: 100%;
`;

export const linkCss = css`
    display: block;
    ${gLinkCss}
`;

export const sectionCss = css`
    display: grid;
`;

export default {
    linkCss
};
