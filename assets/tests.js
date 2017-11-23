'use strict';

define('invite-and-manage-users/tests/app.lint-test', [], function () {
  'use strict';

  QUnit.module('ESLint | app');

  QUnit.test('adapters/application.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'adapters/application.js should pass ESLint\n\n');
  });

  QUnit.test('app.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app.js should pass ESLint\n\n');
  });

  QUnit.test('components/button-link.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/button-link.js should pass ESLint\n\n');
  });

  QUnit.test('components/list-filter.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/list-filter.js should pass ESLint\n\n');
  });

  QUnit.test('components/list-header.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/list-header.js should pass ESLint\n\n');
  });

  QUnit.test('components/list-table.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/list-table.js should pass ESLint\n\n');
  });

  QUnit.test('components/main-navigation.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/main-navigation.js should pass ESLint\n\n');
  });

  QUnit.test('components/table-team.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/table-team.js should pass ESLint\n\n');
  });

  QUnit.test('components/table-user.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/table-user.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/teams/index.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/teams/index.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/teams/new.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/teams/new.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/teams/team.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/teams/team.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/users/index.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/users/index.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/users/new.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/users/new.js should pass ESLint\n\n');
  });

  QUnit.test('helpers/get-color.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/get-color.js should pass ESLint\n\n');
  });

  QUnit.test('helpers/team-is-enabled.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/team-is-enabled.js should pass ESLint\n\n');
  });

  QUnit.test('helpers/user-created.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/user-created.js should pass ESLint\n\n');
  });

  QUnit.test('models/team.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/team.js should pass ESLint\n\n');
  });

  QUnit.test('models/user.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/user.js should pass ESLint\n\n');
  });

  QUnit.test('resolver.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'resolver.js should pass ESLint\n\n');
  });

  QUnit.test('router.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'router.js should pass ESLint\n\n');
  });

  QUnit.test('routes/index.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/index.js should pass ESLint\n\n');
  });

  QUnit.test('routes/teams.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/teams.js should pass ESLint\n\n');
  });

  QUnit.test('routes/teams/index.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/teams/index.js should pass ESLint\n\n');
  });

  QUnit.test('routes/teams/new.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/teams/new.js should pass ESLint\n\n');
  });

  QUnit.test('routes/teams/team.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/teams/team.js should pass ESLint\n\n');
  });

  QUnit.test('routes/users.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/users.js should pass ESLint\n\n');
  });

  QUnit.test('routes/users/index.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/users/index.js should pass ESLint\n\n');
  });

  QUnit.test('routes/users/new.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/users/new.js should pass ESLint\n\n');
  });

  QUnit.test('routes/users/user.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/users/user.js should pass ESLint\n\n');
  });
});
define('invite-and-manage-users/tests/helpers/destroy-app', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = destroyApp;
  var run = Ember.run;
  function destroyApp(application) {
    run(application, 'destroy');
  }
});
define('invite-and-manage-users/tests/helpers/ember-basic-dropdown', ['exports', 'ember-basic-dropdown/test-support/helpers', 'ember-native-dom-helpers'], function (exports, _helpers, _emberNativeDomHelpers) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.nativeClick = exports.fireKeydown = exports.tapTrigger = exports.clickTrigger = exports.nativeTap = undefined;
  Object.defineProperty(exports, 'nativeTap', {
    enumerable: true,
    get: function () {
      return _helpers.nativeTap;
    }
  });
  Object.defineProperty(exports, 'clickTrigger', {
    enumerable: true,
    get: function () {
      return _helpers.clickTrigger;
    }
  });
  Object.defineProperty(exports, 'tapTrigger', {
    enumerable: true,
    get: function () {
      return _helpers.tapTrigger;
    }
  });
  Object.defineProperty(exports, 'fireKeydown', {
    enumerable: true,
    get: function () {
      return _helpers.fireKeydown;
    }
  });
  exports.default = _helpers.default;
  var nativeClick = exports.nativeClick = _emberNativeDomHelpers.click;
});
define('invite-and-manage-users/tests/helpers/ember-power-select', ['exports', 'ember-power-select/test-support/helpers'], function (exports, _helpers) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.selectChoose = exports.touchTrigger = exports.nativeTouch = exports.clickTrigger = exports.typeInSearch = exports.triggerKeydown = exports.nativeMouseUp = exports.nativeMouseDown = exports.findContains = undefined;
  Object.defineProperty(exports, 'findContains', {
    enumerable: true,
    get: function () {
      return _helpers.findContains;
    }
  });
  Object.defineProperty(exports, 'nativeMouseDown', {
    enumerable: true,
    get: function () {
      return _helpers.nativeMouseDown;
    }
  });
  Object.defineProperty(exports, 'nativeMouseUp', {
    enumerable: true,
    get: function () {
      return _helpers.nativeMouseUp;
    }
  });
  Object.defineProperty(exports, 'triggerKeydown', {
    enumerable: true,
    get: function () {
      return _helpers.triggerKeydown;
    }
  });
  Object.defineProperty(exports, 'typeInSearch', {
    enumerable: true,
    get: function () {
      return _helpers.typeInSearch;
    }
  });
  Object.defineProperty(exports, 'clickTrigger', {
    enumerable: true,
    get: function () {
      return _helpers.clickTrigger;
    }
  });
  Object.defineProperty(exports, 'nativeTouch', {
    enumerable: true,
    get: function () {
      return _helpers.nativeTouch;
    }
  });
  Object.defineProperty(exports, 'touchTrigger', {
    enumerable: true,
    get: function () {
      return _helpers.touchTrigger;
    }
  });
  Object.defineProperty(exports, 'selectChoose', {
    enumerable: true,
    get: function () {
      return _helpers.selectChoose;
    }
  });
  exports.default = _helpers.default;
});
define('invite-and-manage-users/tests/helpers/module-for-acceptance', ['exports', 'qunit', 'invite-and-manage-users/tests/helpers/start-app', 'invite-and-manage-users/tests/helpers/destroy-app'], function (exports, _qunit, _startApp, _destroyApp) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  exports.default = function (name) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    (0, _qunit.module)(name, {
      beforeEach: function beforeEach() {
        this.application = (0, _startApp.default)();

        if (options.beforeEach) {
          return options.beforeEach.apply(this, arguments);
        }
      },
      afterEach: function afterEach() {
        var _this = this;

        var afterEach = options.afterEach && options.afterEach.apply(this, arguments);
        return resolve(afterEach).then(function () {
          return (0, _destroyApp.default)(_this.application);
        });
      }
    });
  };

  var resolve = Ember.RSVP.resolve;
});
define('invite-and-manage-users/tests/helpers/resolver', ['exports', 'invite-and-manage-users/resolver', 'invite-and-manage-users/config/environment'], function (exports, _resolver, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  var resolver = _resolver.default.create();

  resolver.namespace = {
    modulePrefix: _environment.default.modulePrefix,
    podModulePrefix: _environment.default.podModulePrefix
  };

  exports.default = resolver;
});
define('invite-and-manage-users/tests/helpers/start-app', ['exports', 'invite-and-manage-users/app', 'invite-and-manage-users/config/environment'], function (exports, _app, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = startApp;
  var merge = Ember.merge;
  var run = Ember.run;
  function startApp(attrs) {
    var attributes = merge({}, _environment.default.APP);
    attributes = merge(attributes, attrs); // use defaults, but you can override;

    return run(function () {
      var application = _app.default.create(attributes);
      application.setupForTesting();
      application.injectTestHelpers();
      return application;
    });
  }
});
define('invite-and-manage-users/tests/integration/components/button-link-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForComponent)('button-link', 'Integration | Component | button link', {
    integration: true
  });

  (0, _emberQunit.test)('it renders', function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });

    this.render(Ember.HTMLBars.template({
      "id": "HmcBOVUs",
      "block": "{\"symbols\":[],\"statements\":[[1,[18,\"button-link\"],false]],\"hasEval\":false}",
      "meta": {}
    }));

    assert.equal(this.$().text().trim(), '');

    // Template block usage:
    this.render(Ember.HTMLBars.template({
      "id": "GNnk/G7l",
      "block": "{\"symbols\":[],\"statements\":[[0,\"\\n\"],[4,\"button-link\",null,null,{\"statements\":[[0,\"      template block text\\n\"]],\"parameters\":[]},null],[0,\"  \"]],\"hasEval\":false}",
      "meta": {}
    }));

    assert.equal(this.$().text().trim(), 'template block text');
  });
});
define('invite-and-manage-users/tests/integration/components/list-filter-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForComponent)('list-filter', 'Integration | Component | list filter', {
    integration: true
  });

  (0, _emberQunit.test)('it renders', function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });

    this.render(Ember.HTMLBars.template({
      "id": "PT5Ar3tM",
      "block": "{\"symbols\":[],\"statements\":[[1,[18,\"list-filter\"],false]],\"hasEval\":false}",
      "meta": {}
    }));

    assert.equal(this.$().text().trim(), '');

    // Template block usage:
    this.render(Ember.HTMLBars.template({
      "id": "ZAl1OGpj",
      "block": "{\"symbols\":[],\"statements\":[[0,\"\\n\"],[4,\"list-filter\",null,null,{\"statements\":[[0,\"      template block text\\n\"]],\"parameters\":[]},null],[0,\"  \"]],\"hasEval\":false}",
      "meta": {}
    }));

    assert.equal(this.$().text().trim(), 'template block text');
  });
});
define('invite-and-manage-users/tests/integration/components/list-header-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForComponent)('list-header', 'Integration | Component | list header', {
    integration: true
  });

  (0, _emberQunit.test)('it renders', function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });

    this.render(Ember.HTMLBars.template({
      "id": "s7KUiu9I",
      "block": "{\"symbols\":[],\"statements\":[[1,[18,\"list-header\"],false]],\"hasEval\":false}",
      "meta": {}
    }));

    assert.equal(this.$().text().trim(), '');

    // Template block usage:
    this.render(Ember.HTMLBars.template({
      "id": "YD+duXFh",
      "block": "{\"symbols\":[],\"statements\":[[0,\"\\n\"],[4,\"list-header\",null,null,{\"statements\":[[0,\"      template block text\\n\"]],\"parameters\":[]},null],[0,\"  \"]],\"hasEval\":false}",
      "meta": {}
    }));

    assert.equal(this.$().text().trim(), 'template block text');
  });
});
define('invite-and-manage-users/tests/integration/components/list-table-team-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForComponent)('list-table-team', 'Integration | Component | list table team', {
    integration: true
  });

  (0, _emberQunit.test)('it renders', function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });

    this.render(Ember.HTMLBars.template({
      "id": "DFV+g+px",
      "block": "{\"symbols\":[],\"statements\":[[1,[18,\"list-table-team\"],false]],\"hasEval\":false}",
      "meta": {}
    }));

    assert.equal(this.$().text().trim(), '');

    // Template block usage:
    this.render(Ember.HTMLBars.template({
      "id": "aQLrEU7s",
      "block": "{\"symbols\":[],\"statements\":[[0,\"\\n\"],[4,\"list-table-team\",null,null,{\"statements\":[[0,\"      template block text\\n\"]],\"parameters\":[]},null],[0,\"  \"]],\"hasEval\":false}",
      "meta": {}
    }));

    assert.equal(this.$().text().trim(), 'template block text');
  });
});
define('invite-and-manage-users/tests/integration/components/list-table-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForComponent)('list-table', 'Integration | Component | list table', {
    integration: true
  });

  (0, _emberQunit.test)('it renders', function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });

    this.render(Ember.HTMLBars.template({
      "id": "LY2zF+Kh",
      "block": "{\"symbols\":[],\"statements\":[[1,[18,\"list-table\"],false]],\"hasEval\":false}",
      "meta": {}
    }));

    assert.equal(this.$().text().trim(), '');

    // Template block usage:
    this.render(Ember.HTMLBars.template({
      "id": "h8VBtgqk",
      "block": "{\"symbols\":[],\"statements\":[[0,\"\\n\"],[4,\"list-table\",null,null,{\"statements\":[[0,\"      template block text\\n\"]],\"parameters\":[]},null],[0,\"  \"]],\"hasEval\":false}",
      "meta": {}
    }));

    assert.equal(this.$().text().trim(), 'template block text');
  });
});
define('invite-and-manage-users/tests/integration/components/list-table-user-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForComponent)('list-table-user', 'Integration | Component | list table user', {
    integration: true
  });

  (0, _emberQunit.test)('it renders', function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });

    this.render(Ember.HTMLBars.template({
      "id": "ZzaC/P0N",
      "block": "{\"symbols\":[],\"statements\":[[1,[18,\"list-table-user\"],false]],\"hasEval\":false}",
      "meta": {}
    }));

    assert.equal(this.$().text().trim(), '');

    // Template block usage:
    this.render(Ember.HTMLBars.template({
      "id": "eYCztbAI",
      "block": "{\"symbols\":[],\"statements\":[[0,\"\\n\"],[4,\"list-table-user\",null,null,{\"statements\":[[0,\"      template block text\\n\"]],\"parameters\":[]},null],[0,\"  \"]],\"hasEval\":false}",
      "meta": {}
    }));

    assert.equal(this.$().text().trim(), 'template block text');
  });
});
define('invite-and-manage-users/tests/integration/components/main-navigation-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForComponent)('main-navigation', 'Integration | Component | main navigation', {
    integration: true
  });

  (0, _emberQunit.test)('it renders', function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });

    this.render(Ember.HTMLBars.template({
      "id": "JTetxjhC",
      "block": "{\"symbols\":[],\"statements\":[[1,[18,\"main-navigation\"],false]],\"hasEval\":false}",
      "meta": {}
    }));

    assert.equal(this.$().text().trim(), '');

    // Template block usage:
    this.render(Ember.HTMLBars.template({
      "id": "WeGkCfkj",
      "block": "{\"symbols\":[],\"statements\":[[0,\"\\n\"],[4,\"main-navigation\",null,null,{\"statements\":[[0,\"      template block text\\n\"]],\"parameters\":[]},null],[0,\"  \"]],\"hasEval\":false}",
      "meta": {}
    }));

    assert.equal(this.$().text().trim(), 'template block text');
  });
});
define('invite-and-manage-users/tests/integration/components/table-team-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForComponent)('table-team', 'Integration | Component | table team', {
    integration: true
  });

  (0, _emberQunit.test)('it renders', function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });

    this.render(Ember.HTMLBars.template({
      "id": "lNED08ng",
      "block": "{\"symbols\":[],\"statements\":[[1,[18,\"table-team\"],false]],\"hasEval\":false}",
      "meta": {}
    }));

    assert.equal(this.$().text().trim(), '');

    // Template block usage:
    this.render(Ember.HTMLBars.template({
      "id": "cB4Ry+sM",
      "block": "{\"symbols\":[],\"statements\":[[0,\"\\n\"],[4,\"table-team\",null,null,{\"statements\":[[0,\"      template block text\\n\"]],\"parameters\":[]},null],[0,\"  \"]],\"hasEval\":false}",
      "meta": {}
    }));

    assert.equal(this.$().text().trim(), 'template block text');
  });
});
define('invite-and-manage-users/tests/integration/components/table-user-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForComponent)('table-user', 'Integration | Component | table user', {
    integration: true
  });

  (0, _emberQunit.test)('it renders', function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });

    this.render(Ember.HTMLBars.template({
      "id": "m1z9CBWx",
      "block": "{\"symbols\":[],\"statements\":[[1,[18,\"table-user\"],false]],\"hasEval\":false}",
      "meta": {}
    }));

    assert.equal(this.$().text().trim(), '');

    // Template block usage:
    this.render(Ember.HTMLBars.template({
      "id": "wsj7ds8d",
      "block": "{\"symbols\":[],\"statements\":[[0,\"\\n\"],[4,\"table-user\",null,null,{\"statements\":[[0,\"      template block text\\n\"]],\"parameters\":[]},null],[0,\"  \"]],\"hasEval\":false}",
      "meta": {}
    }));

    assert.equal(this.$().text().trim(), 'template block text');
  });
});
define('invite-and-manage-users/tests/integration/helpers/get-color-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForComponent)('get-color', 'helper:get-color', {
    integration: true
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it renders', function (assert) {
    this.set('inputValue', '1234');

    this.render(Ember.HTMLBars.template({
      "id": "yKH00Ofx",
      "block": "{\"symbols\":[],\"statements\":[[1,[25,\"get-color\",[[20,[\"inputValue\"]]],null],false]],\"hasEval\":false}",
      "meta": {}
    }));

    assert.equal(this.$().text().trim(), '1234');
  });
});
define('invite-and-manage-users/tests/integration/helpers/get-team-name-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForComponent)('get-team-name', 'helper:get-team-name', {
    integration: true
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it renders', function (assert) {
    this.set('inputValue', '1234');

    this.render(Ember.HTMLBars.template({
      "id": "Bjk8Cxje",
      "block": "{\"symbols\":[],\"statements\":[[1,[25,\"get-team-name\",[[20,[\"inputValue\"]]],null],false]],\"hasEval\":false}",
      "meta": {}
    }));

    assert.equal(this.$().text().trim(), '1234');
  });
});
define('invite-and-manage-users/tests/integration/helpers/team-is-enabled-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForComponent)('team-is-enabled', 'helper:team-is-enabled', {
    integration: true
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it renders', function (assert) {
    this.set('inputValue', '1234');

    this.render(Ember.HTMLBars.template({
      "id": "DooIFZ8w",
      "block": "{\"symbols\":[],\"statements\":[[1,[25,\"team-is-enabled\",[[20,[\"inputValue\"]]],null],false]],\"hasEval\":false}",
      "meta": {}
    }));

    assert.equal(this.$().text().trim(), '1234');
  });
});
define('invite-and-manage-users/tests/integration/helpers/user-created-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForComponent)('user-created', 'helper:user-created', {
    integration: true
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it renders', function (assert) {
    this.set('inputValue', '1234');

    this.render(Ember.HTMLBars.template({
      "id": "Tfpj2Qu+",
      "block": "{\"symbols\":[],\"statements\":[[1,[25,\"user-created\",[[20,[\"inputValue\"]]],null],false]],\"hasEval\":false}",
      "meta": {}
    }));

    assert.equal(this.$().text().trim(), '1234');
  });
});
define('invite-and-manage-users/tests/test-helper', ['invite-and-manage-users/tests/helpers/resolver', 'ember-qunit', 'ember-cli-qunit'], function (_resolver, _emberQunit, _emberCliQunit) {
  'use strict';

  (0, _emberQunit.setResolver)(_resolver.default);
  (0, _emberCliQunit.start)();
});
define('invite-and-manage-users/tests/tests.lint-test', [], function () {
  'use strict';

  QUnit.module('ESLint | tests');

  QUnit.test('helpers/destroy-app.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/destroy-app.js should pass ESLint\n\n');
  });

  QUnit.test('helpers/module-for-acceptance.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/module-for-acceptance.js should pass ESLint\n\n');
  });

  QUnit.test('helpers/resolver.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/resolver.js should pass ESLint\n\n');
  });

  QUnit.test('helpers/start-app.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/start-app.js should pass ESLint\n\n');
  });

  QUnit.test('integration/components/button-link-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/button-link-test.js should pass ESLint\n\n');
  });

  QUnit.test('integration/components/list-filter-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/list-filter-test.js should pass ESLint\n\n');
  });

  QUnit.test('integration/components/list-header-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/list-header-test.js should pass ESLint\n\n');
  });

  QUnit.test('integration/components/list-table-team-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/list-table-team-test.js should pass ESLint\n\n');
  });

  QUnit.test('integration/components/list-table-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/list-table-test.js should pass ESLint\n\n');
  });

  QUnit.test('integration/components/list-table-user-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/list-table-user-test.js should pass ESLint\n\n');
  });

  QUnit.test('integration/components/main-navigation-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/main-navigation-test.js should pass ESLint\n\n');
  });

  QUnit.test('integration/components/table-team-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/table-team-test.js should pass ESLint\n\n');
  });

  QUnit.test('integration/components/table-user-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/table-user-test.js should pass ESLint\n\n');
  });

  QUnit.test('integration/helpers/get-color-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/helpers/get-color-test.js should pass ESLint\n\n');
  });

  QUnit.test('integration/helpers/get-team-name-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/helpers/get-team-name-test.js should pass ESLint\n\n');
  });

  QUnit.test('integration/helpers/team-is-enabled-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/helpers/team-is-enabled-test.js should pass ESLint\n\n');
  });

  QUnit.test('integration/helpers/user-created-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/helpers/user-created-test.js should pass ESLint\n\n');
  });

  QUnit.test('test-helper.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'test-helper.js should pass ESLint\n\n');
  });

  QUnit.test('unit/adapters/application-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/adapters/application-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/controllers/teams/index-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/teams/index-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/controllers/teams/new-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/teams/new-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/controllers/teams/team-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/teams/team-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/controllers/users/index-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/users/index-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/controllers/users/new-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/users/new-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/models/team-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/models/team-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/models/user-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/models/user-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/index-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/index-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/teams-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/teams-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/teams/index-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/teams/index-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/teams/new-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/teams/new-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/teams/team-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/teams/team-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/users-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/users-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/users/index-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/users/index-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/users/new-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/users/new-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/users/user-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/users/user-test.js should pass ESLint\n\n');
  });
});
define('invite-and-manage-users/tests/unit/adapters/application-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('adapter:application', 'Unit | Adapter | application', {
    // Specify the other units that are required for this test.
    // needs: ['serializer:foo']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var adapter = this.subject();
    assert.ok(adapter);
  });
});
define('invite-and-manage-users/tests/unit/controllers/teams/index-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('controller:teams/index', 'Unit | Controller | teams/index', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var controller = this.subject();
    assert.ok(controller);
  });
});
define('invite-and-manage-users/tests/unit/controllers/teams/new-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('controller:teams/new', 'Unit | Controller | teams/new', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var controller = this.subject();
    assert.ok(controller);
  });
});
define('invite-and-manage-users/tests/unit/controllers/teams/team-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('controller:teams/team', 'Unit | Controller | teams/team', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var controller = this.subject();
    assert.ok(controller);
  });
});
define('invite-and-manage-users/tests/unit/controllers/users/index-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('controller:users/index', 'Unit | Controller | users/index', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var controller = this.subject();
    assert.ok(controller);
  });
});
define('invite-and-manage-users/tests/unit/controllers/users/new-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('controller:users/new', 'Unit | Controller | users/new', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var controller = this.subject();
    assert.ok(controller);
  });
});
define('invite-and-manage-users/tests/unit/models/team-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForModel)('team', 'Unit | Model | team', {
    // Specify the other units that are required for this test.
    needs: []
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var model = this.subject();
    // let store = this.store();
    assert.ok(!!model);
  });
});
define('invite-and-manage-users/tests/unit/models/user-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForModel)('user', 'Unit | Model | user', {
    // Specify the other units that are required for this test.
    needs: []
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var model = this.subject();
    // let store = this.store();
    assert.ok(!!model);
  });
});
define('invite-and-manage-users/tests/unit/routes/index-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('route:index', 'Unit | Route | index', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('invite-and-manage-users/tests/unit/routes/teams-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('route:teams', 'Unit | Route | teams', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('invite-and-manage-users/tests/unit/routes/teams/index-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('route:teams/index', 'Unit | Route | teams/index', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('invite-and-manage-users/tests/unit/routes/teams/new-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('route:teams/new', 'Unit | Route | teams/new', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('invite-and-manage-users/tests/unit/routes/teams/team-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('route:teams/team', 'Unit | Route | teams/team', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('invite-and-manage-users/tests/unit/routes/users-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('route:users', 'Unit | Route | users', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('invite-and-manage-users/tests/unit/routes/users/index-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('route:users/index', 'Unit | Route | users/index', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('invite-and-manage-users/tests/unit/routes/users/new-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('route:users/new', 'Unit | Route | users/new', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('invite-and-manage-users/tests/unit/routes/users/user-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('route:users/user', 'Unit | Route | users/user', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
require('invite-and-manage-users/tests/test-helper');
EmberENV.TESTS_FILE_LOADED = true;
//# sourceMappingURL=tests.map
