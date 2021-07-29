import styles from './FormInputs.module.scss';

const FormInputs = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.leftBlockInputs}>
        <div className={styles.smallBlockInputs}>
          <label className={styles.labelSmall}>
            Ім'я
            <input type="text" className={styles.smallInput} />
          </label>
          <label className={styles.labelSmall}>
            Прізвище
            <input type="text" className={styles.smallInput} />
          </label>
        </div>
        <label className={styles.label}>
          Назва компанії, організації
          <input type="text" className={styles.largeInput} />
        </label>
        <label className={styles.label}>
          Email-адреса
          <input type="email" className={styles.largeInput} />
        </label>
        <label className={styles.label}>
          Номер телефону
          <input type="tel" className={styles.largeInput} />
        </label>
      </div>
      <label className={styles.fileLabel}>
        + Логотип
        <input type="file" className={styles.fileInput} />
      </label>
      <div>
        <label className={styles.label}>
          Країна
          <input type="text" className={styles.largeInput} />
        </label>
        <div className={styles.smallBlockInputs}>
          <label className={styles.labelSmall}>
            Місто
            <input type="text" className={styles.smallInput} />
          </label>
          <label className={styles.labelSmall}>
            Штат, район
            <input type="text" className={styles.smallInput} />
          </label>
        </div>
        <label className={styles.label}>
          Адреса
          <input type="text" className={styles.largeInput} />
        </label>
        <label className={styles.labelSmall}>
          Поштовий індекс
          <input type="text" className={styles.smallInput} />
        </label>
      </div>
    </div>
  );
};

export default FormInputs;
