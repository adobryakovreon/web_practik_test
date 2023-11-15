import { AboutCard } from "./lib/components/about-card";
import { aboutMap } from "./lib/consts/about const";
import classes from './lib/styles/about-section.module.scss'

export const AboutSection = (): JSX.Element => {
  return (
    <section id="about" className={classes['about-wrapper']}>
      <AboutCard
        title={aboutMap.first.title}
        text={aboutMap.first.text}
        imgSrc={aboutMap.first.imgSrc}
      />
      <AboutCard 
        title={aboutMap.second.title}
        text={aboutMap.second.text}
        imgSrc={aboutMap.second.imgSrc}
        reversed
      />
      <AboutCard
        title={aboutMap.third.title}
        text={aboutMap.third.text}
        imgSrc={aboutMap.third.imgSrc}        
      />
    </section>
  );
};
