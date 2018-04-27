import React from 'react'
import { css } from 'emotion'
import { linkStyle } from '../styles/link'

let linkS = css`
    display: block;
    ${ linkStyle }
`

const ContentSection = ({ title, description, link, images, showHr }) => (
    <div className={ css`display: grid;` }>
        { title
        ? <strong>About</strong>
        : null
        }

        { description 
        ? <p>
            { description }
            { link 
            ? <a className={ linkS } href={ link.url } target='_blank'>{ link.text } &rarr;</a>
            : null
            }
        </p>
        : null
        }

        { images
        ? images.map(
            (image, i) => (
            // <div key={ i }>
                <img className={ css`display: block; max-width: 100%;` } src={ image } key={ i } />
            // </div>
            )
        )
        : null
        }

        { showHr
        ? <hr />
        : null
        }
    </div>
)

export default ContentSection