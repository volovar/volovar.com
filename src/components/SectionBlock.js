import React from 'react'

const SectionBlock = ({ title, description, url }) => (
    <div className="layout-block-container content-block">
        <div className="layout-block layout-block-narrow">
            <a className="link-alt" href={ url }>
                <strong>{ title }</strong>
            </a>
        </div>

        <div className="layout-block layout-block-wide">
            <p>{ description }</p>
            <a href={ url }>Read More</a>
        </div>
    </div>
)

export default SectionBlock