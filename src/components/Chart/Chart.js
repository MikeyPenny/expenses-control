import React from 'react';

import ChartBar from './ChartBar';
import './Chart.css';

const Chart = props => {
	const datapointValues = props.data.map(point => point.value);

	const totalMax = Math.max(...datapointValues);

	return (
		<div className='chart'>
			{props.data.map(dataPoint => (
				<ChartBar
					key={dataPoint.label}
					value={dataPoint.value}
					maxValue={totalMax}
					label={dataPoint.label}
				/>
			))}
		</div>
	);
};

export default Chart;
