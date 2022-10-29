import styled from '../../styles/Expirience.module.scss';

const Expirience = () => {
  return (
    <div className={styled.expirience}>
      <div className={styled.container}>
        <h3 className={styled.title}>Expirience</h3>
        <div className={styled.expirienceSlider}>
          <div className={styled.expirienceCard}>
            <div className={styled.cardText}>
              <div className={styled.title}>Infoserv</div>
              <div className={styled.content}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis, tempore illum iusto quas eos excepturi temporibus suscipit dolor dolorem id?</div>
              <div className={styled.footer}>8 weeks</div>
            </div>
          </div>
          <div className={styled.expirienceCard}>
            <div className={styled.cardText}>
              <div className={styled.title}>Infoserv</div>
              <div className={styled.content}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis, tempore illum iusto quas eos excepturi temporibus suscipit dolor dolorem id?</div>
              <div className={styled.footer}>8 weeks</div>
            </div>
            <div className={styled.cardTimeline}></div>
          </div>
          <div className={styled.expirienceCard}>
            <div className={styled.cardText}>
              <div className={styled.title}>Infoserv</div>
              <div className={styled.content}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis, tempore illum iusto quas eos excepturi temporibus suscipit dolor dolorem id?</div>
              <div className={styled.footer}>8 weeks</div>
            </div>
            <div className={styled.cardTimeline}></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Expirience;
