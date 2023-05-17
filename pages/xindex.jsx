import Layout from "@components/layout";
import { gql, GraphQLClient } from "graphql-request";

export default function Home({ allPoradniks }) {
    return (
        <Layout>
            <section className="w-full flex-center flex-col">
                <h1 className="head_text text-center">
                    Strona Pages <br />{" "}
                    <span className="orange_gradient">Seovileo.pl</span>
                </h1>
                <p className="desc text-center">
                    Nasze strony internetowe tworzymy w najnowszej technologii,
                    aby zapewnić naszym klientom najlepsze doświadczenie
                    użytkownika. Dzięki szybkości i wydajności, nasze strony są
                    łatwo dostępne dla każdego, bez względu na urządzenie, z
                    jakiego korzystają.
                </p>
                {allPoradniks.map((poradnik) => (
                    <p key={poradnik.title}>{poradnik.title}</p>
                ))}
                <div className="h-[200vh]" />
            </section>
        </Layout>
    );
}

const query = gql`
    query {
        allPoradniks {
            title
        }
    }
`;

export async function getStaticProps() {
    const endpoint = "https://graphql.datocms.com/";
    const graphQLClient = new GraphQLClient(endpoint, {
        headers: {
            "content-type": "application/json",
            authorization: "Bearer " + process.env.DATOCMS_API_KEY,
        },
    });
    const allPoradniks = await graphQLClient.request(query);
    console.log(allPoradniks);
    return {
        props: allPoradniks,
    };
}
