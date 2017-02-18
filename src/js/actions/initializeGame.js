GAME = (function (scope) {
    scope.initialize = function() {
      WOLF.render();
      setTimeout(function () {
        scope.startDemo();
      }, 30);
    };

    return scope;
})(GAME);

GAME.initialize();