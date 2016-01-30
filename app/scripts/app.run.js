(function() {
    'use strict';

    angular
        .module('daksports')
        .run(runBlock);

    /** @ngInject */
    function runBlock($log) {

        $log.debug('runBlock end');
    }

})();
