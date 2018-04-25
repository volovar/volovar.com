import React from 'react'

const ContentSection = ({ title, description, link, images }) => (
    <div>
        { title
        ? <div className='layout-block layout-block-narrow'>
            <strong>About</strong>
        </div>
        : null
        }

        { description 
        ? <div className='layout-block layout-block-wide'>
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
            <div className='layout-block layout-block-full' key={ i }>
                <img className='decorated-image' src={ image } />
            </div>)
        )
        : null
        }
    </div>
)

export default ContentSection