LEVELS = (function (scope) {
    scope.lvlsList = [
        null,
        {eggsAtOnce: 1, startPoints: 0},
        {eggsAtOnce: 2, startPoints: 5},
        {eggsAtOnce: 3, startPoints: 10},
        {eggsAtOnce: 4, startPoints: 50},
        {eggsAtOnce: 5, startPoints: 90},
        {eggsAtOnce: 3, startPoints: 100},
        {eggsAtOnce: 4, startPoints: 110}, // temporary lvl
        {eggsAtOnce: 5, startPoints: 150} // temporary lvl
    ];

    return scope;
})(LEVELS);