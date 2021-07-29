import styles from './PopOver.module.scss';
import sprite from '../../img/sprite.svg';

const PopOver = () => {
  return (
    <div className={styles.wrapper}>
      <div>
        <h3 className={styles.paySubtitle}>Спосіб оплати</h3>
        <ul className={styles.payList}>
          <li className={styles.payItem}>
            <svg className={styles.payIcon} width="81" height="30">
              <use href={`${sprite}#cards`} />
            </svg>

            <p className={styles.payDescr}>Картка Visa/MasterCard</p>
          </li>
          <li className={styles.payItem}>
            <p className={styles.privatTitle}>Приват24</p>
            <p className={styles.payDescr}>Приват24</p>
          </li>
          <li className={styles.payItem}>
            <svg className={styles.payIconServ} width="30" height="36">
              <use href={`${sprite}#term`} />
            </svg>
            <p className={styles.payDescr}>Термінали України</p>
          </li>
          <li className={styles.payItem}>
            <div className={styles.wrapp}>
              <svg className={styles.payIconWebMoney} width="50" height="30">
                <use href={`${sprite}#web`} />
              </svg>
              <p className={styles.payDescr}>WebMoney</p>
            </div>
          </li>
          <li className={styles.payItem}>
            <svg className={styles.payIcon} width="24" height="36">
              <use href={`${sprite}#paypal`} />
            </svg>
            <p className={styles.payDescr}>PayPal</p>
          </li>
        </ul>
      </div>
      <div>
        <h3 className={styles.paySubtitle}>Введіть наступні дані</h3>
        <div className={styles.payForm}>
          <h4 className={styles.payFormSubtitle}>Номер картки</h4>
          <label className={styles.payFormLabel}>
            <input className={styles.payFormInput} />
            <input className={styles.payFormInput} />
            <input className={styles.payFormInput} />
            <input className={styles.payFormInput} />
          </label>
          <div className={styles.cardInfo}>
            <label className={styles.cardInfoLabel}>
              <h4 className={styles.payFormSubtitle}> Термін дії</h4>
              <input className={styles.payTermInput} />
            </label>
            <label className={styles.cardInfoLabel}>
              <h4 className={styles.payFormSubtitle}>CVC/CVV</h4>
              <input className={styles.payTermInput} />
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopOver;
