import React from "react";

function Footer() {
    const year = new Date().getFullYear();
    const month = capitalizeFirstLetter(new Date().toLocaleString("default", { month: "long" }));
  
    function capitalizeFirstLetter(string) {
      return string.charAt(0).toUpperCase() + string.slice(1);
    }

    return (
        <footer>
            <p>&copy;RicJM {month}-{year} <br></br> Todos os direitos reservados. </p>
    </footer>
    )
}

export default Footer;