import React from "react";
import ContentPreview from "./ContentPreview";
import LinkList from "./LinkList";
import { css, jsx } from "@emotion/core";
import { l, lx, m } from "../styles/mediaQueries";

import sections from "../data/preview";

let body = css`
    ${l} {
        display: grid;
        grid-gap: 0 3em;
        grid-template-columns: 1fr 1fr;
    }

    ${lx} {
        grid-template-columns: 1fr 1fr 1fr;
    }
`;

let sectionS = css`
    display: grid;
    grid-gap: 1.2em 0;
    margin-bottom: 3em;

    ${m} {
        grid-gap: 1.2em 2em;
        grid-template-columns: 1fr 1fr;
        grid-template-rows: 2.8em;
    }
`;

let sectionHeaderS = css`
    margin: 0;

    ${m} {
        grid-column: 1 / 3;
    }
`;

const Home = () => (
    <div>
        <div>
            <h1>Volovar.com</h1>

            <p>
                Hi! I'm Mike Volovar, an engineer and designer focused on making
                the web more user friendly.
            </p>

            <LinkList />
        </div>

        <div css={body}>
            {sections.map((section, i) => (
                <div css={sectionS} key={section + i}>
                    <h1 css={sectionHeaderS}>{section.title}</h1>

                    {section.items.map((item, i) => (
                        <ContentPreview {...item} key={i} />
                    ))}
                </div>
            ))}
        </div>
    </div>
);

export default Home;
