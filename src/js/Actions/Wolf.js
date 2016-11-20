WOLF = (function (scope) {
    scope.setWolfPosition = function (side) {
        var wolfElement = document.getElementById(this.wolfBody.wolfId),
            wolfSide = this.wolfBody[side];

        wolfElement.classList.add(wolfSide);
    };

    return scope;
})(WOLF);