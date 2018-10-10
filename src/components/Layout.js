import React from 'react'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'
import Header from '../components/Header'
import favicon from './favicon.ico'
import './index.css'

const Layout = ({ children }) => (
	<StaticQuery
		query={
			graphql`
				query userQuery {
					dribleUser {
						name
						username
						pro
						bio
						avatar
						location
						url
						links {
							web
							twitter
							github
							instagram
							codepen
							medium
							behance
							linkedin
						}
					}
				}
			`
		}
		render={data => (
			<React.Fragment>
				<Helmet
					title="Gatsby Source - Dribbble"
					meta={[
						{ name: 'description', content: 'Sample Website for gatsby-source-dribbble' },
						{ name: 'keywords', content: 'gatsby, source, dribbble, smakosh' },
					]}
				>
					<link rel="shortcut icon" href={favicon} />
				</Helmet>
				<Header user={data.dribleUser} />
				<div
					style={{
						margin: '-6rem auto 0 auto',
						maxWidth: 1200,
						padding: '0px 1.0875rem 1.45rem',
						paddingTop: 0,
						position: 'relative'
					}}
				>
					{children}
				</div>
			</React.Fragment>
		)}
	/>
)

export default Layout
