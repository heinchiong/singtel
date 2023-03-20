export const formatObject = (obj: any) => {
	return Object.keys(obj).map((key: any) => {
		return `${key}: ${obj[key]}`;
	}).join(', ');
}

export const sortAlgorithm = (start: any, end: any, direction: any) => {
	if (direction === 'desc') {
		if (start.includes('-') && end.includes('-')) {
			const aRange = start.split(' - ');
			const bRange = end.split(' - ');

			return parseInt(bRange[1]) - parseInt(aRange[1]);
		} else if (start.includes('-')) {
			const aRange = start.split(' - ');

			return parseInt(end) - parseInt(aRange[1]);
		} else if (end.includes('-')) {
			const bRange = end.split(' - ');

			return parseInt(bRange[1]) - parseInt(start);
		} else {
			return parseInt(end) - parseInt(start);
		}
	}

	if (start.includes('-') && end.includes('-')) {
		const aRange = start.split(' - ');
		const bRange = end.split(' - ');

		return parseInt(aRange[0]) - parseInt(bRange[0]);
	} else if (start.includes('-')) {
		const aRange = start.split(' - ');

		return parseInt(aRange[0]) - parseInt(end);
	} else if (end.includes('-')) {
		const bRange = end.split(' - ');

		return parseInt(start) - parseInt(bRange[0]);
	} else {
		return parseInt(start) - parseInt(end);
	}
}