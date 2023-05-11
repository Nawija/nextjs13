import Feed from "@components/Feed";

const Home = () => {
    return (
        <section className="w-full flex-center flex-col">
            <h1 className="head_text text-center">
                Strona Internetowa <br />{" "}
                <span className="orange_gradient">Seovileo.pl</span>
            </h1>
            <p className="desc text-center">
                Nasze strony internetowe tworzymy w najnowszej technologii, aby
                zapewnić naszym klientom najlepsze doświadczenie użytkownika.
                Dzięki szybkości i wydajności, nasze strony są łatwo dostępne
                dla każdego, bez względu na urządzenie, z jakiego korzystają.
            </p>
            
            <Feed />
        </section>
    );
};

export default Home;
