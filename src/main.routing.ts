'use strict';

import { ENV_CONFIG } from './environment';

/**
 * Configuration includes routing and other configuration.
 * @param  {[type]} $locationProvider  angular native
 * @param  {[type]} $stateProvider     angular native
 * @param  {[type]} $urlRouterProvider angular native
 * @param  {[type]} $compileProvider   angular native
 * @return {[type]}                    -
 */
const routing = ($locationProvider: ng.ILocationProvider, $stateProvider: ng.ui.IStateProvider, $urlRouterProvider: ng.ui.IUrlRouterProvider, $compileProvider: ng.ICompileProvider) => {
    $locationProvider.html5Mode({
        enabled: false
    });

    // For performance increase purpose
    $compileProvider.debugInfoEnabled(ENV_CONFIG.name === 'local');
    $urlRouterProvider.otherwise('/404');

    // Routes
    $stateProvider

        .state('root', {
            abstract: true,
            template: '<ui-view/>'
        })

        .state('root.homepage', {
            url: '/',
            views: {
                'container@': {
                    template: '<homepage></homepage>'
                }
            }
        })

        .state('root.404', {
            url: '/404',
            views: {
                'container@': {
                    templateUrl: './src/common/errors/404.index.html'
                }
            }
        });
};

routing.$inject = [
    '$locationProvider',
    '$stateProvider',
    '$urlRouterProvider',
    '$compileProvider'
]

export default routing;
