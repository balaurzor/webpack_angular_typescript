'use strict';

describe('HomepageCommonController', function() {
    var controller;

    beforeEach(inject((_$controller_) => {
        // The injector unwraps the underscores (_) from around the parameter names when matching
        controller = _$controller_('HomepageCommonController', {});
    }));

    it('SHOULD show a default name', function() {
        controller.$onInit();
        expect(controller.name).toEqual('user');
    });
});
