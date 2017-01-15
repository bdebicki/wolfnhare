WOLF = (function (scope) {
    scope.usedLifes = 0;
    scope.lifesLimit = 3;

    rendersimpleLife = function (counter) {
        var life = document.createElement('li');
        life.innerHTML = counter;

        return life;
    };

    scope.renderLifes = function () {
        var fragment = document.createDocumentFragment();

        var lifesContainer = document.createElement('ul');

        for (var i=1; i <= scope.lifesLimit; i++) {
            fragment.appendChild(rendersimpleLife(i));
        }

        lifesContainer.appendChild(fragment);
        document.getElementById('gameBody').appendChild(lifesContainer);
    };

    scope.updateLives = function () {
    };

    return scope;
})(WOLF);