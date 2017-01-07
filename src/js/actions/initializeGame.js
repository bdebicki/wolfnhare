GAME = (function (scope) {
    scope.initialize = function() {
      WOLF.render();
      scope.renderDefaultScore();
      WOLF.renderLifes();
    };

    return scope;
})(GAME);

GAME.initialize();