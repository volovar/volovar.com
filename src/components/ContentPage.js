import React from 'react'
import ContentSection from './ContentSection'
import { Redirect } from 'react-router-dom'

import content from '../data/content.json'

const ContentPage = ({ match }) => {
    const data = content[match.params.name]

    return (
        <div>
            <h1 className="content-title">{ data.title }</h1>

            <div className="layout-block-container content-block">
                { data.sections.map((section, i) => (<ContentSection { ...section } key={ i } />)) }
            </div>
        </div>
    )
}

export default ContentPage