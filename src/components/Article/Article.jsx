
import React from "react";
import './styles.css'


// this.props = {
//  title: 'Exemplo'
//  provider: 'NASA'
// }

// ou export function Article({thumbnail, title, provider, description}) e na chamada dos parâmetros eliminar o "props"

export function Article(props){
        return (
            <article id='article'>
                <a href={props.link} target="_blank"><img src={props.thumbnail} alt="" /></a>
                <div className="article-infos">
                    <h2>{props.title}</h2>
                    <h3>{props.provider}</h3>
                    <p>{props.description}</p>
                </div>
            </article>
        )
}

