import { Alltickets } from '../components/AllTickets/Alltickets';
import { Header } from '../components/Content.component/Header';
import './single.css';

export const Tickets = () => {
	return (
		<div className='content'>
			<Header />
			<Alltickets />
		</div>
	);
};
