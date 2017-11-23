import { helper } from '@ember/component/helper';

const months = ['Janury', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

const addZero = (number) => {
	if (number < 10) number = '0' + number;
	return number;
}

export function userCreated([created]) {
	const date = new Date(created);

  return `${months[date.getUTCMonth()]} ${date.getUTCDate()}, ${date.getUTCFullYear()} ${addZero(date.getHours())}:${addZero(date.getMinutes())}:${addZero(date.getSeconds())}`;
}

export default helper(userCreated);
