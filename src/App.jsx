import './App.css';
import { Sidebar } from './components/Sidebar.component/Sidebar';
import {Content} from "./components/Content.component/Content"


function App() {
  return (
    <div className="App">
      <Sidebar/>
      <Content/>
    </div>
  );
}

export default App;
