import React from 'react'
import { Link } from 'react-router-dom'

const ContentPreview = ({ title, description, url }) => (
    <div>
        { url 
        ? <Link to={ url }><strong>{ title }</strong></Link>
        : <strong>{ title }</strong>
        }
        <p>{ description }</p>
        { url
        ? <Link to={ url }>Read More</Link>
        : null
        }
    </div>
)

export default ContentPreview