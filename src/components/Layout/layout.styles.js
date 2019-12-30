import { css } from "@emotion/core";

export const contentCss = css`
    grid-area: main;
`;

export const globalCss = css`
    body {
        background: #333;
        box-sizing: border-box;
        font-family: "SF Pro", "Segoe UI", "Roboto", "Helvetica Neue", "Arial",
            sans-serif;
        font-size: 100%;
        margin: 0;
        padding: 0;
    }
`;

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
