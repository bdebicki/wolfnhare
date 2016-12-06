GAME = (function (scope) {
    scope.initialize = function() {
      WOLF.render();
      scope.renderDefaultScore();
    };

    return scope;
})(GAME);

GAME.initialize();