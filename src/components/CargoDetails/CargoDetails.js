
import clsx from 'clsx'

import ToggleButton from '../ToggleButton'
import MaterialUIInput from './components/MaterialUIInput'

import styles from './CargoDetails.module.css'

export default function CargoDetails() {
  return (
    <div className={styles.Wrapper}>
      <div className={styles.FlexContainer}>
        <div className={styles.FlexItem}>
          <h3 className={styles.CargoDetailsHeader}>Cargo Details</h3>
        </div>
        <div className={clsx(styles.FlexItem, styles.DangerousSubstance)}>
          <div className={styles.DSFlexItem}>
            <ToggleButton id={'cd'} />
          </div>
          
          <div className={styles.DSFlexItem}>
            <p>
              <b>&nbsp;&nbsp;&nbsp;&nbsp;Dangerous Cargo&nbsp;</b>(ex. Chemicals, Battery)
            </p>
            
            
          </div>
        </div>
      </div>
      <div className={styles.Options}>
        <div>
          <div className={styles.Switch}>
            <div className={styles.Quality}>
              {/* <input defaultChecked id='q1' name='q' type='radio' value='q1' /> */}
              <input defaultChecked id='d1' name='d' type='radio' value='q1' />
              <label htmlFor='d1'>Total Dimensions</label>
            </div>
            <div className={styles.Quality}>
              <input id='d2' name='d' type='radio' value='q2' />
              <label htmlFor='d2'>Package Details</label>
            </div>
          </div>
        </div>
        {/*  */}
        <div>
        <MaterialUIInput />
        </div>
      </div>
    </div>
  )
}
