import ApexCharts from '../Apexchart/ApexChart';
import TrandsList from '../TrendsList/TrendsList';
import './trends.css';

export const Trends = () => {
	return (
		<div className='trends-content'>
			<div className='trends-content__header'>
				<div className='trends-content__wrapper'>
					<div className='trends-content__left'>
						<h3 className='trends-content__title'>Today’s trends</h3>
						<span className='trends-content__time'>
							as of 25 May 2019, 09:41 PM
						</span>
					</div>
					<div className='trends-content__right'>
						<span className='trends-content__item'>
							<span className='trends-content__line'></span>
							Today
						</span>
						<span className='trends-content__item'>
							<span className='trends-content__line'></span>
							Yesterday
						</span>
					</div>
				</div>
				<ApexCharts />
			</div>
			<TrandsList />
		</div>
	);
};
