const Page = async ({ params }) => {
    const { data } = await fetch(process.env.GRAFBASE_API_URL, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        'x-api-key': process.env.GRAFBASE_API_KEY
      },
      body: JSON.stringify({
        query: `
          query GetPostBySlug($slug: String!) {
            post(by: { slug: $slug }) {
              id
              title
              slug
            }
          }
        `,
        variables: { slug: params.slug }
      })
    })
  
    if (!data?.post) {
      return <h1>404: Not Found</h1>
    }
  
    return (
      <>
        <h1>{data.post.title}</h1>
        <pre>{JSON.stringify(data, null, 2)}</pre>
      </>
    )
  }
  
  export default Page