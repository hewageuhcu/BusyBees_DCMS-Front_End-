import logo from './logo.svg';
import './App.css';
import ApiService from './children_service'; 
import Children from './children';     
function App() {
  return (
    <div>
      <children_service />
      <children />
    </div>
  );
}

export default App;

