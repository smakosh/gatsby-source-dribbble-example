import React from 'react'
import css from './Card.module.css'

const Card = (props) => (
    <div className="card">
        <a
            href={props.url}
            target="_blank"
            rel="noopener noreferrer"
            className={css.wrapper}
            style={{ backgroundImage: `url(${props.cover})` }}
        >
            <div className={css.header}>
                <div className={css.date}>
                    <p>{props.date}</p>
                </div>
            </div>
            <div className={css.data}>
                <div className={css.content}>
                    <span className={css.tags}>
                        {props.tags.map(tag => (
                            <span key={tag} className={css.tagsItem}>{tag}</span>
                        ))}
                    </span>
                    <h4>{props.title}</h4>
                </div>
            </div>
        </a>
    </div>
)

export default Card