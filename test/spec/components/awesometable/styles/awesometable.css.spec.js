'use strict';

describe('AwesomeTable: Styles', function () {

    var testTable,
        $scope,
        $rootScope,
        defaultTemplate = '<div class="awesometable"></div>';

    beforeEach(module('awesometable'));
    beforeEach(function() {
        injectGlobals();
        includeStylesheet('components/awesometable/styles/awesometable.css');
        compileTemplate();
    });

    it('should never have a width of less than 500px', function () {
        var actualWidth = parseInt(testTable.css('width'), 10);
        expect(actualWidth).toBeGreaterThan(500);
    });

    function injectGlobals() {
        inject(function (_$rootScope_) {
            $rootScope = _$rootScope_;
            $scope = _$rootScope_.$new();
        });
    }

    function includeStylesheet(path) {
        angular.element('body').append('<link rel="stylesheet" href="/base/app/' + path + '/>');
    }

    function compileTemplate(tpl) {
        if (!tpl) tpl = defaultTemplate;
        inject(function ($compile) {
            testTable = $compile(tpl)($scope);
        });

        $scope.$digest();
    }
});