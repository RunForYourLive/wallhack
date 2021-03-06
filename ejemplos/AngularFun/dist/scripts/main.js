(function() {
  require({
    shim: {
      "libs/angular.min": {
        "deps": []
      },
      "libs/angular-animate.min": {
        "deps": ["libs/angular.min"]
      },
      "libs/angular-route.min": {
        "deps": ["libs/angular.min"]
      },
      "app": {
        "deps": ["libs/angular-animate.min", "libs/angular-route.min"]
      },
      "controllers/gitHubController": {
        "deps": ["app"]
      },
      "controllers/personController": {
        "deps": ["app"]
      },
      "controllers/searchHistoryController": {
        "deps": ["app"]
      },
      "directives/tab": {
        "deps": ["app"]
      },
      "directives/tabs": {
        "deps": ["app"]
      },
      "filters/twitterfy": {
        "deps": ["app"]
      },
      "interceptors/dispatcher": {
        "deps": ["app"]
      },
      "routes": {
        "deps": ["app"]
      },
      "services/gitHubService": {
        "deps": ["app"]
      },
      "services/messageService": {
        "deps": ["app"]
      },
      "services/personService": {
        "deps": ["app"]
      },
      "views": {
        "deps": ["app"]
      }
    }
  }, ["require", "controllers/gitHubController", "controllers/personController", "controllers/searchHistoryController", "directives/tab", "directives/tabs", "filters/twitterfy", "interceptors/dispatcher", "routes", "services/gitHubService", "services/messageService", "services/personService", "views"], function(require) {
    return require(['bootstrap']);
  });

}).call(this);

/*
//@ sourceMappingURL=main.js.map
*/