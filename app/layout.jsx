import "@styles/global.css";
import Nav from "@components/Nav";

export const metadata = {
    title: "App",
    description: "App Description",
};

const RootLayout = ({ children }) => {
    return (
        <html lang="pl">
            <body>
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
