import React from 'react';
import { GatsbyImage } from 'gatsby-plugin-image';
import * as css from './Card.module.css';

const Card = ({ url, cover, date, tags, title, localCover }) => (
	<div className="card">
		<a
			href={url}
			target="_blank"
			rel="noopener noreferrer"
			className={css.wrapper}
		>
			<div className={css.image}>
				{/* not all images will have a local cover (e.g., GIFs) */}
				{localCover.childImageSharp
				&& localCover.childImageSharp.gatsbyImageData ? (
						<GatsbyImage image={localCover.childImageSharp.gatsbyImageData} />
					) : (
						<img src={cover} alt={title} />
					)}
			</div>
			<div className={css.header}>
				<div className={css.date}>
					<p>{date}</p>
				</div>
			</div>
			<div className={css.data}>
				<div className={css.content}>
					<span className={css.tags}>
						{tags.map((tag) => (
							<span key={tag} className={css.tagsItem}>
								{tag}
							</span>
						))}
					</span>
					<h4>{title}</h4>
				</div>
			</div>
		</a>
	</div>
);

export default Card;
