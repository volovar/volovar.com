import React from 'react'
import ContentPreview from './ContentPreview'
import { css } from 'emotion'
import { m } from '../styles/breaks'

const Section = ({ title, data }) => (
    <div className={ css`
        display: grid;

        ${m} {
            grid-template-columns: 1fr 1fr;            
        }
    ` }>
        <h1 className={ css`
            ${m} {
                grid-column: 1 / 3;
            }
        ` }>{ title }</h1>

        { Object.keys(data).map((key, i) => 
            <ContentPreview { ...data[key] } key={ i } />
        )}
    </div>
)

export default Section