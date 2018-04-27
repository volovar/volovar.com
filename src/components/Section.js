import React from 'react'
import ContentPreview from './ContentPreview'
import { css } from 'emotion'
import { m } from '../styles/mediaQueries'

let sectionS = css`
    display: grid;
    grid-gap: 1.2em 0;
    margin-bottom: 3em;

    ${m} {
        grid-gap: 1.2em 2em;
        grid-template-columns: 1fr 1fr;
        grid-template-rows: 2.8em;
    }
`

let sectionHeaderS = css`
    margin: 0;

    ${m} {
        grid-column: 1 / 3;
    }
`

const Section = ({ title, data }) => (
    <div className={ sectionS }>
        <h1 className={ sectionHeaderS }>{ title }</h1>

        { Object.keys(data).map((key, i) => 
            <ContentPreview { ...data[key] } key={ i } />
        )}
    </div>
)

export default Section