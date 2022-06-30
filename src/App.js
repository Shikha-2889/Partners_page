import './App.css';
import StudDetails from './studDetails';
import StudTable from './studTable';

function App() {
  return (
    <div className="app">
      <StudDetails btn="Add Student"/>
      <StudTable/>
    </div>
  );
}

export default App;
