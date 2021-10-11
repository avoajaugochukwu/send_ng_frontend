import clsx from 'clsx'
import Service from './components/Service'

import styles from './AdditionalServices.module.css'

function AdditionalServices() {
  return (
    <div className={styles.Wrapper}>
      <div >
        <h3 className={styles.Header}>Additional Services</h3>
      </div>
      {/* ----------- */}

      <div className={styles.FlexContainer}>
        <div className={styles.FlexItem}>
          <Service 
            id={'1s'} 
            title={'Export Forwarding'}
            desc={'We handle custom clearance and documentation'}
          />
        </div>
        <div className={styles.FlexItem}>
          <Service 
            id={'2s'}
            title={'Import Custom Clearance'}
            desc={'We handle custom clearance and regulatory requirements'}
            />
        </div>
      </div>
      {/* ******************************************** */}
      
      <div className={clsx(styles.FlexContainer, styles.TopMargin)}>
        <div className={styles.FlexItem}>
          <Service 
            id={'3s'} 
            title={'Cargo Insurance'}
            desc={'Protect your cargo from logistics risks up to its full value'}
          />
        </div>
        <div className={styles.FlexItem}>
          <Service 
          id={'4s'} 
          title={'Transport / Delivery'}
            desc={'We deliver the cargo to your door step from the ports'}
          />
        </div>
      </div>



    </div>
  )
}

export default AdditionalServices
