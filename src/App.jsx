import './App.css';
import { Sidebar } from './components/Sidebar.component/Sidebar';
import { Content } from './components/Content.component/Content';
import { Routes, Route } from 'react-router-dom';
import { Tickets } from './pages/Tickets';
import { Ideas } from './pages/Ideas';
import { Contacts } from './pages/Contacts';
import { Agents } from './pages/Agents';
import { Articles } from './Articles';

function App() {
	return (
		<div className='App'>
			<Sidebar />
			
			<Routes>
				<Route path='/Overview'  element={<Content />} />
				<Route path='/Tickets' element={<Tickets />} />
				<Route path='/Ideas' element={<Ideas />} />
				<Route path='/Contacts' element={<Contacts/>} />
				<Route path='/Agents' element={<Agents/>} />
				<Route path='/Articles' element={<Articles/>} />
			</Routes>
		</div>
	);
}

export default App;
