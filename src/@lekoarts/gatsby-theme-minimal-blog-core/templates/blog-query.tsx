import { graphql } from "gatsby"
import BlogComponent from "../components/blog"

export default BlogComponent

export const query = graphql`
  query{
    allPost(sort: { fields: date, order: DESC }) {
      nodes {
        slug
        title
        date(formatString: "YYYY.MM.DD")
        excerpt
        timeToRead
        description
        tags {
          name
          slug
        }
      }
    }
  }
`
