import Footer from "../components/Footer";
import Header from "../components/Header";
import "../styles/globals.css";
import { FaWhatsapp } from "react-icons/fa";

function MyApp({ Component, pageProps }) {
  const text = "Olá, poderia me ajudar ?";
  return (
    <div>
      <Header />
      <Component {...pageProps} />
      <a
        href={`https://api.whatsapp.com/send?phone=558592971826&text=${text}`}
        target="_blank"
      >
        <FaWhatsapp className="text-[50px] p-2 fixed bg-green-400 text-white bottom-8 right-8 rounded-full cursor-pointer" />
      </a>

      <Footer />
    </div>
  );
}

export default MyApp;
