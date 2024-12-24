
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import AddTask from './Components/AddTask';

import ListTask from './Components/ListTask';


function App() {
  return (
    
    <div className="App">
      <h1>Tasks To Do</h1>
      <AddTask/>
      <ListTask/>
    </div>
    
  );
}

export default App;
