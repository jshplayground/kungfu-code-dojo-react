
import { ContainerAnimated, ContainerInset, ContainerScroll, ContainerSticky, HeroButton, HeroImage } from "@/components/ui/animated-video-on-scroll";
const KungFuVideoSection = () => {
  return <section>
      <ContainerScroll className="h-[150vh]">
        <ContainerSticky style={{
        background: "radial-gradient(40% 40% at 50% 20%, #300912 0%, #220710 22.92%, #1a050d 42.71%, #0c0206 88.54%)"
      }} className="bg-dark-bg px-6 py-8 text-light-text overflow-hidden relative bg-transparent">
          <ContainerAnimated className="space-y-6 text-center">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tighter">
              <span className="text-kungfu-red">Kung Fu Digital</span> en acción
            </h1>
            <p className="mx-auto max-w-[50ch] text-xl opacity-80">
              Aprende a defender la verdad sobre la inteligencia artificial con técnicas milenarias adaptadas al mundo digital
            </p>
          </ContainerAnimated>

          <ContainerInset className="max-h-[550px] w-auto py-8 my-4">
            <HeroImage src="/lovable-uploads/cdfcd4e3-5e7b-4e8a-8a20-6771b9c1d532.png" alt="Maestro de Kung Fu contra negacionistas de la IA" className="w-auto h-auto max-w-full max-h-[550px] mx-auto object-contain" />
          </ContainerInset>
          <ContainerAnimated transition={{
          delay: 0.4
        }} outputRange={[-120, 0]} inputRange={[0, 0.7]} className="mx-auto mt-6 w-fit flex flex-col md:flex-row gap-6">
            <HeroButton className="border-kungfu-red bg-dark-bg/20 shadow-[0px_4px_24px_rgba(229,9,20,0.5)]">
              <span className="text-light-text text-xl">Aprende las técnicas</span>
            </HeroButton>
            <HeroButton className="border-tech-neon-green bg-dark-bg/20 shadow-[0px_4px_24px_rgba(12,242,160,0.5)]">
              <span className="text-light-text text-xl">Únete al dojo digital</span>
            </HeroButton>
          </ContainerAnimated>
        </ContainerSticky>
      </ContainerScroll>
    </section>;
};
export default KungFuVideoSection;
