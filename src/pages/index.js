import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import Card from '../components/Card';

const Index = ({ data }) => (
	<Layout>
		<div className="container index-container">
			<div className="css-grid">
				{data.allDribbbleShot.nodes.map(shot => (
					<Card
						date={shot.published}
						title={shot.title}
						cover={shot.cover}
						localCover={shot.localCover}
						url={shot.url}
						tags={shot.tags}
						key={shot.id}
					/>
				))}
			</div>
		</div>
	</Layout>
);

export default Index;

export const query = graphql`
  query {
    allDribbbleShot(sort: { fields: [published], order: DESC }) {
      nodes {
        title
        id
        published(formatString: "MMMM DD, YYYY")
        url
        tags
        cover
        localCover {
          childImageSharp {
            fluid(maxWidth: 396) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`;
