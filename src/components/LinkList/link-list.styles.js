import { css } from "@emotion/core";
import { gLinkCss } from "../global.styles";

export const navCss = css`
    display: flex;
    list-style: none;
    padding: 0;
`;

export const linkCss = css`
    cursor: pointer;
    margin-right: 0.6em;
    text-decoration: underline;
    ${gLinkCss}
`;
