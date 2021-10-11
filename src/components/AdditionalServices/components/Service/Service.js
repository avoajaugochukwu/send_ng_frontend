import styles from './Service.module.css'
import ToggleButton from '../../../ToggleButton'

export default function Service(props) {
  const { id, title, desc } = props
  return (
    <div className={styles.FlexContainer}>
      
        <ToggleButton id={id} />
        <div className={styles.Details}>
          <h3 className={styles.Title}>{ title }</h3>
          <p className={styles.Desc}>{ desc }</p>
        </div>
      
    </div>
  )
}
