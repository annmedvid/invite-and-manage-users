import { helper } from '@ember/component/helper';

export function getColor([item, teams]) {
	const team = teams.filter(team => team.data.name === item.data.team)[0];

	if (team) {
		return `table-item ${team.data.color}`;
	}
	
  return 'table-item none';
}

export default helper(getColor);
