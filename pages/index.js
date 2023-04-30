import Banner from "../components/Banner";
import Especialistas from "../components/Especialistas";
import Grupo from "../components/Grupo";
import Pioneiros from "../components/Pioneiros";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Banner />
      <Pioneiros />
      <Grupo />
      <Especialistas />
    </div>
  );
}
