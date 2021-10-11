import Header from './components/Header';
import NewBooking from './components/NewBooking';
import SelectAService from './components/SelectAService';
import ImportExport from './components/ImportExport';

import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <NewBooking />
      <SelectAService />
      <ImportExport />
    </div>
  );
}

export default App;
