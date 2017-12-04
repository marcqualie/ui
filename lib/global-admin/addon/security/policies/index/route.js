import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default Route.extend({
  authzStore: service('authz-store'),
  model() {
    return this.get('authzStore').find('podSecurityPolicyTemplate', null, {
      url: 'podSecurityPolicyTemplates',
      forceReload: true,
      removeMissing: true
    });
  },
});