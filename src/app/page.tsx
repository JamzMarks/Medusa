import Benefits from "@/components/benefits/benefits";
import Slider from "@/components/slider/slider";
import { LuBicepsFlexed } from "react-icons/lu";


export default function Home() {
  const videoID= 'DHjqpvDnNGE'
  return (
    <>
    <div>
      <div className="container mx-auto max-w-screen-xl ">
        <Benefits
          title="Fortalecimento muscular"
          description="Tonifica e fortalece os músculos de braços, pernas, ombros, costas e abdômen"
          Icon={LuBicepsFlexed}
        />
      </div>
    </div>
    <div className="relative">
      <Slider></Slider>
      <div>
        <h2>Conheça nosso Studio!</h2>
      </div>
    </div>
      <div className="container mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8 flex w-full justify-center">
        <div className="w-full">
          <h2>Conheça as <span className="text-pink-700">Medusas!</span></h2>
          <p>teste</p>
        </div>
        <div className="youtube-container">
        <iframe
          width="560"
          height="315"
          src={`https://www.youtube.com/embed/${videoID}`}
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          title="YouTube video"
        ></iframe>
      </div>
    </div>
  
    </>
  );
}
