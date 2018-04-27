import React from 'react'
import Section from './Section'
import { css } from 'emotion'
import { l, lx } from '../styles/mediaQueries'

import { projects, work, writing } from '../data/preview'

const Home = () => (
    <div>
        <div className="content-block">
            <p>Hi! I'm Mike Volovar, an engineer and designer focused on making the web more user friendly.</p>

            <div className="layout-block-container feature-button-container">
                <div className="js-colorized layout-block feature-button"></div>
                <div className="js-colorized layout-block feature-button"></div>
                <div className="js-colorized layout-block feature-button"></div>
                <div className="js-colorized layout-block feature-button"></div>
                <div className="js-colorized layout-block feature-button"></div>
                <div className="js-colorized layout-block feature-button"></div>
            </div>
        </div>

        <div className={ css`
            ${l} {
                display: grid;
                grid-gap: 0 3em;
                grid-template-columns: 1fr 1fr;
            }

            ${lx} {
                grid-template-columns: 1fr 1fr 1fr;
            }
        ` }>
            <Section title="Work" data={ work } />
            <Section title="Projects" data={ projects } />
            <Section title="Writing" data={ writing } />
            
            {/* <!-- <h1 className="content-title">Illustrations</h1>

            <div className="layout-block-container content-block">
                <div className="layout-block layout-block-full layout-block-flex" style="display: flex;">
                    <strong>Vector drawings</strong>
                    <a href="" target="_blank">View</a>
                </div>

                <div className="layout-block layout-block-full layout-block-flex" style="display: flex;">
                    <strong>Sketches</strong>
                    <a href="" target="_blank">View</a>
                </div>
            </div> --> */}
        </div>
    </div>
)

export default Home