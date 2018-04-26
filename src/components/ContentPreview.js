import React from 'react'
import { Link } from 'react-router-dom'
import { css } from 'emotion'

const ContentPreview = ({ title, description, url }) => (
    <div className={ css`
        
    ` }>
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