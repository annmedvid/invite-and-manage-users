let index = 1;

export default function() {
  this.namespace = '/api';

  let users = [
    {
      type: 'users',
      id: '1',
      attributes: {
        name: 'John Sew',
        email: 'john@example.com',
        created: 1498133040000,
        enabled: true,
        role: 'admin',
        team: 'support'
      }
    },
    {
      type: 'users',
      id: '2',
      attributes: {
        name: 'Grace Haller',
        email: 'grace@example.com',
        created: 1498133052000,
        enabled: true,
        role: 'helpdesk',
        team: 'support'
      }
    },
    {
      type: 'users',
      id: '3',
      attributes: {
        name: 'David Roberts',
        email: 'david@example.com',
        created: 1498133052000,
        enabled: true,
        role: 'admin',
        team: 'sales'
      }
    },
    {
      type: 'users',
      id: '4',
      attributes: {
        name: 'Ronald Harper',
        email: 'ronald@example.com',
        created: 1498133052000,
        enabled: true,
        role: 'admin',
        team: 'support'
      }
    }
  ];

  let teams = [
    {
      type: 'teams',
      id: 'support',
      attributes: {
        name: 'support',
        description: 'team of support engineers',
        color: 'blue'
      }
    },
    {
      type: 'teams',
      id: 'sales',
      attributes: {
        name: 'sales',
        description: 'sales team',
        color: 'yellow'
      }
    }
  ];

  this.get('/users', function(db, request) {
    if (request.queryParams.team !== undefined) {
      let filteredUsers = [];
      if (request.queryParams.context === 'in') {
        filteredUsers = users.filter(user => user.attributes.team === request.queryParams.team);
      }
      if (request.queryParams.context === 'out') {
        filteredUsers = users.filter(user => user.attributes.team !== request.queryParams.team);
      }
      return {data: filteredUsers};
    }
    return {data: users };
  });

  this.get('/teams', function() {
    return {data: teams};
  });

  this.get('/users/:id', (db, request) => {
    const user = users.filter(user => request.params.id === user.id)[0];
    return {data: user || {}};
  });

  this.get('/teams/:id', (db, request) => {
    const team = teams.filter(team => request.params.id === team.id)[0];
    return {data: team || {}};
  });

  this.patch('/users/:id', (db, request) => {
    const user = JSON.parse(request.requestBody).data;
    users = users.map(item => {
      if (item.id === user.id) {
        return user;
      }
      return item;
    })
    return {data: user};
  });

  this.patch('/teams/:id', (db, request) => {
    const team = JSON.parse(request.requestBody).data;
    teams = teams.map(item => {
      if (item.id === team.id) {
        return team;
      }
      return item;
    })
    return {data: team};
  });

  this.post('/users', (db, request) => {
    let user = JSON.parse(request.requestBody).data;
    user.attributes.name = 'Some name';
    user.attributes.created = new Date().getTime();
    user.attributes.enabled = false;
    user.attributes.team = null;
    user.id = (`${user.attributes.name} ${index++}`).replace(/\s+/g, '-').toLowerCase();

    users = [...users, user];
    return {data: user};
  });

  this.post('/teams', (db, request) => {
    const team = JSON.parse(request.requestBody).data;
    team.id = team.attributes.name.replace(/\s+/g, '-').toLowerCase();

    teams = [...teams, team];
    return {data: team};
  });

  this.del('/users/:id', (db, request) => {
    users = users.filter(user => request.params.id !== user.id);
    return {};
  });

  this.del('/teams/:id', (db, request) => {
    teams = teams.filter(team => request.params.id !== team.id);
    return {};
  });
}
