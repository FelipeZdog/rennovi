import Footer from "../components/Footer";
import Header from "../components/Header";
import React, { useState, useEffect } from "react";
import "../styles/globals.css";
import { FaWhatsapp } from "react-icons/fa";

function MyApp({ Component, pageProps }) {
  const [showMessage, setShowMessage] = useState(true);
  const text = "Olá, poderia me ajudar ?";

  useEffect(() => {
    setTimeout(() => {
      setShowMessage(false);
    }, 10000);
  }, []);

  return (
    <div>
      {showMessage && <div className="floating-message">Tire suas dúvidas</div>}
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
