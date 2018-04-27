import React from 'react'
import { Link } from 'react-router-dom'
import { css } from 'emotion'
import { linkStyle } from '../styles/link'

const ContentPreview = ({ title, description, url, linkText, externalUrl }) => {
    const text = linkText ? linkText : 'Read More'

    return (
        <div>
            { title 
            ? <strong>{ title }</strong>
            : null
            }
            
            { description
            ? <p className={css`line-height: 1.4em; margin: 0;`}>{ description }</p>
            : null
            }
    
            { externalUrl
            ? <a className={css`display: block; ${ linkStyle }`} href={ externalUrl } target='_blank'>{ text }</a>
            : null
            }

            { url
            ? <Link className={ linkStyle } to={ url }>{ text }</Link>
            : null
            }
        </div>
    )
}

export default ContentPreview