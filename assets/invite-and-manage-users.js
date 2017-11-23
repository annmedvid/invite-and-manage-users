"use strict";



define('invite-and-manage-users/adapters/application', ['exports', 'ember-data'], function (exports, _emberData) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _emberData.default.JSONAPIAdapter.extend({
    namespace: 'api'
  });
});
define('invite-and-manage-users/app', ['exports', 'invite-and-manage-users/resolver', 'ember-load-initializers', 'invite-and-manage-users/config/environment'], function (exports, _resolver, _emberLoadInitializers, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  var Application = Ember.Application;


  var App = Application.extend({
    modulePrefix: _environment.default.modulePrefix,
    podModulePrefix: _environment.default.podModulePrefix,
    Resolver: _resolver.default
  });

  (0, _emberLoadInitializers.default)(App, _environment.default.modulePrefix);

  exports.default = App;
});
define('invite-and-manage-users/components/basic-dropdown', ['exports', 'ember-basic-dropdown/components/basic-dropdown'], function (exports, _basicDropdown) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _basicDropdown.default;
    }
  });
});
define('invite-and-manage-users/components/basic-dropdown/content-element', ['exports', 'ember-basic-dropdown/components/basic-dropdown/content-element'], function (exports, _contentElement) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _contentElement.default;
    }
  });
});
define('invite-and-manage-users/components/basic-dropdown/content', ['exports', 'ember-basic-dropdown/components/basic-dropdown/content'], function (exports, _content) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _content.default;
    }
  });
});
define('invite-and-manage-users/components/basic-dropdown/trigger', ['exports', 'ember-basic-dropdown/components/basic-dropdown/trigger'], function (exports, _trigger) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _trigger.default;
    }
  });
});
define('invite-and-manage-users/components/button-link', ['exports'], function (exports) {
	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	var Component = Ember.Component;
	exports.default = Component.extend({
		tagName: 'button'
	});
});
define('invite-and-manage-users/components/ember-wormhole', ['exports', 'ember-wormhole/components/ember-wormhole'], function (exports, _emberWormhole) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _emberWormhole.default;
    }
  });
});
define('invite-and-manage-users/components/list-filter', ['exports'], function (exports) {
	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	var Component = Ember.Component;
	exports.default = Component.extend({
		tagName: 'ul',
		classNames: ['content-users'],
		team: '',

		init: function init() {
			var _this = this;

			this._super.apply(this, arguments);
			this.get('filter')(this.param).then(function (users) {
				return _this.set('users', users);
			});
		},
		didUpdateAttrs: function didUpdateAttrs() {
			var _this2 = this;

			this.get('filter')(this.param).then(function (users) {
				return _this2.set('users', users);
			});
		},


		actions: {
			addUserToTeam: function addUserToTeam(user) {
				this.set('team', this.param);
				var params = [{
					name: 'team',
					value: this.team
				}];
				this.sendAction('editUser', { id: user.id, params: params });
			},
			removeUserFromTeam: function removeUserFromTeam(user) {
				this.set('team', null);
				var params = [{
					name: 'team',
					value: this.team
				}];
				this.sendAction('editUser', { id: user.id, params: params });
			}
		}
	});
});
define('invite-and-manage-users/components/list-header', ['exports'], function (exports) {
	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	var Component = Ember.Component;
	exports.default = Component.extend({
		tagName: 'header',
		classNames: ['content-header'],
		hasQuantity: false,

		init: function init() {
			this._super.apply(this, arguments);
			if (this.items && this.items.modelName === 'user') {
				var quantity = this.items.content.length;
				this.set('hasQuantity', true);
				this.set('quantity', quantity);
			}
		},
		willUpdate: function willUpdate() {
			if (this.items && this.items.modelName === 'user') {
				var quantity = this.items.content.length;
				this.set('hasQuantity', true);
				this.set('quantity', quantity);
			}
		}
	});
});
define('invite-and-manage-users/components/list-table', ['exports'], function (exports) {
	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	var Component = Ember.Component;
	exports.default = Component.extend({
		tagName: 'table',
		classNames: ['content-table'],

		actions: {
			editUser: function editUser(item) {
				this.sendAction('editUser', item);
			},
			editTeam: function editTeam(item) {
				this.sendAction('editTeam', item);
			},
			deleteUser: function deleteUser(item) {
				this.sendAction('deleteUser', item);
			},
			deleteTeam: function deleteTeam(item) {
				this.sendAction('deleteTeam', item);
			}
		}
	});
});
define('invite-and-manage-users/components/main-navigation', ['exports'], function (exports) {
	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	var Component = Ember.Component;
	exports.default = Component.extend({
		tagName: 'nav',
		classNames: ['app-navigation']
	});
});
define('invite-and-manage-users/components/power-select-multiple', ['exports', 'ember-power-select/components/power-select-multiple'], function (exports, _powerSelectMultiple) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _powerSelectMultiple.default;
    }
  });
});
define('invite-and-manage-users/components/power-select-multiple/trigger', ['exports', 'ember-power-select/components/power-select-multiple/trigger'], function (exports, _trigger) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _trigger.default;
    }
  });
});
define('invite-and-manage-users/components/power-select', ['exports', 'ember-power-select/components/power-select'], function (exports, _powerSelect) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _powerSelect.default;
    }
  });
});
define('invite-and-manage-users/components/power-select/before-options', ['exports', 'ember-power-select/components/power-select/before-options'], function (exports, _beforeOptions) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _beforeOptions.default;
    }
  });
});
define('invite-and-manage-users/components/power-select/options', ['exports', 'ember-power-select/components/power-select/options'], function (exports, _options) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _options.default;
    }
  });
});
define('invite-and-manage-users/components/power-select/placeholder', ['exports', 'ember-power-select/components/power-select/placeholder'], function (exports, _placeholder) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _placeholder.default;
    }
  });
});
define('invite-and-manage-users/components/power-select/power-select-group', ['exports', 'ember-power-select/components/power-select/power-select-group'], function (exports, _powerSelectGroup) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _powerSelectGroup.default;
    }
  });
});
define('invite-and-manage-users/components/power-select/search-message', ['exports', 'ember-power-select/components/power-select/search-message'], function (exports, _searchMessage) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _searchMessage.default;
    }
  });
});
define('invite-and-manage-users/components/power-select/trigger', ['exports', 'ember-power-select/components/power-select/trigger'], function (exports, _trigger) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _trigger.default;
    }
  });
});
define('invite-and-manage-users/components/table-team', ['exports'], function (exports) {
	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	var Component = Ember.Component;


	var options = ['blue', 'yellow', 'pink', 'green', 'violet'];

	exports.default = Component.extend({
		tagName: 'tr',
		classNames: ['table-item'],
		isEditable: false,
		name: '',
		description: '',
		color: '',
		userQuantity: '',
		options: options,
		selected: '',

		init: function init() {
			var _this = this;

			this._super.apply(this, arguments);
			var quantity = this.users.filter(function (user) {
				return user.data.team === _this.item.data.name;
			}).length;
			this.set('selected', options.filter(function (option) {
				return _this.item.data.color === option;
			})[0]);
			this.set('userQuantity', quantity + ' member' + (quantity > 1 ? 's' : ''));
		},


		actions: {
			updateName: function updateName(value) {
				this.set('name', value);
			},
			updateDescription: function updateDescription(value) {
				this.set('description', value);
			},
			updateColor: function updateColor(value) {
				this.set('selected', value);
				this.set('color', value);
			},
			editItem: function editItem(item) {
				var _this2 = this;

				if (this.isEditable) {
					var params = [];
					['name', 'description', 'color'].forEach(function (param) {
						if (_this2[param]) {
							params.push({
								name: param,
								value: _this2[param]
							});
						}
					});

					this.set('name', '');
					this.set('description', '');
					this.set('color', '');
					this.sendAction('editTeam', { id: item.id, params: params });
				}
				this.toggleProperty('isEditable');
			},
			deleteItem: function deleteItem(item) {
				this.sendAction('deleteTeam', item);
			}
		}
	});
});
define('invite-and-manage-users/components/table-user', ['exports'], function (exports) {
	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	var Component = Ember.Component;


	var optionsStatus = [{
		value: true,
		title: 'Enabled'
	}, {
		value: false,
		title: 'Disabled'
	}];

	var optionsRole = ['admin', 'helpdesk', 'engineer', 'finance', 'other'];

	exports.default = Component.extend({
		tagName: 'tr',
		isEditable: false,
		name: '',
		email: '',
		enabled: '',
		role: '',
		optionsStatus: optionsStatus,
		optionsRole: optionsRole,

		init: function init() {
			var _this = this;

			this._super.apply(this, arguments);
			this.set('selectedStatus', optionsStatus.filter(function (option) {
				return _this.item.data.enabled === option.value;
			})[0]);
			this.set('selectedRole', optionsRole.filter(function (option) {
				return _this.item.data.role === option;
			})[0]);
		},


		actions: {
			updateName: function updateName(value) {
				this.set('name', value);
			},
			updateEmail: function updateEmail(value) {
				this.set('email', value);
			},
			updateEnabled: function updateEnabled(value) {
				this.set('selectedStatus', value);
				this.set('enabled', value.value);
			},
			updateRole: function updateRole(value) {
				this.set('selectedRole', value);
				this.set('role', value);
			},
			editItem: function editItem(item) {
				var _this2 = this;

				if (this.isEditable) {
					var params = [];
					['name', 'email', 'enabled', 'role'].forEach(function (param) {
						if (_this2[param] !== '') {
							params.push({
								name: param,
								value: _this2[param]
							});
						}
					});

					this.set('name', '');
					this.set('email', '');
					this.set('enabled', '');
					this.set('role', '');
					this.sendAction('editUser', { id: item.id, params: params });
				}
				this.toggleProperty('isEditable');
			},
			deleteItem: function deleteItem(item) {
				this.sendAction('deleteUser', item);
			}
		}
	});
});
define('invite-and-manage-users/components/welcome-page', ['exports', 'ember-welcome-page/components/welcome-page'], function (exports, _welcomePage) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _welcomePage.default;
    }
  });
});
define('invite-and-manage-users/controllers/teams/index', ['exports'], function (exports) {
	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	var Controller = Ember.Controller;
	exports.default = Controller.extend({
		actions: {
			editTeam: function editTeam(data) {
				this.get('store').find('team', data.id).then(function (team) {
					data.params.forEach(function (param) {
						return team.set(param.name, param.value);
					});
					team.save();
				});
			},
			deleteTeam: function deleteTeam(item) {
				var self = this;
				var confirmation = confirm("Are you sure to delete?");
				if (confirmation) {
					this.get('store').find('team', item.id).then(function (team) {
						return team.destroyRecord();
					}).then(function () {
						return self.transitionToRoute('teams');
					});
				}
			}
		}
	});
});
define('invite-and-manage-users/controllers/teams/new', ['exports'], function (exports) {
	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	var Controller = Ember.Controller;


	var options = ['blue', 'yellow', 'pink', 'green', 'violet'];

	exports.default = Controller.extend({
		team: {},
		options: options,

		actions: {
			updateColor: function updateColor(value) {
				this.set('team.color', value);
			},
			addTeam: function addTeam() {
				var _this = this;

				var self = this;
				var team = this.get('team');

				if (team.name && team.description && team.color) {
					var newTeam = this.get('store').createRecord('team', team);
					newTeam.save().then(function () {
						return _this.set('team', {});
					}).then(function () {
						return self.transitionToRoute('teams');
					});
				}
			},
			onCancel: function onCancel() {
				this.set('team', {});
				this.transitionToRoute('teams');
			}
		}
	});
});
define('invite-and-manage-users/controllers/teams/team', ['exports'], function (exports) {
	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	var Controller = Ember.Controller;
	exports.default = Controller.extend({
		actions: {
			filterByIn: function filterByIn(param) {
				if (param !== '') {
					var search = {
						context: 'in',
						team: param
					};
					return this.get('store').query('user', search);
				} else {
					return this.get('store').findAll('user');
				}
			},
			filterByOut: function filterByOut(param) {
				if (param !== '') {
					var search = {
						context: 'out',
						team: param
					};
					return this.get('store').query('user', search);
				} else {
					return this.get('store').findAll('user');
				}
			},
			editUser: function editUser(data) {
				var self = this;
				this.get('store').find('user', data.id).then(function (user) {
					data.params.forEach(function (param) {
						return user.set(param.name, param.value);
					});
					user.save().then(function () {
						return self.target._routerMicrolib.refresh();
					});
				});
			}
		}
	});
});
define('invite-and-manage-users/controllers/users/index', ['exports'], function (exports) {
	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	var Controller = Ember.Controller;
	exports.default = Controller.extend({
		actions: {
			editUser: function editUser(data) {
				this.get('store').find('user', data.id).then(function (user) {
					data.params.forEach(function (param) {
						return user.set(param.name, param.value);
					});
					user.save();
				});
			},
			deleteUser: function deleteUser(item) {
				var self = this;
				var confirmation = confirm("Are you sure to delete?");
				if (confirmation) {
					this.get('store').find('user', item.id).then(function (user) {
						return user.destroyRecord();
					}).then(function () {
						return self.transitionToRoute('users');
					});
				}
			}
		}
	});
});
define('invite-and-manage-users/controllers/users/new', ['exports'], function (exports) {
	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	var Controller = Ember.Controller;


	var options = ['admin', 'helpdesk', 'engineer', 'finance', 'other'];

	exports.default = Controller.extend({
		user: {},
		options: options,

		actions: {
			updateRole: function updateRole(value) {
				this.set('user.role', value);
			},
			inviteUser: function inviteUser() {
				var _this = this;

				var self = this;
				var user = this.get('user');

				if (user.email && user.role) {
					var newUser = this.get('store').createRecord('user', user);
					newUser.save().then(function () {
						return _this.set('user', {});
					}).then(function () {
						return self.transitionToRoute('users');
					});
				}
			},
			onCancel: function onCancel() {
				this.set('user', {});
				this.transitionToRoute('users');
			}
		}
	});
});
define('invite-and-manage-users/helpers/and', ['exports', 'ember-truth-helpers/helpers/and'], function (exports, _and) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _and.default;
    }
  });
  Object.defineProperty(exports, 'and', {
    enumerable: true,
    get: function () {
      return _and.and;
    }
  });
});
define('invite-and-manage-users/helpers/app-version', ['exports', 'invite-and-manage-users/config/environment', 'ember-cli-app-version/utils/regexp'], function (exports, _environment, _regexp) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.appVersion = appVersion;
  var version = _environment.default.APP.version;
  function appVersion(_) {
    var hash = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    if (hash.hideSha) {
      return version.match(_regexp.versionRegExp)[0];
    }

    if (hash.hideVersion) {
      return version.match(_regexp.shaRegExp)[0];
    }

    return version;
  }

  exports.default = Ember.Helper.helper(appVersion);
});
define('invite-and-manage-users/helpers/cancel-all', ['exports', 'ember-concurrency/-helpers'], function (exports, _helpers) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.cancelHelper = cancelHelper;


  var CANCEL_REASON = "the 'cancel-all' template helper was invoked";

  function cancelHelper(args) {
    var cancelable = args[0];
    if (!cancelable || typeof cancelable.cancelAll !== 'function') {
      Ember.assert('The first argument passed to the `cancel-all` helper should be a Task or TaskGroup (without quotes); you passed ' + cancelable, false);
    }

    return (0, _helpers.taskHelperClosure)('cancel-all', 'cancelAll', [cancelable, CANCEL_REASON]);
  }

  exports.default = Ember.Helper.helper(cancelHelper);
});
define('invite-and-manage-users/helpers/ember-power-select-is-group', ['exports', 'ember-power-select/helpers/ember-power-select-is-group'], function (exports, _emberPowerSelectIsGroup) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _emberPowerSelectIsGroup.default;
    }
  });
  Object.defineProperty(exports, 'emberPowerSelectIsGroup', {
    enumerable: true,
    get: function () {
      return _emberPowerSelectIsGroup.emberPowerSelectIsGroup;
    }
  });
});
define('invite-and-manage-users/helpers/ember-power-select-is-selected', ['exports', 'ember-power-select/helpers/ember-power-select-is-selected'], function (exports, _emberPowerSelectIsSelected) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _emberPowerSelectIsSelected.default;
    }
  });
  Object.defineProperty(exports, 'emberPowerSelectIsSelected', {
    enumerable: true,
    get: function () {
      return _emberPowerSelectIsSelected.emberPowerSelectIsSelected;
    }
  });
});
define('invite-and-manage-users/helpers/ember-power-select-true-string-if-present', ['exports', 'ember-power-select/helpers/ember-power-select-true-string-if-present'], function (exports, _emberPowerSelectTrueStringIfPresent) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _emberPowerSelectTrueStringIfPresent.default;
    }
  });
  Object.defineProperty(exports, 'emberPowerSelectTrueStringIfPresent', {
    enumerable: true,
    get: function () {
      return _emberPowerSelectTrueStringIfPresent.emberPowerSelectTrueStringIfPresent;
    }
  });
});
define('invite-and-manage-users/helpers/eq', ['exports', 'ember-truth-helpers/helpers/equal'], function (exports, _equal) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _equal.default;
    }
  });
  Object.defineProperty(exports, 'equal', {
    enumerable: true,
    get: function () {
      return _equal.equal;
    }
  });
});
define('invite-and-manage-users/helpers/get-color', ['exports'], function (exports) {
	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.getColor = getColor;

	var _slicedToArray = function () {
		function sliceIterator(arr, i) {
			var _arr = [];
			var _n = true;
			var _d = false;
			var _e = undefined;

			try {
				for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
					_arr.push(_s.value);

					if (i && _arr.length === i) break;
				}
			} catch (err) {
				_d = true;
				_e = err;
			} finally {
				try {
					if (!_n && _i["return"]) _i["return"]();
				} finally {
					if (_d) throw _e;
				}
			}

			return _arr;
		}

		return function (arr, i) {
			if (Array.isArray(arr)) {
				return arr;
			} else if (Symbol.iterator in Object(arr)) {
				return sliceIterator(arr, i);
			} else {
				throw new TypeError("Invalid attempt to destructure non-iterable instance");
			}
		};
	}();

	var helper = Ember.Helper.helper;
	function getColor(_ref) {
		var _ref2 = _slicedToArray(_ref, 2),
		    item = _ref2[0],
		    teams = _ref2[1];

		var team = teams.filter(function (team) {
			return team.data.name === item.data.team;
		})[0];

		if (team) {
			return 'table-item ' + team.data.color;
		}

		return 'table-item none';
	}

	exports.default = helper(getColor);
});
define('invite-and-manage-users/helpers/gt', ['exports', 'ember-truth-helpers/helpers/gt'], function (exports, _gt) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _gt.default;
    }
  });
  Object.defineProperty(exports, 'gt', {
    enumerable: true,
    get: function () {
      return _gt.gt;
    }
  });
});
define('invite-and-manage-users/helpers/gte', ['exports', 'ember-truth-helpers/helpers/gte'], function (exports, _gte) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _gte.default;
    }
  });
  Object.defineProperty(exports, 'gte', {
    enumerable: true,
    get: function () {
      return _gte.gte;
    }
  });
});
define('invite-and-manage-users/helpers/is-array', ['exports', 'ember-truth-helpers/helpers/is-array'], function (exports, _isArray) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _isArray.default;
    }
  });
  Object.defineProperty(exports, 'isArray', {
    enumerable: true,
    get: function () {
      return _isArray.isArray;
    }
  });
});
define('invite-and-manage-users/helpers/is-equal', ['exports', 'ember-truth-helpers/helpers/is-equal'], function (exports, _isEqual) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _isEqual.default;
    }
  });
  Object.defineProperty(exports, 'isEqual', {
    enumerable: true,
    get: function () {
      return _isEqual.isEqual;
    }
  });
});
define('invite-and-manage-users/helpers/lt', ['exports', 'ember-truth-helpers/helpers/lt'], function (exports, _lt) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _lt.default;
    }
  });
  Object.defineProperty(exports, 'lt', {
    enumerable: true,
    get: function () {
      return _lt.lt;
    }
  });
});
define('invite-and-manage-users/helpers/lte', ['exports', 'ember-truth-helpers/helpers/lte'], function (exports, _lte) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _lte.default;
    }
  });
  Object.defineProperty(exports, 'lte', {
    enumerable: true,
    get: function () {
      return _lte.lte;
    }
  });
});
define('invite-and-manage-users/helpers/not-eq', ['exports', 'ember-truth-helpers/helpers/not-equal'], function (exports, _notEqual) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _notEqual.default;
    }
  });
  Object.defineProperty(exports, 'notEq', {
    enumerable: true,
    get: function () {
      return _notEqual.notEq;
    }
  });
});
define('invite-and-manage-users/helpers/not', ['exports', 'ember-truth-helpers/helpers/not'], function (exports, _not) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _not.default;
    }
  });
  Object.defineProperty(exports, 'not', {
    enumerable: true,
    get: function () {
      return _not.not;
    }
  });
});
define('invite-and-manage-users/helpers/or', ['exports', 'ember-truth-helpers/helpers/or'], function (exports, _or) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _or.default;
    }
  });
  Object.defineProperty(exports, 'or', {
    enumerable: true,
    get: function () {
      return _or.or;
    }
  });
});
define('invite-and-manage-users/helpers/perform', ['exports', 'ember-concurrency/-helpers'], function (exports, _helpers) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.performHelper = performHelper;
  function performHelper(args, hash) {
    return (0, _helpers.taskHelperClosure)('perform', 'perform', args, hash);
  }

  exports.default = Ember.Helper.helper(performHelper);
});
define('invite-and-manage-users/helpers/pluralize', ['exports', 'ember-inflector/lib/helpers/pluralize'], function (exports, _pluralize) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _pluralize.default;
});
define('invite-and-manage-users/helpers/singularize', ['exports', 'ember-inflector/lib/helpers/singularize'], function (exports, _singularize) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _singularize.default;
});
define('invite-and-manage-users/helpers/task', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  function _toConsumableArray(arr) {
    if (Array.isArray(arr)) {
      for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) {
        arr2[i] = arr[i];
      }

      return arr2;
    } else {
      return Array.from(arr);
    }
  }

  function _toArray(arr) {
    return Array.isArray(arr) ? arr : Array.from(arr);
  }

  function taskHelper(_ref) {
    var _ref2 = _toArray(_ref),
        task = _ref2[0],
        args = _ref2.slice(1);

    return task._curry.apply(task, _toConsumableArray(args));
  }

  exports.default = Ember.Helper.helper(taskHelper);
});
define('invite-and-manage-users/helpers/team-is-enabled', ['exports'], function (exports) {
	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.teamIsEnabled = teamIsEnabled;

	var _slicedToArray = function () {
		function sliceIterator(arr, i) {
			var _arr = [];
			var _n = true;
			var _d = false;
			var _e = undefined;

			try {
				for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
					_arr.push(_s.value);

					if (i && _arr.length === i) break;
				}
			} catch (err) {
				_d = true;
				_e = err;
			} finally {
				try {
					if (!_n && _i["return"]) _i["return"]();
				} finally {
					if (_d) throw _e;
				}
			}

			return _arr;
		}

		return function (arr, i) {
			if (Array.isArray(arr)) {
				return arr;
			} else if (Symbol.iterator in Object(arr)) {
				return sliceIterator(arr, i);
			} else {
				throw new TypeError("Invalid attempt to destructure non-iterable instance");
			}
		};
	}();

	var helper = Ember.Helper.helper;
	function teamIsEnabled(_ref) {
		var _ref2 = _slicedToArray(_ref, 2),
		    users = _ref2[0],
		    team = _ref2[1];

		var teamUsers = users.filter(function (user) {
			return user.data.team === team.data.name;
		}).filter(function (user) {
			return user.data.enabled;
		});
		var status = teamUsers.length ? 'yes' : 'no';
		return status;
	}

	exports.default = helper(teamIsEnabled);
});
define('invite-and-manage-users/helpers/user-created', ['exports'], function (exports) {
	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.userCreated = userCreated;

	var _slicedToArray = function () {
		function sliceIterator(arr, i) {
			var _arr = [];
			var _n = true;
			var _d = false;
			var _e = undefined;

			try {
				for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
					_arr.push(_s.value);

					if (i && _arr.length === i) break;
				}
			} catch (err) {
				_d = true;
				_e = err;
			} finally {
				try {
					if (!_n && _i["return"]) _i["return"]();
				} finally {
					if (_d) throw _e;
				}
			}

			return _arr;
		}

		return function (arr, i) {
			if (Array.isArray(arr)) {
				return arr;
			} else if (Symbol.iterator in Object(arr)) {
				return sliceIterator(arr, i);
			} else {
				throw new TypeError("Invalid attempt to destructure non-iterable instance");
			}
		};
	}();

	var helper = Ember.Helper.helper;


	var months = ['Janury', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

	var addZero = function addZero(number) {
		if (number < 10) number = '0' + number;
		return number;
	};

	function userCreated(_ref) {
		var _ref2 = _slicedToArray(_ref, 1),
		    created = _ref2[0];

		var date = new Date(created);

		return months[date.getUTCMonth()] + ' ' + date.getUTCDate() + ', ' + date.getUTCFullYear() + ' ' + addZero(date.getHours()) + ':' + addZero(date.getMinutes()) + ':' + addZero(date.getSeconds());
	}

	exports.default = helper(userCreated);
});
define('invite-and-manage-users/helpers/xor', ['exports', 'ember-truth-helpers/helpers/xor'], function (exports, _xor) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _xor.default;
    }
  });
  Object.defineProperty(exports, 'xor', {
    enumerable: true,
    get: function () {
      return _xor.xor;
    }
  });
});
define('invite-and-manage-users/initializers/app-version', ['exports', 'ember-cli-app-version/initializer-factory', 'invite-and-manage-users/config/environment'], function (exports, _initializerFactory, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  var _config$APP = _environment.default.APP,
      name = _config$APP.name,
      version = _config$APP.version;
  exports.default = {
    name: 'App Version',
    initialize: (0, _initializerFactory.default)(name, version)
  };
});
define('invite-and-manage-users/initializers/container-debug-adapter', ['exports', 'ember-resolver/resolvers/classic/container-debug-adapter'], function (exports, _containerDebugAdapter) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    name: 'container-debug-adapter',

    initialize: function initialize() {
      var app = arguments[1] || arguments[0];

      app.register('container-debug-adapter:main', _containerDebugAdapter.default);
      app.inject('container-debug-adapter:main', 'namespace', 'application:main');
    }
  };
});
define('invite-and-manage-users/initializers/data-adapter', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    name: 'data-adapter',
    before: 'store',
    initialize: function initialize() {}
  };
});
define('invite-and-manage-users/initializers/ember-cli-mirage', ['exports', 'ember-cli-mirage/utils/read-modules', 'invite-and-manage-users/config/environment', 'invite-and-manage-users/mirage/config', 'ember-cli-mirage/server', 'lodash/assign'], function (exports, _readModules, _environment, _config, _server, _assign2) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.startMirage = startMirage;
  var getWithDefault = Ember.getWithDefault;
  exports.default = {
    name: 'ember-cli-mirage',
    initialize: function initialize() {
      if (_shouldUseMirage(_environment.default.environment, _environment.default['ember-cli-mirage'])) {
        startMirage(_environment.default);
      }
    }
  };
  function startMirage() {
    var env = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _environment.default;

    var environment = env.environment;
    var discoverEmberDataModels = getWithDefault(env['ember-cli-mirage'] || {}, 'discoverEmberDataModels', true);
    var modules = (0, _readModules.default)(env.modulePrefix);
    var options = (0, _assign2.default)(modules, { environment: environment, baseConfig: _config.default, testConfig: _config.testConfig, discoverEmberDataModels: discoverEmberDataModels });

    return new _server.default(options);
  }

  function _shouldUseMirage(env, addonConfig) {
    if (typeof FastBoot !== 'undefined') {
      return false;
    }
    var userDeclaredEnabled = typeof addonConfig.enabled !== 'undefined';
    var defaultEnabled = _defaultEnabled(env, addonConfig);

    return userDeclaredEnabled ? addonConfig.enabled : defaultEnabled;
  }

  /*
    Returns a boolean specifying the default behavior for whether
    to initialize Mirage.
  */
  function _defaultEnabled(env, addonConfig) {
    var usingInDev = env === 'development' && !addonConfig.usingProxy;
    var usingInTest = env === 'test';

    return usingInDev || usingInTest;
  }
});
define('invite-and-manage-users/initializers/ember-concurrency', ['exports', 'ember-concurrency'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    name: 'ember-concurrency',
    initialize: function initialize() {}
  };
});
define('invite-and-manage-users/initializers/ember-data', ['exports', 'ember-data/setup-container', 'ember-data'], function (exports, _setupContainer) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    name: 'ember-data',
    initialize: _setupContainer.default
  };
});
define('invite-and-manage-users/initializers/export-application-global', ['exports', 'invite-and-manage-users/config/environment'], function (exports, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.initialize = initialize;
  function initialize() {
    var application = arguments[1] || arguments[0];
    if (_environment.default.exportApplicationGlobal !== false) {
      var theGlobal;
      if (typeof window !== 'undefined') {
        theGlobal = window;
      } else if (typeof global !== 'undefined') {
        theGlobal = global;
      } else if (typeof self !== 'undefined') {
        theGlobal = self;
      } else {
        // no reasonable global, just bail
        return;
      }

      var value = _environment.default.exportApplicationGlobal;
      var globalName;

      if (typeof value === 'string') {
        globalName = value;
      } else {
        globalName = Ember.String.classify(_environment.default.modulePrefix);
      }

      if (!theGlobal[globalName]) {
        theGlobal[globalName] = application;

        application.reopen({
          willDestroy: function willDestroy() {
            this._super.apply(this, arguments);
            delete theGlobal[globalName];
          }
        });
      }
    }
  }

  exports.default = {
    name: 'export-application-global',

    initialize: initialize
  };
});
define('invite-and-manage-users/initializers/injectStore', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    name: 'injectStore',
    before: 'store',
    initialize: function initialize() {}
  };
});
define('invite-and-manage-users/initializers/store', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    name: 'store',
    after: 'ember-data',
    initialize: function initialize() {}
  };
});
define('invite-and-manage-users/initializers/transforms', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    name: 'transforms',
    before: 'store',
    initialize: function initialize() {}
  };
});
define("invite-and-manage-users/instance-initializers/ember-data", ["exports", "ember-data/instance-initializers/initialize-store-service"], function (exports, _initializeStoreService) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    name: "ember-data",
    initialize: _initializeStoreService.default
  };
});
define('invite-and-manage-users/mirage/config', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  exports.default = function () {
    this.namespace = '/api';

    var users = [{
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
    }, {
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
    }, {
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
    }, {
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
    }];

    var teams = [{
      type: 'teams',
      id: 'support',
      attributes: {
        name: 'support',
        description: 'team of support engineers',
        color: 'blue'
      }
    }, {
      type: 'teams',
      id: 'sales',
      attributes: {
        name: 'sales',
        description: 'sales team',
        color: 'yellow'
      }
    }];

    this.get('/users', function (db, request) {
      if (request.queryParams.team !== undefined) {
        var filteredUsers = [];
        if (request.queryParams.context === 'in') {
          filteredUsers = users.filter(function (user) {
            return user.attributes.team === request.queryParams.team;
          });
        }
        if (request.queryParams.context === 'out') {
          filteredUsers = users.filter(function (user) {
            return user.attributes.team !== request.queryParams.team;
          });
        }
        return { data: filteredUsers };
      }
      return { data: users };
    });

    this.get('/teams', function () {
      return { data: teams };
    });

    this.get('/users/:id', function (db, request) {
      var user = users.filter(function (user) {
        return request.params.id === user.id;
      })[0];
      return { data: user || {} };
    });

    this.get('/teams/:id', function (db, request) {
      var team = teams.filter(function (team) {
        return request.params.id === team.id;
      })[0];
      return { data: team || {} };
    });

    this.patch('/users/:id', function (db, request) {
      var user = JSON.parse(request.requestBody).data;
      users = users.map(function (item) {
        if (item.id === user.id) {
          return user;
        }
        return item;
      });
      return { data: user };
    });

    this.patch('/teams/:id', function (db, request) {
      var team = JSON.parse(request.requestBody).data;
      teams = teams.map(function (item) {
        if (item.id === team.id) {
          return team;
        }
        return item;
      });
      return { data: team };
    });

    this.post('/users', function (db, request) {
      var user = JSON.parse(request.requestBody).data;
      user.attributes.name = 'Some name';
      user.attributes.created = new Date().getTime();
      user.attributes.enabled = false;
      user.attributes.team = null;
      user.id = (user.attributes.name + ' ' + index++).replace(/\s+/g, '-').toLowerCase();

      users = [].concat(_toConsumableArray(users), [user]);
      return { data: user };
    });

    this.post('/teams', function (db, request) {
      var team = JSON.parse(request.requestBody).data;
      team.id = team.attributes.name.replace(/\s+/g, '-').toLowerCase();

      teams = [].concat(_toConsumableArray(teams), [team]);
      return { data: team };
    });

    this.del('/users/:id', function (db, request) {
      users = users.filter(function (user) {
        return request.params.id !== user.id;
      });
      return {};
    });

    this.del('/teams/:id', function (db, request) {
      teams = teams.filter(function (team) {
        return request.params.id !== team.id;
      });
      return {};
    });
  };

  function _toConsumableArray(arr) {
    if (Array.isArray(arr)) {
      for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) {
        arr2[i] = arr[i];
      }

      return arr2;
    } else {
      return Array.from(arr);
    }
  }

  var index = 1;
});
define("invite-and-manage-users/mirage/scenarios/default", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  exports.default = function () /* server */{

    /*
      Seed your development database using your factories.
      This data will not be loaded in your tests.
    */

    // server.createList('post', 10);
  };
});
define('invite-and-manage-users/mirage/serializers/application', ['exports', 'ember-cli-mirage'], function (exports, _emberCliMirage) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _emberCliMirage.JSONAPISerializer.extend({});
});
define('invite-and-manage-users/models/team', ['exports', 'ember-data'], function (exports, _emberData) {
	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.default = _emberData.default.Model.extend({
		name: _emberData.default.attr(),
		description: _emberData.default.attr(),
		color: _emberData.default.attr()
	});
});
define('invite-and-manage-users/models/user', ['exports', 'ember-data'], function (exports, _emberData) {
	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.default = _emberData.default.Model.extend({
		name: _emberData.default.attr(),
		email: _emberData.default.attr(),
		created: _emberData.default.attr(),
		enabled: _emberData.default.attr(),
		role: _emberData.default.attr(),
		team: _emberData.default.attr()
	});
});
define('invite-and-manage-users/resolver', ['exports', 'ember-resolver'], function (exports, _emberResolver) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _emberResolver.default;
});
define('invite-and-manage-users/router', ['exports', 'invite-and-manage-users/config/environment'], function (exports, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  var EmberRouter = Ember.Router;


  var Router = EmberRouter.extend({
    location: _environment.default.locationType,
    rootURL: _environment.default.rootURL
  });

  Router.map(function () {
    this.route('users', function () {
      this.route('new', { path: '/new' });
      this.route('user', { path: '/:user_id' });
    });
    this.route('teams', function () {
      this.route('new', { path: '/new' });
      this.route('team', { path: '/:team_id' });
    });
  });

  exports.default = Router;
});
define('invite-and-manage-users/routes/index', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  var Route = Ember.Route;
  exports.default = Route.extend({
    beforeModel: function beforeModel() {
      this.replaceWith('users');
    }
  });
});
define('invite-and-manage-users/routes/teams', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  var Route = Ember.Route;
  exports.default = Route.extend({});
});
define('invite-and-manage-users/routes/teams/index', ['exports'], function (exports) {
	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	var Route = Ember.Route;
	var RSVP = Ember.RSVP;
	exports.default = Route.extend({
		model: function model() {
			return RSVP.hash({
				teams: this.get('store').findAll('team'),
				users: this.get('store').findAll('user')
			});
		}
	});
});
define('invite-and-manage-users/routes/teams/new', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  var Route = Ember.Route;
  exports.default = Route.extend({});
});
define('invite-and-manage-users/routes/teams/team', ['exports'], function (exports) {
	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	var Route = Ember.Route;
	var RSVP = Ember.RSVP;
	exports.default = Route.extend({
		model: function model(params) {
			return RSVP.hash({
				team: this.get('store').findRecord('team', params.team_id),
				users: this.get('store').findAll('user')
			});
		}
	});
});
define('invite-and-manage-users/routes/users', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  var Route = Ember.Route;
  exports.default = Route.extend({});
});
define('invite-and-manage-users/routes/users/index', ['exports'], function (exports) {
	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	var Route = Ember.Route;
	var RSVP = Ember.RSVP;
	exports.default = Route.extend({
		model: function model() {
			return RSVP.hash({
				users: this.get('store').findAll('user'),
				teams: this.get('store').findAll('team')
			});
		}
	});
});
define('invite-and-manage-users/routes/users/new', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  var Route = Ember.Route;
  exports.default = Route.extend({});
});
define('invite-and-manage-users/routes/users/user', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  var Route = Ember.Route;
  exports.default = Route.extend({
    model: function model(params) {
      return this.get('store').findRecord('user', params.user_id);
    }
  });
});
define('invite-and-manage-users/services/ajax', ['exports', 'ember-ajax/services/ajax'], function (exports, _ajax) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _ajax.default;
    }
  });
});
define('invite-and-manage-users/services/text-measurer', ['exports', 'ember-text-measurer/services/text-measurer'], function (exports, _textMeasurer) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _textMeasurer.default;
    }
  });
});
define("invite-and-manage-users/templates/application", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "hEp0lCfr", "block": "{\"symbols\":[],\"statements\":[[6,\"header\"],[9,\"class\",\"app-header\"],[7],[0,\"\\n\\t\"],[6,\"h1\"],[9,\"class\",\"app-title\"],[7],[0,\"Company Name\"],[8],[0,\"\\n\\n\\t\"],[1,[18,\"main-navigation\"],false],[0,\"\\n\"],[8],[0,\"\\n\"],[6,\"main\"],[9,\"class\",\"app-content\"],[7],[0,\"\\n\\t\"],[1,[18,\"outlet\"],false],[0,\"\\n\"],[8]],\"hasEval\":false}", "meta": { "moduleName": "invite-and-manage-users/templates/application.hbs" } });
});
define("invite-and-manage-users/templates/components/button-link", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "PxmOqalM", "block": "{\"symbols\":[],\"statements\":[[4,\"link-to\",[[20,[\"to\"]]],null,{\"statements\":[[0,\"\\t\"],[1,[18,\"text\"],false],[0,\"\\n\"]],\"parameters\":[]},null]],\"hasEval\":false}", "meta": { "moduleName": "invite-and-manage-users/templates/components/button-link.hbs" } });
});
define("invite-and-manage-users/templates/components/list-filter", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "pY1/Dc41", "block": "{\"symbols\":[\"user\"],\"statements\":[[6,\"h3\"],[7],[1,[18,\"title\"],false],[8],[0,\"\\n\"],[4,\"each\",[[20,[\"users\"]]],null,{\"statements\":[[0,\"\\t\"],[6,\"li\"],[7],[0,\"\\n\"],[4,\"if\",[[20,[\"isIn\"]]],null,{\"statements\":[[0,\"\\t\\t\\t\"],[6,\"button\"],[3,\"action\",[[19,0,[]],\"removeUserFromTeam\",[19,1,[]]]],[7],[0,\"-\"],[8],[0,\"\\n\"]],\"parameters\":[]},{\"statements\":[[0,\"\\t\\t\\t\"],[6,\"button\"],[3,\"action\",[[19,0,[]],\"addUserToTeam\",[19,1,[]]]],[7],[0,\"+\"],[8],[0,\"\\n\"]],\"parameters\":[]}],[0,\"\\t\\t\"],[6,\"p\"],[7],[0,\"\\n\\t\\t\\t\"],[1,[19,1,[\"name\"]],false],[0,\"\\n\\t\\t\\t\"],[6,\"span\"],[7],[0,\"(\"],[1,[19,1,[\"email\"]],false],[0,\")\"],[8],[0,\"\\n\\t\\t\"],[8],[0,\"\\n\\t\"],[8],[0,\"\\n\"]],\"parameters\":[1]},null]],\"hasEval\":false}", "meta": { "moduleName": "invite-and-manage-users/templates/components/list-filter.hbs" } });
});
define("invite-and-manage-users/templates/components/list-header", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "3sKpHmrz", "block": "{\"symbols\":[],\"statements\":[[6,\"h2\"],[7],[0,\"\\n\\t\"],[1,[18,\"title\"],false],[0,\"\\n\"],[4,\"if\",[[20,[\"hasQuantity\"]]],null,{\"statements\":[[0,\"\\t\\t\"],[6,\"span\"],[7],[0,\"(\"],[1,[18,\"quantity\"],false],[0,\" in total)\"],[8],[0,\"\\n\"]],\"parameters\":[]},null],[8],[0,\"\\n\\n\"],[1,[25,\"button-link\",null,[[\"to\",\"text\"],[[20,[\"to\"]],[20,[\"text\"]]]]],false]],\"hasEval\":false}", "meta": { "moduleName": "invite-and-manage-users/templates/components/list-header.hbs" } });
});
define("invite-and-manage-users/templates/components/list-table", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "mkyZOMax", "block": "{\"symbols\":[\"item\",\"item\"],\"statements\":[[1,[25,\"log\",[[20,[\"items\"]]],null],false],[0,\"\\n\"],[4,\"if\",[[20,[\"isUsers\"]]],null,{\"statements\":[[0,\"\\t\"],[6,\"tr\"],[7],[0,\"\\n\\t\\t\"],[6,\"th\"],[7],[0,\"user\"],[8],[0,\"\\n\\t\\t\"],[6,\"th\"],[7],[0,\"created\"],[8],[0,\"\\n\\t\\t\"],[6,\"th\"],[7],[0,\"enabled\"],[8],[0,\"\\n\\t\\t\"],[6,\"th\"],[7],[0,\"role\"],[8],[0,\"\\n\\t\\t\"],[6,\"th\"],[7],[8],[0,\"\\n\\t\"],[8],[0,\"\\n\"],[4,\"each\",[[20,[\"items\"]]],null,{\"statements\":[[0,\"\\t\\t\"],[1,[25,\"table-user\",null,[[\"item\",\"teams\",\"class\",\"editUser\",\"deleteUser\"],[[19,2,[]],[20,[\"teams\"]],[25,\"get-color\",[[19,2,[]],[20,[\"teams\"]]],null],[25,\"action\",[[19,0,[]],\"editUser\"],null],[25,\"action\",[[19,0,[]],\"deleteUser\"],null]]]],false],[0,\"\\n\"]],\"parameters\":[2]},null]],\"parameters\":[]},{\"statements\":[[0,\"\\t\"],[6,\"tr\"],[7],[0,\"\\n\\t\\t\"],[6,\"th\"],[7],[0,\"team\"],[8],[0,\"\\n\\t\\t\"],[6,\"th\"],[7],[0,\"enabled\"],[8],[0,\"\\n\\t\\t\"],[6,\"th\"],[7],[8],[0,\"\\n\\t\\t\"],[6,\"th\"],[7],[8],[0,\"\\n\\t\"],[8],[0,\"\\n\"],[4,\"each\",[[20,[\"items\"]]],null,{\"statements\":[[0,\"\\t\\t\"],[1,[25,\"table-team\",null,[[\"item\",\"users\",\"class\",\"editTeam\",\"deleteTeam\"],[[19,1,[]],[20,[\"users\"]],[19,1,[\"color\"]],[25,\"action\",[[19,0,[]],\"editTeam\"],null],[25,\"action\",[[19,0,[]],\"deleteTeam\"],null]]]],false],[0,\" \\n\"]],\"parameters\":[1]},null]],\"parameters\":[]}]],\"hasEval\":false}", "meta": { "moduleName": "invite-and-manage-users/templates/components/list-table.hbs" } });
});
define("invite-and-manage-users/templates/components/main-navigation", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "u8B/exxX", "block": "{\"symbols\":[],\"statements\":[[4,\"link-to\",[\"users\"],null,{\"statements\":[[0,\"  Users\\n\"]],\"parameters\":[]},null],[4,\"link-to\",[\"teams\"],null,{\"statements\":[[0,\"  Teams\\n\"]],\"parameters\":[]},null]],\"hasEval\":false}", "meta": { "moduleName": "invite-and-manage-users/templates/components/main-navigation.hbs" } });
});
define("invite-and-manage-users/templates/components/table-team", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "1/6Iirqz", "block": "{\"symbols\":[\"option\"],\"statements\":[[4,\"if\",[[20,[\"isEditable\"]]],null,{\"statements\":[[0,\"\\t\"],[6,\"td\"],[9,\"class\",\"name name-team\"],[7],[0,\"\\n\\t\\t\"],[1,[25,\"input\",null,[[\"value\",\"key-up\"],[[20,[\"item\",\"name\"]],\"updateName\"]]],false],[0,\"\\n\\t\\t\"],[1,[25,\"input\",null,[[\"value\",\"key-up\"],[[20,[\"item\",\"description\"]],\"updateDescription\"]]],false],[0,\"\\n\\t\\t\"],[6,\"p\"],[9,\"class\",\"users\"],[7],[1,[18,\"userQuantity\"],false],[8],[0,\"\\n\\t\"],[8],[0,\"\\n\\t\"],[6,\"td\"],[9,\"class\",\"enabled\"],[7],[0,\"\\n\\t\\t\"],[1,[25,\"team-is-enabled\",[[20,[\"users\"]],[20,[\"item\"]]],null],false],[0,\"\\n\\t\"],[8],[0,\"\\n\\t\"],[6,\"td\"],[9,\"class\",\"color\"],[7],[0,\"\\n\"],[4,\"power-select\",null,[[\"options\",\"selected\",\"onchange\"],[[20,[\"options\"]],[20,[\"selected\"]],[25,\"action\",[[19,0,[]],\"updateColor\"],null]]],{\"statements\":[[0,\"  \\t\\t\\t\"],[1,[19,1,[]],false],[0,\"\\n\"]],\"parameters\":[1]},null],[0,\"\\t\"],[8],[0,\"\\n\\t\"],[6,\"td\"],[9,\"class\",\"buttons\"],[7],[0,\"\\n\\t\\t\"],[6,\"button\"],[3,\"action\",[[19,0,[]],\"editItem\",[20,[\"item\"]]]],[7],[0,\"save\"],[8],[0,\"\\n\\t\"],[8],[0,\"\\n\"]],\"parameters\":[]},{\"statements\":[[0,\"\\t\"],[6,\"td\"],[9,\"class\",\"name name-team\"],[7],[0,\"\\n\"],[4,\"link-to\",[\"teams.team\",[20,[\"item\"]]],null,{\"statements\":[[0,\"\\t\\t\\t\"],[1,[20,[\"item\",\"name\"]],false],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"\\t\\t\"],[6,\"p\"],[9,\"class\",\"description\"],[7],[1,[20,[\"item\",\"description\"]],false],[8],[0,\"\\n\\t\\t\"],[6,\"p\"],[9,\"class\",\"users\"],[7],[1,[18,\"userQuantity\"],false],[8],[0,\"\\n\\t\"],[8],[0,\"\\n\\t\"],[6,\"td\"],[9,\"class\",\"enabled\"],[7],[0,\"\\n\\t\\t\"],[1,[25,\"team-is-enabled\",[[20,[\"users\"]],[20,[\"item\"]]],null],false],[0,\"\\n\\t\"],[8],[0,\"\\n\\t\"],[6,\"td\"],[9,\"class\",\"color\"],[7],[0,\"\\n\\t\"],[8],[0,\"\\n\\t\"],[6,\"td\"],[9,\"class\",\"buttons\"],[7],[0,\"\\n\\t\\t\"],[6,\"button\"],[3,\"action\",[[19,0,[]],\"editItem\",[20,[\"item\"]]]],[7],[0,\"edit\"],[8],[0,\"\\n\\t\\t\"],[6,\"button\"],[9,\"class\",\"delete\"],[3,\"action\",[[19,0,[]],\"deleteItem\",[20,[\"item\"]]]],[7],[0,\"X\"],[8],[0,\"\\n\\t\"],[8],[0,\"\\n\"]],\"parameters\":[]}]],\"hasEval\":false}", "meta": { "moduleName": "invite-and-manage-users/templates/components/table-team.hbs" } });
});
define("invite-and-manage-users/templates/components/table-user", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "Za0/Hy+c", "block": "{\"symbols\":[\"option\",\"option\"],\"statements\":[[4,\"if\",[[20,[\"isEditable\"]]],null,{\"statements\":[[0,\"\\t\"],[6,\"td\"],[9,\"class\",\"name\"],[7],[0,\"\\n\\t\\t\"],[1,[25,\"input\",null,[[\"value\",\"key-up\"],[[20,[\"item\",\"name\"]],\"updateName\"]]],false],[0,\"\\n\\t\\t\"],[1,[25,\"input\",null,[[\"value\",\"key-up\"],[[20,[\"item\",\"email\"]],\"updateEmail\"]]],false],[0,\"\\n\\t\"],[8],[0,\"\\n\\t\"],[6,\"td\"],[9,\"class\",\"created\"],[7],[0,\"\\n\\t\\t\"],[1,[25,\"user-created\",[[20,[\"item\",\"created\"]]],null],false],[0,\"\\n\\t\"],[8],[0,\"\\n\\t\"],[6,\"td\"],[9,\"class\",\"enabled\"],[7],[0,\"\\n\"],[4,\"power-select\",null,[[\"options\",\"selected\",\"onchange\"],[[20,[\"optionsStatus\"]],[20,[\"selectedStatus\"]],[25,\"action\",[[19,0,[]],\"updateEnabled\"],null]]],{\"statements\":[[0,\"  \\t\\t\\t\"],[1,[19,2,[\"title\"]],false],[0,\"\\n\"]],\"parameters\":[2]},null],[0,\"\\t\"],[8],[0,\"\\n\\t\"],[6,\"td\"],[9,\"class\",\"role\"],[7],[0,\"\\n\"],[4,\"power-select\",null,[[\"options\",\"selected\",\"onchange\"],[[20,[\"optionsRole\"]],[20,[\"selectedRole\"]],[25,\"action\",[[19,0,[]],\"updateRole\"],null]]],{\"statements\":[[0,\"  \\t\\t\\t\"],[1,[19,1,[]],false],[0,\"\\n\"]],\"parameters\":[1]},null],[0,\"\\t\"],[8],[0,\"\\n\\t\"],[6,\"td\"],[9,\"class\",\"buttons\"],[7],[0,\"\\n\\t\\t\"],[6,\"button\"],[3,\"action\",[[19,0,[]],\"editItem\",[20,[\"item\"]]]],[7],[0,\"save\"],[8],[0,\"\\n\\t\"],[8],[0,\"\\n\"]],\"parameters\":[]},{\"statements\":[[0,\"\\t\"],[6,\"td\"],[9,\"class\",\"name\"],[7],[0,\"\\n\\t\\t\"],[6,\"span\"],[9,\"class\",\"full-name\"],[7],[1,[20,[\"item\",\"name\"]],false],[8],[0,\"\\n\\t\\t\"],[6,\"span\"],[9,\"class\",\"email\"],[7],[1,[20,[\"item\",\"email\"]],false],[8],[0,\"\\n\\t\"],[8],[0,\"\\n\\t\"],[6,\"td\"],[9,\"class\",\"created\"],[7],[0,\"\\n\\t\\t\"],[1,[25,\"user-created\",[[20,[\"item\",\"created\"]]],null],false],[0,\"\\n\\t\"],[8],[0,\"\\n\\t\"],[6,\"td\"],[9,\"class\",\"enabled\"],[7],[0,\"\\n\"],[4,\"if\",[[20,[\"item\",\"enabled\"]]],null,{\"statements\":[[0,\"\\t\\t\\tyes\\n\"]],\"parameters\":[]},{\"statements\":[[0,\"\\t\\t\\tno\\n\"]],\"parameters\":[]}],[0,\"\\t\"],[8],[0,\"\\n\\t\"],[6,\"td\"],[9,\"class\",\"role\"],[7],[0,\"\\n\\t\\t\"],[1,[20,[\"item\",\"role\"]],false],[0,\"\\n\\t\"],[8],[0,\"\\n\\t\"],[6,\"td\"],[9,\"class\",\"buttons\"],[7],[0,\"\\n\\t\\t\"],[6,\"button\"],[3,\"action\",[[19,0,[]],\"editItem\",[20,[\"item\"]]]],[7],[0,\"edit\"],[8],[0,\"\\n\\t\\t\"],[6,\"button\"],[9,\"class\",\"delete\"],[3,\"action\",[[19,0,[]],\"deleteItem\",[20,[\"item\"]]]],[7],[0,\"X\"],[8],[0,\"\\n\\t\"],[8],[0,\"\\n\"]],\"parameters\":[]}]],\"hasEval\":false}", "meta": { "moduleName": "invite-and-manage-users/templates/components/table-user.hbs" } });
});
define("invite-and-manage-users/templates/teams/index", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "Hmhhl18U", "block": "{\"symbols\":[],\"statements\":[[1,[25,\"list-header\",null,[[\"title\",\"to\",\"text\",\"items\"],[\"teams\",\"teams.new\",\"create new team\",[20,[\"model\",\"teams\"]]]]],false],[0,\"\\n\\n\"],[1,[25,\"list-table\",null,[[\"items\",\"users\",\"isUsers\",\"editTeam\",\"deleteTeam\"],[[20,[\"model\",\"teams\"]],[20,[\"model\",\"users\"]],false,[25,\"action\",[[19,0,[]],\"editTeam\"],null],[25,\"action\",[[19,0,[]],\"deleteTeam\"],null]]]],false]],\"hasEval\":false}", "meta": { "moduleName": "invite-and-manage-users/templates/teams/index.hbs" } });
});
define("invite-and-manage-users/templates/teams/new", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "//Lt0WYX", "block": "{\"symbols\":[\"option\"],\"statements\":[[1,[25,\"list-header\",null,[[\"title\",\"to\",\"text\"],[\"new team\",\"teams\",\"x\"]]],false],[0,\"\\n\\n\"],[6,\"form\"],[9,\"class\",\"content-form\"],[7],[0,\"\\n\\t\"],[6,\"label\"],[7],[0,\"Name\"],[8],[0,\"\\n\\t\"],[1,[25,\"input\",null,[[\"value\",\"placeholder\"],[[20,[\"team\",\"name\"]],\"Name\"]]],false],[0,\"\\n\\t\"],[6,\"label\"],[7],[0,\"Description\"],[8],[0,\"\\n\\t\"],[1,[25,\"input\",null,[[\"value\",\"placeholder\"],[[20,[\"team\",\"description\"]],\"Description\"]]],false],[0,\"\\n\\t\"],[6,\"label\"],[7],[0,\"Color\"],[8],[0,\"\\n\"],[4,\"power-select\",null,[[\"options\",\"selected\",\"onchange\"],[[20,[\"options\"]],[20,[\"team\",\"color\"]],[25,\"action\",[[19,0,[]],\"updateColor\"],null]]],{\"statements\":[[0,\"  \\t\\t\"],[1,[19,1,[]],false],[0,\"\\n\"]],\"parameters\":[1]},null],[0,\"\\t\"],[6,\"button\"],[3,\"action\",[[19,0,[]],\"onCancel\"]],[7],[0,\"cancel\"],[8],[0,\"\\n\\t\"],[6,\"button\"],[3,\"action\",[[19,0,[]],\"addTeam\"]],[7],[0,\"add team\"],[8],[0,\"\\n\"],[8]],\"hasEval\":false}", "meta": { "moduleName": "invite-and-manage-users/templates/teams/new.hbs" } });
});
define("invite-and-manage-users/templates/teams/team", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "Eh6S4GHR", "block": "{\"symbols\":[],\"statements\":[[4,\"if\",[[20,[\"model\",\"data\"]]],null,{\"statements\":[[0,\"\\t\"],[1,[25,\"list-header\",null,[[\"title\",\"to\",\"text\"],[[20,[\"model\",\"data\",\"name\"]],\"teams\",\"return to list\"]]],false],[0,\"\\n\\n\\t\"],[6,\"section\"],[9,\"class\",\"users\"],[7],[0,\"\\n\\t\\t\"],[1,[25,\"list-filter\",null,[[\"param\",\"isIn\",\"title\",\"filter\",\"editUser\"],[[20,[\"model\",\"data\",\"name\"]],true,\"In this team\",[25,\"action\",[[19,0,[]],\"filterByIn\"],null],[25,\"action\",[[19,0,[]],\"editUser\"],null]]]],false],[0,\"\\n\\n\\t\\t\"],[1,[25,\"list-filter\",null,[[\"param\",\"isIn\",\"title\",\"filter\",\"editUser\"],[[20,[\"model\",\"data\",\"name\"]],false,\"In others\",[25,\"action\",[[19,0,[]],\"filterByOut\"],null],[25,\"action\",[[19,0,[]],\"editUser\"],null]]]],false],[0,\"\\n\\t\"],[8],[0,\"\\n\"]],\"parameters\":[]},{\"statements\":[[0,\"\\t\"],[1,[25,\"list-header\",null,[[\"title\",\"to\",\"text\"],[[20,[\"model\",\"team\",\"name\"]],\"teams\",\"return to list\"]]],false],[0,\"\\n\\n\\t\"],[6,\"section\"],[9,\"class\",\"users\"],[7],[0,\"\\n\\t\\t\"],[1,[25,\"list-filter\",null,[[\"param\",\"isIn\",\"title\",\"filter\",\"editUser\"],[[20,[\"model\",\"team\",\"name\"]],true,\"In this team\",[25,\"action\",[[19,0,[]],\"filterByIn\"],null],[25,\"action\",[[19,0,[]],\"editUser\"],null]]]],false],[0,\"\\n\\n\\t\\t\"],[1,[25,\"list-filter\",null,[[\"param\",\"isIn\",\"title\",\"filter\",\"editUser\"],[[20,[\"model\",\"team\",\"name\"]],false,\"In others\",[25,\"action\",[[19,0,[]],\"filterByOut\"],null],[25,\"action\",[[19,0,[]],\"editUser\"],null]]]],false],[0,\"\\n\\t\"],[8],[0,\"\\n\"]],\"parameters\":[]}]],\"hasEval\":false}", "meta": { "moduleName": "invite-and-manage-users/templates/teams/team.hbs" } });
});
define("invite-and-manage-users/templates/users/index", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "pq8ByNUl", "block": "{\"symbols\":[],\"statements\":[[1,[25,\"list-header\",null,[[\"title\",\"to\",\"text\",\"items\"],[\"users\",\"users.new\",\"invite user\",[20,[\"model\",\"users\"]]]]],false],[0,\"\\n\\n\"],[1,[25,\"list-table\",null,[[\"items\",\"teams\",\"isUsers\",\"editUser\",\"deleteUser\"],[[20,[\"model\",\"users\"]],[20,[\"model\",\"teams\"]],true,[25,\"action\",[[19,0,[]],\"editUser\"],null],[25,\"action\",[[19,0,[]],\"deleteUser\"],null]]]],false]],\"hasEval\":false}", "meta": { "moduleName": "invite-and-manage-users/templates/users/index.hbs" } });
});
define("invite-and-manage-users/templates/users/new", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "KWWP2G01", "block": "{\"symbols\":[\"option\"],\"statements\":[[1,[25,\"list-header\",null,[[\"title\",\"to\",\"text\"],[\"invite new user\",\"users\",\"x\"]]],false],[0,\"\\n\\n\"],[6,\"form\"],[9,\"class\",\"content-form\"],[7],[0,\"\\n\\t\"],[6,\"label\"],[7],[0,\"Email\"],[8],[0,\"\\n\\t\"],[1,[25,\"input\",null,[[\"type\",\"value\",\"placeholder\"],[\"email\",[20,[\"user\",\"email\"]],\"user@example.com\"]]],false],[0,\"\\n\\t\"],[6,\"label\"],[7],[0,\"Role\"],[8],[0,\"\\n\"],[4,\"power-select\",null,[[\"options\",\"selected\",\"onchange\"],[[20,[\"options\"]],[20,[\"user\",\"role\"]],[25,\"action\",[[19,0,[]],\"updateRole\"],null]]],{\"statements\":[[0,\"  \\t\\t\"],[1,[19,1,[]],false],[0,\"\\n\"]],\"parameters\":[1]},null],[0,\"\\t\"],[6,\"button\"],[3,\"action\",[[19,0,[]],\"onCancel\"]],[7],[0,\"cancel\"],[8],[0,\"\\n\\t\"],[6,\"button\"],[3,\"action\",[[19,0,[]],\"inviteUser\"]],[7],[0,\"invite\"],[8],[0,\"\\n\"],[8]],\"hasEval\":false}", "meta": { "moduleName": "invite-and-manage-users/templates/users/new.hbs" } });
});
define('invite-and-manage-users/tests/mirage/mirage.lint-test', [], function () {
  'use strict';

  QUnit.module('ESLint | mirage');

  QUnit.test('mirage/config.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mirage/config.js should pass ESLint\n\n');
  });

  QUnit.test('mirage/scenarios/default.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mirage/scenarios/default.js should pass ESLint\n\n');
  });

  QUnit.test('mirage/serializers/application.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mirage/serializers/application.js should pass ESLint\n\n');
  });
});


define('invite-and-manage-users/config/environment', [], function() {
  var prefix = 'invite-and-manage-users';
try {
  var metaName = prefix + '/config/environment';
  var rawConfig = document.querySelector('meta[name="' + metaName + '"]').getAttribute('content');
  var config = JSON.parse(unescape(rawConfig));

  var exports = { 'default': config };

  Object.defineProperty(exports, '__esModule', { value: true });

  return exports;
}
catch(err) {
  throw new Error('Could not read config from meta tag with name "' + metaName + '".');
}

});

if (!runningTests) {
  require("invite-and-manage-users/app")["default"].create({"name":"invite-and-manage-users","version":"0.0.0+405f2d45"});
}
//# sourceMappingURL=invite-and-manage-users.map
