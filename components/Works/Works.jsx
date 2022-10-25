import Image from 'next/image';
import Link from 'next/link';
import styled from '../../styles/Works.module.scss';
const Works = () => {
  return (
    <div className={styled.works}>
      <div className={styled.container}>
        <h2 className={styled.title}>Works</h2>
        <div className={styled.works_container}>
          <div className={styled.works_container_object}>
            <Link href='pages/urbangreen.html'>
              <div>
                <div className={styled.top_bar}>
                  <h3 className={styled.title}>Urbangreen</h3>
                </div>
                <div className={styled.main_content}>
                  {/* <Image src='' alt='first project picture' /> */}
                  <div className={styled.tags}>
                    <div className={styled.tag}>HTML</div>
                    <div className={styled.tag}>CSS</div>
                    <div className={styled.tag}>Responsive</div>
                    <div className={styled.tag}>First Project</div>
                    <div className={styled.tag}>Subpages</div>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Works;
