import React from 'react'
import ContentPreview from './ContentPreview'

const Section = ({ title, data }) => (
    <div>
        <h1 className="content-title">{ title }</h1>

        { Object.keys(data).map((key, i) => 
            <ContentPreview { ...data[key] } key={ i } />
        )}
    </div>
)

export default Section