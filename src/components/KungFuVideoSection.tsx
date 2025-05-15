
import { useState } from "react";
import { ContainerAnimated, ContainerInset, ContainerScroll, ContainerSticky, HeroButton, HeroImage } from "@/components/ui/animated-video-on-scroll";
import { Play } from "lucide-react";

const KungFuVideoSection = () => {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  return (
    <section className="relative overflow-hidden">
      <ContainerScroll className="h-[120vh]">
        <ContainerSticky className="flex flex-col items-center justify-center">
          <ContainerAnimated className="text-center max-w-4xl px-4 md:px-0">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">Domina el Arte Digital del Kung Fu</h2>
            <p className="text-lg mb-8 text-gray-300">
              Aprende a defender tus ideas contra los negacionistas digitales con técnicas avanzadas de argumentación y datos.
            </p>
          </ContainerAnimated>
          
          <ContainerInset className="w-full max-w-5xl mt-6 px-4 md:px-0">
            <div className="relative aspect-video w-full overflow-hidden rounded-xl border border-kungfu-red shadow-lg shadow-kungfu-red/20">
              {!isVideoPlaying ? (
                <div 
                  className="absolute inset-0 flex items-center justify-center cursor-pointer bg-dark-bg/60"
                  onClick={() => setIsVideoPlaying(true)}
                >
                  <div className="bg-kungfu-red rounded-full p-5 pulse-animation">
                    <Play size={32} className="text-white" />
                  </div>
                </div>
              ) : null}
              <video
                className="w-full h-full object-cover"
                src="https://assets.mixkit.co/videos/preview/mixkit-martial-arts-teacher-instructs-a-person-how-to-block-48741-large.mp4"
                poster="https://assets.mixkit.co/videos/preview/mixkit-martial-arts-teacher-instructs-a-person-how-to-block-48741-large.jpg"
                controls={isVideoPlaying}
                autoPlay={isVideoPlaying}
                playsInline
              />
            </div>
          </ContainerInset>
          
          <ContainerAnimated
            className="flex mt-8 gap-4"
            inputRange={[0.1, 0.4]}
            outputRange={[60, 0]}
          >
            <HeroButton onClick={() => setIsVideoPlaying(true)}>
              Ver demostración
            </HeroButton>
            <HeroButton className="border-tech-neon-green text-tech-neon-green hover:bg-tech-neon-green/10 shadow-[0px_4px_24px_#0CF2A0]">
              Conoce al instructor
            </HeroButton>
          </ContainerAnimated>
        </ContainerSticky>
      </ContainerScroll>
    </section>
  );
};

export default KungFuVideoSection;
