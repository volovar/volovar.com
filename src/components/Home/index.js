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
);

export default Home;
