import React from 'react'
import { getYear } from '../utils/date'
import { wrapperBlock } from '../styles/layout'

const Footer = () => (
    <div className={ wrapperBlock }>
        <p>&#169;<span id="date">{ getYear() }</span> volovar.com</p>
    </div>
)

export default Footer