import { helper } from '@ember/component/helper';

export function teamIsEnabled([users, team]) {
	const teamUsers = users.filter(user => user.data.team === team.data.name).filter(user => user.data.enabled);
	const status = teamUsers.length ? 'yes' : 'no';
  return status;
}

export default helper(teamIsEnabled);
