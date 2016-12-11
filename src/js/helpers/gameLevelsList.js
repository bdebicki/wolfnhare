GAME = (function (scope) {
    scope.lvls = [
        null,
        {eggsAtOnce: 1, startPoints: 0},
        {eggsAtOnce: 2, startPoints: 5},
        {eggsAtOnce: 3, startPoints: 10},
        {eggsAtOnce: 4, startPoints: 50},
        {eggsAtOnce: 5, startPoints: 90},
        {eggsAtOnce: 3, startPoints: 100}
    ];

    return scope;
})(GAME);