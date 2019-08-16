import React from "react";
import ContentPreview from "./ContentPreview";
import LinkList from "./LinkList";
import { css } from "@emotion/core";

import sections from "../data/preview";

const styles = {
    container: css`
        display: grid;
        grid-gap: 1em;
        grid-template-columns: 1fr 1fr 1fr;
    `,
    content: css`
        margin-bottom: 3em;
    `,
    header: css`
        border-bottom: 0.2rem solid lightgrey;
    `
};

const Home = () => (
    <div>
        <div>
            <h1>Mike Volovar</h1>

            <p>
                Hi! I'm Mike Volovar, an engineer and designer focused on making
                the web more user friendly.
            </p>

            <LinkList />
        </div>

        <>
            {sections.map((section, i) => (
                <div css={styles.content} key={section + i}>
                    <h2 css={styles.header}>{section.title}</h2>

                    <div css={styles.container}>
                        {section.items.map((item, i) => (
                            <ContentPreview
                                href={item.url}
                                description={item.description}
                                title={item.title}
                                key={`preview-${i}`}
                            />
                        ))}
                    </div>
                </div>
            ))}
        </>
    </div>
);

export default Home;
