import React from 'react'
import Section from './Section'

import projects from '../data/projects.json'
import work from '../data/work.json'

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

        <div className="content-block">
            <Section title="Work" data={ work } />
            <Section title="Projects" data={ projects } />

            <h1 className="content-title">Writing</h1>

            <div className="layout-block-container content-block">
                <div className="layout-block layout-block-full layout-block-flex">
                    <strong>A few of the nice parts of Music</strong>
                    <a href="https://medium.com/@volovar/a-few-of-the-nice-parts-of-music-ba8387489b96#.lb2rwx5gk" target="_blank">Read on Medium &rarr;</a>
                </div>
            </div>

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