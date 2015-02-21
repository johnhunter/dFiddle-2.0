define(['durandal/app', 'durandal/system', 'knockout', 'plugins/router'], function( app, system, ko, router ) {
    var baseUrl = '#' + ko.unwrap(router.activeInstruction).fragment;
    var params = ko.observable('');

    return {
        baseUrl: baseUrl,
        params: params,
        activate: function() {
            params(JSON.stringify(Array.prototype.slice.call(arguments), null, 2));
        }
    };
});
