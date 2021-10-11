
import './Service.css'
export default function Service(props) {
  const { activeServiceId, handleServiceChange, serviceId, blackImage, whiteImage, text } = props
  console.log(activeServiceId, handleServiceChange)
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
            <img className="ServiceIcon" src={blackImage} />
            :
            <img className="ServiceIcon" src={whiteImage} />
        }

      </div>
    </div>
  )
}
