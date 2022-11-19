import './untasks.css';

const UnTask = () => {
	const tasksObj = [
		{
			status: false,
			title: 'Finish ticket update',
			name: 'Urgent',
		},
		{
			status: false,
			title: 'Finish ticket update',
			name: 'New',
		},
		{
			status: true,
			title: 'Finish ticket update',
			name: 'Default',
		},
	];

	return (
		<div className='task'>
			<div className='task__header'>
				<div className='task__title-wrapper'>
					<h3 className='task__title'>Tasks</h3>
					<p className='task__text'>Today</p>
				</div>
				<a className='task__link' href='#'>
					View all
				</a>
			</div>
			<div className='task__search'>
				<input
					className='task__search-inp'
					aria-label='Create new task'
					type='text'
					name='user_text'
					placeholder='Create new task'
				/>
				<button className='task__search-btn'>+</button>
			</div>
			<ul className='task__list'>
				{tasksObj.map((el) => (
					<li className='task__item'>
						<div className='task__item-wrapper'>
							<label
								htmlFor='one'
								className={`${
									el.status ? 'inp-circle inp-check' : 'inp-circle'
								}`}>
								<input
									className='visually-hidden'
									id='one'
									type='checkbox'
									defaultChecked={el.status === true}
								/>
							</label>
							<p className='task__item-text'>{el.title}</p>
						</div>
						<button
							className={`task__item-btn  ${
								el.name === 'Urgent'
									? 'yellow'
									: el.name === 'New'
									? 'green'
									: 'broun'
							}`}>
							{el.name}
						</button>
					</li>
				))}
			</ul>
		</div>
	);
};

export default UnTask;
