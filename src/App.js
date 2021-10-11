import Header from './components/Header';
import NewBooking from './components/NewBooking';
import SelectAService from './components/SelectAService';
import ImportExport from './components/ImportExport';
import CargoDetails from './components/CargoDetails';

import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <NewBooking />
      <SelectAService />
      <ImportExport />
      <CargoDetails />

      <br /><br /><br /><br /><br /><br />
    </div>
  );
}

export default App;
