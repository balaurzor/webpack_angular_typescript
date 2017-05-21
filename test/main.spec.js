inject = angular.mock.inject;
module = angular.mock.module;

beforeEach(module('app'));

describe('', () => {


    it('should provide a version', inject(function(mode, version) {
        expect(version).toEqual('v1.0.0');
        expect(mode).toEqual('app');
    }));

})
