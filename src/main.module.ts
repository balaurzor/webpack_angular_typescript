import * as angular from 'angular';
import '@uirouter/angularjs';


import routing from './main.routing';
import common from './common/common.module';

angular
    .module('app', [
        'ui.router',
        common.name
    ])
    .value('mode', 'app')
    .value('version', 'v1.0.0')
    .config(routing);

angular.element(document).ready(() => {
    angular.bootstrap(document, ['app'], {
        strictDi: false
    });
});
