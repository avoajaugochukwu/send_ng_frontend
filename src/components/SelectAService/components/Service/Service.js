
import './Service.css'
export default function Service(props) {
  const { activeServiceId, handleServiceChange, serviceId, blackImage, whiteImage, text } = props

  return (
    <div
      className={`ServiceWrapper ${activeServiceId === serviceId ? 'ServiceWrapperActive' : ''}`}
      onClick={() => handleServiceChange(serviceId)}
    >
      <div className={`ServiceText ${activeServiceId === serviceId ? 'ServiceTextActive' : ''}`}>
        
        <p dangerouslySetInnerHTML={{__html: `${text}`}}></p>
      </div>
      <div>
        {
          activeServiceId === serviceId ?
            
            <img className="ServiceIcon" src={whiteImage} alt="white" />
            :
            <img className="ServiceIcon" src={blackImage} alt="black" />
            
        }

      </div>
    </div>
  )
}
