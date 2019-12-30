import { css } from "@emotion/core";

export const layoutCss = css`
    background: #e1e1e1;
    box-sizing: border-box;
    display: grid;
    grid-template-column: 25% 25% 25% 25%;
    grid-template-rows: 80px auto 80px;
    grid-template-areas:
        "header header header header"
        "main main main main"
        "footer footer footer footer";
    height: 100%;
    padding: 1em 2em;
`;

export const bodyCss = css`
    grid-area: main;
`;
