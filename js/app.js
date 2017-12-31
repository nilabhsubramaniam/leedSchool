
(function () {
    angular.module('leadSchool', [
        'ui.router',                    // Routing
        'ngMaterial',                   // material
        'md.data.table',                //dataTable
        'oc.lazyLoad',                  // ocLazyLoad
        'ui.bootstrap',                 // Ui Bootstrap
        'toaster',                      //toaster
        'pascalprecht.translate',       // Angular Translate
        'ngIdle',                       // Idle timer
        'ngSanitize',                   // ngSanitize
        'angularModalService'                    
    ])
})();

// Other libraries are loaded dynamically in the config.js file using the library ocLazyLoad