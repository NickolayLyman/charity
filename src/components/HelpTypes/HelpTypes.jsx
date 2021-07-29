import styles from './HelpTypes.module.scss';
import sprite from '../../img/sprite.svg';
import { useState } from 'react';
import Popover from '../PopOver/PopOver';
import InProgress from '../InProgress/InProgress';

const HelpTypes = () => {
  const [first, setFist] = useState(false);
  const [second, setSecond] = useState(true);
  const [third, setThird] = useState(false);
  const [fourth, setFourth] = useState(false);

  const hadleFirstItem = () => {
    setFist(true);
    setSecond(false);
    setThird(false);
    setFourth(false);
  };
  const hadleSecond = () => {
    setFist(false);
    setSecond(true);
    setThird(false);
    setFourth(false);
  };
  const hadleThird = () => {
    setFist(false);
    setSecond(false);
    setThird(true);
    setFourth(false);
  };
  const hadleFourth = () => {
    setFist(false);
    setSecond(false);
    setThird(false);
    setFourth(true);
  };

  const firstItem = first ? { display: 'block' } : { display: 'none' };
  const secondItem = second ? { display: 'block' } : { display: 'none' };
  const thirdItem = third ? { display: 'block' } : { display: 'none' };
  const fourthtItem = fourth ? { display: 'block' } : { display: 'none' };

  const activClassFirst = first ? styles.iconActiv : styles.icon;
  const activClassSecond = second ? styles.iconActiv : styles.icon;
  const activClassThird = third ? styles.iconActiv : styles.icon;
  const activClassFourth = fourth ? styles.iconActiv : styles.icon;

  return (
    <>
      <h2 className={styles.title}>Види допомоги</h2>
      <p className={styles.subtitle}>Ви можете змінити тип допомоги</p>
      <ul className={styles.list}>
        <li className={styles.item} onClick={hadleFirstItem}>
          <div className={styles.arrow} style={firstItem}>
            -
          </div>
          <svg className={activClassFirst}>
            <use href={`${sprite}#hands`} />
          </svg>
          <p className={styles.description}>Зробити</p>
        </li>
        <li className={styles.item} onClick={hadleSecond}>
          <div className={styles.arrow} style={secondItem}>
            -
          </div>
          <svg className={activClassSecond}>
            <use href={`${sprite}#wallet`} />
          </svg>
          <p className={styles.description}>Фінансова допомога</p>
        </li>
        <li className={styles.item} onClick={hadleThird}>
          <div className={styles.arrow} style={thirdItem}>
            -
          </div>
          <svg className={activClassThird}>
            <use href={`${sprite}#clothes`} />
          </svg>
          <p className={styles.description}>Матеріальна допомога</p>
        </li>
        <li className={styles.item} onClick={hadleFourth}>
          <div className={styles.arrow} style={fourthtItem}>
            -
          </div>
          <svg className={activClassFourth}>
            <use href={`${sprite}#heart`} />
          </svg>
          <p className={styles.description}>Волонтерство</p>
        </li>
      </ul>
      {second ? <Popover /> : <InProgress />}
    </>
  );
};

export default HelpTypes;
