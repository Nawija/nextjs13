import {gql, GraphQLClient} from "graphql-request"

// const Home = () => {
//     return (
//         <section className="w-full flex-center flex-col">
//             <h1 className="head_text text-center">
//                 Strona Internetowa <br />{" "}
//                 <span className="orange_gradient">Seovileo.pl</span>
//             </h1>
//             <p className="desc text-center">
//                 Nasze strony internetowe tworzymy w najnowszej technologii, aby
//                 zapewnić naszym klientom najlepsze doświadczenie użytkownika.
//                 Dzięki szybkości i wydajności, nasze strony są łatwo dostępne
//                 dla każdego, bez względu na urządzenie, z jakiego korzystają.
//             </p>
//         </section>
//     );
// };

export default function Home(){
    return(
      <div>
        <h1>hello</h1>
      </div>
    )
}

const query = gql`
query {
  allPoradniks {
    title
  }
}
`

export async function getStaticProps () {
  const endpoint = "https://graphql.datocms.com/"
  const graphQLClient = new GraphQLClient(endpoint, {
    headers:{
      "content-type":"application/json",
      authorization: "Bearer " + process.env.DATO_API_TOKEN,
    }
  })
  const allPoradniks = await graphQLClient.request(query)
  console.log(allPoradniks);
  return{
    props: allPoradniks
  }
}
