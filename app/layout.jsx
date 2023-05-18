import "@styles/global.css";
import Nav from "@components/Nav";

export const metadata = {
    title: "App",
    description: "App Description",
};

import { gql, grafbase } from '../lib/grafbase'

const GetAllPostsQuery = gql`
  query GetAllPosts($first: Int!) {
    postCollection(first: $first) {
      edges {
        node {
          id
          title
          slug
        }
      }
    }
  }
`

const RootLayout = ({ children }) => {
    const { postCollection } = await grafbase.request(GetAllPostsQuery, {
        first: 10
      })
    return (
        <html lang="pl">
            <body>
            <nav>
            {postCollection?.edges?.map(edge =>
              edge?.node ? (
                <li key={edge.node.id}>
                  <Link href={`/posts/${edge.node.slug}`}>
                    {edge.node.title}
                  </Link>
                </li>
              ) : null
            )}
            </nav>
                <div className="main">
                    <div className="gradient" />
                </div>
                <main className="app">
                    <Nav />
                    {children}
                </main>
            </body>
        </html>
    );
};

export default RootLayout;
