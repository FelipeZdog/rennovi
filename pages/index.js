import Banner from "../components/Banner";
import Especialistas from "../components/Especialistas";
import Grupo from "../components/Grupo";
import Pioneiros from "../components/Pioneiros";
import Head from "next/head";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Head>
        <title>Clínica Rennovi</title>
        <meta name="description" content="by medusa" />
        <link rel="icon" href="/logos/renovi_white.png" />
      </Head>
      <Banner />
      <Pioneiros />
      <Grupo />
      <Especialistas />
    </div>
  );
}
