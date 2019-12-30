import React from "react";
import { getYear } from "../../utils/date";
import { footerCss } from "./footer.styles";

const Footer = () => (
    <div css={footerCss}>
        <p>
            &#169;
            {getYear()} volovar.com
        </p>
    </div>
);

export default Footer;
