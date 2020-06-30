import React, { Component } from 'react'

import question from '../questions.json'

class MesQuestions extends Component {
    state = {  }
    render() { 
        return (  
            <div className="mes__questions">
                <h1>FancyQuizz</h1>
                    {question.title}
                <p>{question.question}</p>
                <button className="btn__choix">{question.reponse1}</button>
                <button className="btn__choix --valid">{question.reponse2}</button>
                <button className="btn__choix">{question.reponse3}</button>
                <button className="btn__choix">{question.reponse4}</button>
                <button className="btn__next">Suivant</button>
            </div>
        );
    }
}
 
export default MesQuestions;