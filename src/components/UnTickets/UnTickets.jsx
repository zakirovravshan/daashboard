import './untickets.css';

const UnTickets = () => {
	const ticketsObj = [
		{
			title: 'Waiting on Feature Request',
			number: 4238,
		},
		{
			title: 'Awaiting Customer Response',
			number: 1005,
		},
		{
			title: 'Awaiting Developer Fix',
			number: 914,
		},
		{
			title: 'Pending',
			number: 281,
		},
	];
	return (
		<div className='tickets'>
			<div className='tickets__header'>
				<div className='tickets__title-wrapper'>
					<h3 className='tickets__title'>Unresolved tickets</h3>
					<p className='tickets__text'>
						Group: <span className='tickets__text-bold'>Support</span>
					</p>
				</div>
				<a className='tickets__link' href='#'>
					View details
				</a>
			</div>
			<ul className='tickets__list'>
				{ticketsObj.map((el) => (
					<li className='tickets__item'>
						<h3 className='tickets__item-title'>{el.title}</h3>
						<p className='tickets__item-number'>{el.number}</p>
					</li>
				))}
			</ul>
		</div>
	);
};

export default UnTickets;
