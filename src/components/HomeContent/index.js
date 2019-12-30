import React from "react";
import ContentPreview from "../ContentPreview";
import LinkList from "../LinkList";
import { containerCss, contentCss, headerCss } from "./home.styles";

import sections from "../../data/preview";

const Home = () => (
    <>
        <div>
            <h1>Mike Volovar</h1>

            <p>
                Hi! I&apos;m Mike Volovar, an engineer and designer focused on
                making the web more user friendly.
            </p>

            <LinkList />
        </div>

        {sections.map((section, i) => (
            <div css={contentCss} key={section + i}>
                <h2 css={headerCss}>{section.title}</h2>

                <div css={containerCss}>
                    {section.items.map(
                        ({ description, isHighlight, key, title, url }) => (
                            <ContentPreview
                                href={url}
                                description={description}
                                isHighlight={isHighlight}
                                key={`preview-${key}`}
                                title={title}
                            />
                        )
                    )}
                </div>
            </div>
        ))}
    </>
);

export default Home;
