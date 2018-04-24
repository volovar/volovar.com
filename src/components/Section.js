import React from 'react'
import SectionBlock from './SectionBlock'

const Section = ({ title, data }) => (
    <div>
        <h1 className="content-title">{ title }</h1>

        { Object.keys(data).map((key, i) => 
            (<SectionBlock { ...data[key] } key={ i } />)
        )}
    </div>
)

export default Section