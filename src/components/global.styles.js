import { css } from "@emotion/core";

export const gLinkCss = css`
    color: red;
    font-weight: 600;
    transition: color 120ms linear;

    &:hover {
        color: maroon;
    }
`;

const breakpoints = { m: 880, l: 1440, ll: 2460 };

export const m = `@media (min-width: ${breakpoints.m}px)`;
export const l = `@media (min-width: ${breakpoints.l}px)`;
export const lx = `@media (min-width: ${breakpoints.ll}px)`;

export default Object.keys(breakpoints).reduce(
    (acc, k) => ({ ...acc, [k]: `@media (min-width: ${breakpoints[k]}px)` }),
    {}
);
