import clsx from 'clsx'

import styles from './ImportExport.module.css'
import InfoCircle from '../../assets/img/icons8-info.svg'
import mapPin from '../../assets/img/icons8-marker-50.png'
import calender from '../../assets/img/icons8-planner-50.png'


function ImportExport() {
  return (
    <div className={styles.Wrapper}>
      <div className={styles.Header}>
        <img className={styles.Icon} src={InfoCircle} alt="icon-circle" />
      </div>

      {/* &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&& */}
      <div className={styles.FirstLineFlexContainer}>
        <div className={styles.FirstLineFlexItem}>
          <div className={styles.Switch}>
            <div className={styles.Quality}>
              {/* <input defaultChecked id='q1' name='q' type='radio' value='q1' /> */}
              <input id='q1' name='q' type='radio' value='q1' />
              <label htmlFor='q1'>Import</label>
            </div>
            <div className={styles.Quality}>
              <input id='q2' name='q' type='radio' value='q2' />
              <label htmlFor='q2'>Export</label>
            </div>
          </div>
        </div>
        {/* -------------------------- */}
        <div className={styles.FirstLineFlexItem}>
          <div className={styles.InputWrapper}>
            <button className={styles.InputButton}>
              <img src={mapPin} alt="search icon" className={styles.MapIcon} />
              &nbsp;
              <span>
                From
              </span>
            </button>
            <input className={styles.Input} type="text" placeholder="City or port" style={{ backgroundColor: 'transparent' }} />
          </div>
        </div>
        {/* -------------------------- */}
        <div className={clsx(styles.FirstLineFlexItem, styles.InputMargin)}>
          <div className={styles.InputWrapper}>
            <button className={styles.InputButton}>
              <img src={mapPin} alt="search icon" className={styles.MapIcon} />
              &nbsp;
              <span>
                To
              </span>
            </button>
            <input className={styles.Input} type="text" placeholder="City or port" style={{ backgroundColor: 'transparent' }} />
          </div>
        </div>
      </div>
      <br /><br />

      {/* &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&& */}
      <div className={styles.SecondLineFlexContainer}>
        <div className={styles.SecondLineFlexItem}>
          <div className={styles.InputWrapper}>
            <button className={styles.InputButton}>
              <img src={calender} alt="search icon" className={styles.MapIcon} />
            </button>
            <input className={styles.Input} type="text" placeholder="Ready Date" style={{ backgroundColor: 'transparent' }} />
          </div>
        </div>
        {/*  */}
        <div className={clsx(styles.SecondLineFlexItem, styles.InputMargin)}>
          <div className={styles.InputWrapper}>
            
            
            <select className={styles.SelectTag}>
              <option defaultValue>Incoterms</option>
            </select>
          </div>
        </div>
        {/*  */}
        <div className={clsx(styles.SecondLineFlexItem, styles.InputMargin)}>
          <div className={styles.InputWrapper}>
            <input className={styles.Input} type="text" placeholder="Total cargo value" style={{ backgroundColor: 'transparent' }} />
          </div>
        </div>
      </div>
    </div>

  )
}

export default ImportExport
