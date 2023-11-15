import { instSectionGallery } from './inst-section.const';
import classes from './inst-section.module.scss';

export const InstSection = (): JSX.Element => {
  return (
    <section id='contact' className={classes['inst-section__wrapper']}>
      <div className={classes['inst-section__title-wrapper']}>
        <h2>Следите за нами в Instagram</h2>
        <h4 className={classes['inst-section__tag']}>@pizzamenu</h4>
      </div>
      <div className={classes['inst-section__gallery-wrapper']}>
        {instSectionGallery.map((photo, index) => 
          <div className={classes['inst-section__photo-wrapper']} key={photo}>
            <img 
              className={classes['inst-section__photo-item']}
              src={photo} 
              alt={index.toString()} 
            />
          </div>
        )}
      </div>
    </section>
  );
};
