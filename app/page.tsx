import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Catalogo from "./components/Catalogo";
import Noticias from "./components/Noticias";
import Contacto from "./components/Contacto";
import Footer from "./components/Footer";
import Chatbot from "./components/Chatbot";
export default function Home() {
    return (
        <>
            <Navbar />
            <main>
                <Hero />
                <Catalogo />
                <Noticias />
                <Contacto />
            </main>
            <Footer />
            <Chatbot /> 
        </>
    );
}
