import React from 'react'

const ContentSection = ({ title, description, link, images, showHr }) => (
    <div>
        { title
        ? <div>
            <strong>About</strong>
        </div>
        : null
        }

        { description 
        ? <div>
            <p>{ description }</p>
            { link 
            ? <a href={ link.url } target='_blank'>{ link.text } &rarr;</a>
            : null
            }
        </div>
        : null
        }

        { images
        ? images.map(
            (image, i) => (
            <div key={ i }>
                <img src={ image } />
            </div>)
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