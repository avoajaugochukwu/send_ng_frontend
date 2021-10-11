import Header from './components/Header';
import NewBooking from './components/NewBooking';
import SelectAService from './components/SelectAService';
import ImportExport from './components/ImportExport';
import CargoDetails from './components/CargoDetails';
import AdditionalServices from './components/AdditionalServices';

import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <NewBooking />
      <SelectAService />
      <ImportExport />
      <CargoDetails />
      <AdditionalServices />
      
    </div>
  );
}

export default App;
