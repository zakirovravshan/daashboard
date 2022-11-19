import UnTickets from '../UnTickets/UnTickets';
import UnTask from '../UnTasks/UnTasks';
import './ticketstasks.css';

const TicketsTasks = () => {
	return (
		<div className='wrapper'>
			<UnTickets />
			<UnTask />
		</div>
	);
};

export default TicketsTasks;
