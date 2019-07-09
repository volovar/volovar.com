import React from "react"
import { getYear } from "../utils/date"
import { footerStyle } from "../styles/Footer.styles"

const Footer = () => (
    <div className={footerStyle}>
        <p>
            &#169;
            {getYear()} volovar.com
        </p>
    </div>
)

export default Footer
