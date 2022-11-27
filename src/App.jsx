import './App.css';
import { Sidebar } from './components/Sidebar.component/Sidebar';
import { Content } from './components/Content.component/Content';
import { Routes, Route } from 'react-router-dom';
import { Single } from './pages/Single';

function App() {
	return (
		<div className='App'>
			<Sidebar />
			<Routes>
				<Route path='/' element={<Content />} />
				<Route path='/single' element={<Single />} />
			</Routes>
		</div>
	);
}

export default App;
