import { css } from "@emotion/core";

export const layoutStyle = css`
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

export const bodyStyle = css`
    grid-area: main;
`;

export const wrapperStyle = css`
    align-items: center;
    display: flex;
    flex-wrap: wrap;
    justify-content: left;
    padding: 3.75em 0 2.5em;
`;
