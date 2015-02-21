define(['plugins/router', 'global', 'knockout'], function( router, global, ko ) {
    var childRouter = router.createChildRouter()
      .makeRelative({
           moduleId: 'router',
           route: 'router'
       }).map([
          {
              type: 'intro',
              title: 'Routing',
              route: ['', 'default'],
              moduleId: 'default/index',
              nav: true
          }
      ])
      .buildNavigationModel();

      childRouter.on('router:navigation:complete').then(global.createSampleLink);


    return {
        global: global,
        router: childRouter,
        getItemsByCategoryId: function( categoryId ) {
            return ko.utils.arrayFilter(childRouter.navigationModel(), function( route ) {
                return route.type === categoryId;
            });
        }
    };
});
