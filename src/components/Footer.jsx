import React from "react";

function Footer() {
    const year = new Date().getFullYear();
    return ( <
        footer >
        <
        p > Copyrightâ“’ OMER { year } < /p> <
        /footer>
    );
}

export default Footer;