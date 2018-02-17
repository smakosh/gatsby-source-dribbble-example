import React from 'react'
import Card from '../components/Card'

const Index = (props) => {
	const shots = props.data.allDribleProjects.edges

	return (
		<div className="container index-container">
			<div className="css-grid">
				{shots.map(shot => (
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
	)
}

export default Index

export const projectQuery = graphql`
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