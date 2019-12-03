import React from 'react';
import {
	FaMapMarker,
	FaGlobe,
	FaTwitter,
	FaGithub,
	FaInstagram,
	FaCodepen,
	FaMedium,
	FaBehance,
	FaLinkedin
} from 'react-icons/fa';
import css from './Header.module.css';

const Header = ({ user }) => (
	<div className={css.wrapper}>
		<div className={css.content}>
			<div className={css.avatar}>
				<a href={user.url}><img src={user.avatar} alt={user.name} /></a>
			</div>
			{user.pro && <span className={css.badge}>Pro</span>}
			<h1 className={css.name}>
				<a href={user.url} className={css.name}>
					{user.username}
				</a>
			</h1>
			<div className={css.location}>
				<FaMapMarker /> {user.location}
			</div>
			<div>
				<p>{user.bio}</p>
			</div>
			<div className={css.socialMedia}>
				<ul>
					<li>
						<a href={user.links.web} target="_blank" rel="noopener noreferrer"><FaGlobe /></a>
					</li>
					<li>
						<a href={user.links.twitter} target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
					</li>
					<li>
						<a href={user.links.github} target="_blank" rel="noopener noreferrer"><FaGithub /></a>
					</li>
					<li>
						<a href={user.links.instagram} target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
					</li>
					<li>
						<a href={user.links.codepen} target="_blank" rel="noopener noreferrer"><FaCodepen /></a>
					</li>
					<li>
						<a href={user.links.medium} target="_blank" rel="noopener noreferrer"><FaMedium /></a>
					</li>
					<li>
						<a href={user.links.behance} target="_blank" rel="noopener noreferrer"><FaBehance /></a>
					</li>
					<li>
						<a href={user.links.linkedin} target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
					</li>
				</ul>
			</div>
		</div>
	</div>
)

export default Header;
