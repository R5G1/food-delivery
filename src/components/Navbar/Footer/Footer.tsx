import { url } from 'inspector';
import styles from '../Footer/Footer.module.scss';
import imgLog from '../Footer/images/1.svg';
import imgMessenger from '../Footer/images/2.svg';

const Footer = () => {
  return (
    <div className={styles.conteiner}>
      <div className={styles.footer}>
        <div className={styles.footerBtnConteiner}>
          <input type="text" placeholder="lorem" className={styles.footerInput}></input>
          <input type="text" placeholder="lorem" className={styles.footerInput}></input>
          <button className={styles.footerBtnCall}>lorem</button>
        </div>
        <div className={styles.headerMenuConteiner}>
          <div className={styles.headerLogo}>
            <img className={styles.headerLogoImg} src={imgLog} alt="" />
          </div>
          <div className={styles.footerLinkConteiner}>
            <a className={styles.footerLink} href="">
              lorem
            </a>
            <a className={styles.footerLink} href="">
              lorem
            </a>
          </div>
          <div className={styles.footerLinkConteiner}>
            <a className={styles.footerLink} href="">
              lorem
            </a>
            <a className={styles.footerLink} href="">
              lorem
            </a>
          </div>
          <div className={styles.footerContacts}>
            <div className={styles.footerContactsTell}>
              <a href="tel:+7 (499) 380-78-90" rel="noreferrer">
                +7 (499) 380-78-90
              </a>
            </div>

            <div className={styles.footerContactsText}>
              <a href="mailto:info@bastion.pro" rel="noreferrer">
                info@bastion.pro
              </a>
            </div>
          </div>
        </div>
        <div className={styles.footerLine}></div>
        <div className={styles.footerInfoConteiner}>
          <div className={styles.footerInfoP}>
            <p>Lorem ipsum dolor</p>
            <p>|</p>
            <p>Lorem ipsum dolor</p>
          </div>
          <div className={styles.footerInfoLinkConteiner}>
            <a href="#" className={styles.footerInfoLink}>
              <img className={styles.footerInfoLinkImg} src={imgMessenger} alt="" />
            </a>
            <a href="#" className={styles.footerInfoLink}>
              <img className={styles.footerInfoLinkImg} src={imgMessenger} alt="" />
            </a>
            <a href="#" className={styles.footerInfoLink}>
              <img className={styles.footerInfoLinkImg} src={imgMessenger} alt="" />
            </a>
            <a href="#" className={styles.footerInfoLink}>
              <img className={styles.footerInfoLinkImg} src={imgMessenger} alt="" />
            </a>
            <a href="#" className={styles.footerInfoLink}>
              <img className={styles.footerInfoLinkImg} src={imgMessenger} alt="" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
