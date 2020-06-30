import React, { Component } from 'react'

import {Link} from "react-router-dom";

class Categories extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="categorie__container">
                <h1>Categories</h1>
                <Link to="/"><img className="img__categories" src="https://static.fnac-static.com/multimedia/Images/FD/Comete/108859/CCP_IMG_ORIGINAL/1405597.jpg"/></Link>
                <Link to="/"><img className="img__categories" src="https://vl-media.fr/wp-content/uploads/2020/06/H.jpg"/></Link>
                <Link to="/"><img className="img__categories --margin__categorie" src="https://img.20mn.fr/8BoNQ7zRTP2ft7BrMopkhQ/830x532_image-extraite-serie-how-i-met-your-mother.jpg"/></Link>
            </div>
         );
    }
}
 
export default Categories;