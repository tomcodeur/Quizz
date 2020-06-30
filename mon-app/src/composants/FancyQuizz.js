import React, { Component } from 'react'

import Categories from "./Categories";

class FancyQuizz extends Component {
    state = { 

     }
    render() { 
        return ( 
            <div className="fancy__quizz">
                <Categories/>
            </div>
         );
    }
}
 
export default FancyQuizz;