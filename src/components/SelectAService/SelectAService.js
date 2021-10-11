import { useState } from 'react'
import Service from './components/Service/Service'
import './SelectAService.css'

// Images
import ship_black from '../../assets/img/ship_black.png'
import ship_white from '../../assets/img/ship_white.png'

import airplane_black from '../../assets/img/airplane_black.svg'
import airplane_white from '../../assets/img/airplane_white.svg'

import custom_black from '../../assets/img/custom_black.svg'
import custom_white from '../../assets/img/custom_white.svg'

import truck_black from '../../assets/img/truck_black.svg'
import truck_white from '../../assets/img/truck_white.svg'

export default function SelectAService() {
  const [activeServiceId, setActiveServiceId] = useState(1)

  const handleServiceChange = (id) => {
    setActiveServiceId(id)
  }

  return (
    <div className="SelectAServiceWrapper">
      <div className="SelectAServiceHeader">
        <h3>Select a service</h3>
      </div>
      <div className="SelectAServiceFlexContainer">
        <Service
          activeServiceId={activeServiceId}
          handleServiceChange={handleServiceChange}
          serviceId={1}
          blackImage={ship_black}
          whiteImage={ship_white}
          text={'Air Freight'} />

        {/*  */}
        <Service
          activeServiceId={activeServiceId}
          handleServiceChange={handleServiceChange}
          serviceId={2}
          blackImage={airplane_black}
          whiteImage={airplane_white}
          text={'Sea Freight'} />

        {/*  */}

        <Service
          activeServiceId={activeServiceId}
          handleServiceChange={handleServiceChange}
          serviceId={3}
          blackImage={truck_black}
          whiteImage={truck_white}
          text={`Inland<br/>(Truck & Barge)`} />

        {/*  */}

        <Service
          activeServiceId={activeServiceId}
          handleServiceChange={handleServiceChange}
          serviceId={4}
          blackImage={custom_black}
          whiteImage={custom_white}
          text={'Custom<br/>Clearance'} />
      </div>


    </div>
  )
}
