import './trendslist.css';

const TrendsList = () => {
	const trendsList = [
		{
			title: 'Resolved',
			number: 449,
		},
		{
			title: 'Received',
			number: 426,
		},
		{
			title: 'Average first response time',
			number: '33m',
		},
		{
			title: 'Average response time',
			number: '3h 8m',
		},
		{
			title: 'Resolution within SLA',
			number: '94%',
		},
	];

	return (
		<ul className='list'>
			{trendsList.map((el) => (
				<li className='item'>
					<p className='item__text'>{el.title}</p>
					<span className='item__number'>{el.number}</span>
				</li>
			))}
		</ul>
	);
};

export default TrendsList;
