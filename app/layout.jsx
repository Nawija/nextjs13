import "@styles/global.css";
import Nav from "@components/Nav";
import { Montserrat } from "@next/font/google";

const montserrat = Montserrat({
    weight: ["400", "700"],
    subsets: ["latin"],
});

export const metadata = {
    title: "App",
    description: "App Description",
};

const RootLayout = ({ children }) => {
    return (
        <html lang="pl">
            <body className={`${montserrat.className}`}>
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
