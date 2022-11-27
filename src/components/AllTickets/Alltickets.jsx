import './alltickets.css';
import User1 from '../../images/user1.svg';
import User2 from '../../images/user2.svg';
import User3 from '../../images/user3.svg';
import User4 from '../../images/user4.svg';
import User5 from '../../images/user5.svg';
import User6 from '../../images/user6.svg';
import User7 from '../../images/user7.svg';
import User8 from '../../images/user8.svg';
import dote from '../../images/dote.svg';
import arrow from '../../images/arrow-down.svg';
import left from '../../images/left.svg';
import right from '../../images/right.svg';

export const Alltickets = () => {
	const allTickets = [
		{
			img: User1,
			status: 'Contact Email not Linked',
			update: 'Updated 1 day ago',
			name: 'Tom Cruise',
			nametime: 'on 24.05.2019',
			date: 'May 26, 2019',
			datehour: '6:30 PM',
			button: 'High',
			settings: dote,
		},
		{
			img: User2,
			status: 'Adding Images to Featured Posts',
			update: 'Updated 1 day ago',
			name: 'Matt Damon',
			nametime: 'on 24.05.2019',
			date: 'May 26, 2019',
			datehour: '8:00 AM',
			button: 'Low',
			settings: dote,
		},
		{
			img: User3,
			status: 'When will I be charged this month?',
			update: 'Updated 1 day ago',
			name: 'Robert Downey',
			nametime: 'on 24.05.2019',
			date: 'May 26, 2019',
			datehour: '7:30 PM',
			button: 'High',
			settings: dote,
		},
		{
			img: User4,
			status: 'Payment not going through',
			update: 'Updated 2 day ago',
			name: 'Christian Bale',
			nametime: 'on 24.05.2019',
			date: 'May 25, 2019',
			datehour: '5:00 PM',
			button: 'Normal',
			settings: dote,
		},
		{
			img: User5,
			status: 'Unable to add replies',
			update: 'Updated 2 day ago',
			name: 'Henry Cavil',
			nametime: 'on 24.05.2019',
			date: 'May 25, 2019',
			datehour: '4:00 PM',
			button: 'High',
			settings: dote,
		},
		{
			img: User6,
			status: 'Downtime since last week',
			update: 'Updated 3 day ago',
			name: 'Chris Evans',
			nametime: 'on 23.05.2019',
			date: 'May 25, 2019',
			datehour: '2:00 PM',
			button: 'Normal',
			settings: dote,
		},
		{
			img: User7,
			status: 'Referral Bonus',
			update: 'Updated 4 day ago',
			name: 'Sam Smith',
			nametime: 'on 22.05.2019',
			date: 'May 25, 2019',
			datehour: '11:30 AM',
			button: 'Low',
			settings: dote,
		},
		{
			img: User8,
			status: 'How do I change my password?',
			update: 'Updated 6 day ago',
			name: 'Steve Rogers',
			nametime: 'on 21.05.2019',
			date: 'May 24, 2019',
			datehour: '1:00 PM',
			button: 'Normal',
			settings: dote,
		},
	];
	return (
		<div className='alltickets'>
			<div className='alltickets__header'>
				<h3 className='alltickets__header-title'>All tickets</h3>
				<ul className='alltickets__header-list'>
					<li className='alltickets__header-item'>
						<span className='alltickets__header-text'>Sort</span>
					</li>
					<li className='alltickets__header-item'>
						<span className='alltickets__header-text'>Filter</span>
					</li>
				</ul>
			</div>
			<ul className='alltickets__hbottom-list'>
				<li className='alltickets__hbottom-item'>
					<p className='alltickets__hbottom-text'>Ticket details</p>
				</li>
				<li className='alltickets__hbottom-item'>
					<p className='alltickets__hbottom-text'>Customer name</p>
				</li>
				<li className='alltickets__hbottom-item'>
					<p className='alltickets__hbottom-text'>Date</p>
				</li>
				<li className='alltickets__hbottom-item'>
					<p className='alltickets__hbottom-text'>Priority</p>
				</li>
			</ul>
			<ul className='alltickets__body-list'>
				{allTickets.map((el) => (
					<li className='alltickets__body-item'>
						<img
							className='alltickets__body-img'
							src={el.img}
							alt={el.name}
							width={44}
							height={44}
						/>
						<div className='alltickets__status'>
							<p className='alltickets__status-text'>{el.status}</p>
							<p className='alltickets__status-date'>{el.update}</p>
						</div>

						<div className='name'>
							<h4 className='name__name'>{el.name}</h4>
							<span className='name__time'>{el.nametime}</span>
						</div>
						<div className='date'>
							<span className='date__date'>{el.date}</span>
							<span className='date__time'>{el.datehour}</span>
						</div>

						<button
							className={` alltickets__body-btn ${
								el.button === 'Low'
									? 'low'
									: el.button === 'Normal'
									? 'normal'
									: 'high'
							}`}>
							{el.button}
						</button>
						<img src={el.settings} alt='dote' width={4} height={16} />
					</li>
				))}
			</ul>
			<div className='alltickets__bottom'>
				<p className='alltickets__text'>Rows per page: </p>
				<div className='alltick-wrapper'>
					<span className='alltick-num'>8</span>
					<img
						className='alltick-img'
						src={arrow}
						alt='Arrow'
						width={7}
						height={4}
					/>
				</div>
				<div className='alltickk-wrapper'>
					<span className='alltuckk-text'>1-8 of 1240</span>
					<div className='alltickk-imgwrap'>
						<img
							className='img-left'
							src={left}
							alt='left'
							width={6}
							height={12}
						/>
						<img
							className='img-right'
							src={right}
							alt='right'
							width={6}
							height={12}
						/>
					</div>
				</div>
			</div>
		</div>
	);
};
