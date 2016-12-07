WOLF = (function (scope) {
    var usedLifes = 0,
        lifes = document.querySelectorAll('.lifes li'),
        lifesLimit = lifes.length;

    scope.updateLives = function () {
        if(usedLifes !== lifesLimit) {
            for (var i = 0, l = lifesLimit; i < l; i++) {
                if(!lifes[i].classList.contains('used')) {
                    lifes[i].classList.add('used');
                    return false;
                }
            }
        }
    };

    return scope;
})(WOLF);