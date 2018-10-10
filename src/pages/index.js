import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Layout from '../components/Layout'
import Card from '../components/Card'

const Index = () => (
	<StaticQuery
		query={
			graphql`
				query projectQuery {
					allDribleProjects (
						sort: {fields: [published], order: DESC}
					) {
						edges {
							node {
								title
								id
								published(formatString: "MMMM DD, YYYY")
								url
								tags
								cover
							}
						}
					}
				}
			`
		}
		render={data => (
			<Layout>
				<div className="container index-container">
					<div className="css-grid">
						{data.allDribleProjects.edges.map(shot => (
							<Card
								date={shot.node.published}
								title={shot.node.title}
								cover={shot.node.cover}
								url={shot.node.url}
								tags={shot.node.tags}
								key={shot.node.id}
							/>
						))}
					</div>
				</div>
			</Layout>
		)}
	/>
)

export default Index
