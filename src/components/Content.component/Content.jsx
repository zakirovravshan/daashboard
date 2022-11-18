import { Header } from './Header';
import { Status } from './Status';
import { Trends } from '../Trends';
import TicketsTasks from '../TicketsTasks/TicketsTasks';

export let Content = () => {
	return (
		<div className='content'>
			<Header />
			<Status />
			<Trends />
			<TicketsTasks />
		</div>
	);
};
