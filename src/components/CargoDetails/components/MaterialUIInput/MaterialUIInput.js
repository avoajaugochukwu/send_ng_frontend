import clsx from 'clsx'
import styles from './MaterialUIInput.module.css'


export default function MaterialUIInput(props) {
  // const 
  return (
    <>
      <div className={styles.FlexContainer}>
        <div className={styles.InputWrapper}>
          <input type="text" placeholder="" />
          <span>cbm</span>
          <label className={styles.Label}>Total Volume</label>
        </div>

        {/* **************** */}

        <div className={clsx(styles.InputWrapper, styles.LeftMargin)}>
          <input type="text" placeholder="" />
          <span>kg</span>
          <label className={styles.Label}>Total Weight</label>
        </div>
      </div>
    </>
  )
}
