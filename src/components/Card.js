import React from 'react'
import css from './Card.module.css'

const Card = ({ url, cover, date, tags, title }) => (
	<div className="card">
		<a
			href={url}
			target="_blank"
			rel="noopener noreferrer"
			className={css.wrapper}
			style={{ backgroundImage: `url(${cover})` }}
		>
			<div className={css.header}>
				<div className={css.date}>
					<p>{date}</p>
				</div>
			</div>
			<div className={css.data}>
				<div className={css.content}>
					<span className={css.tags}>
						{tags.map(tag => (
							<span key={tag} className={css.tagsItem}>{tag}</span>
						))}
					</span>
					<h4>{title}</h4>
				</div>
			</div>
		</a>
	</div>
)

export default Card
