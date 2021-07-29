import FormInputs from '../FormIputs/FormInputs';
import HelpTypes from '../HelpTypes/HelpTypes';
import styles from './Form.module.scss';

const Form = ({ formSubmit }) => {
  return (
    <div className={styles.formWrapper}>
      <div>
        <h2 className={styles.title}>Заповніть форму</h2>
      </div>
      <div className={styles.btnWrapper}>
        <button className={styles.leftBtn}>Фіз.особа</button>
        <button className={styles.rightBtn}>Юр.особа</button>
      </div>
      <form className={styles.form} onSubmit={formSubmit}>
        <FormInputs />
        <HelpTypes />
        <button className={styles.payFormBtn}>Допомогти</button>
      </form>
    </div>
  );
};

export default Form;
