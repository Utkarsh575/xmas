import Image from "next/image";
import Snowfall from "react-snowfall";
export default function Home() {
  return (
    <main>
      <Snowfall color="white" changeFrequency={100} speed={[2,5]} />
      <div className="h-screen w-scree bg-snow bg-cover">
        <h1 className="text-7xl font-game text-white ">Merry Christmas Meri Jaan</h1>
      </div>
    </main>
  );
}
