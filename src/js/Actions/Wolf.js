WOLF = (function (scope) {
    scope.setWolfPosition = function (side) {
        var wolfElement = document.getElementById(this.wolfBody.wolfId),
            wolfSide = this.wolfBody[side];

        if (!wolfElement.classList.contains(wolfSide)) {
            wolfElement.classList.remove(this.wolfBody.onLeftSide, this.wolfBody.onRightSide);
            wolfElement.classList.add(wolfSide);
        } else {
            return null;
        }
    }

    return scope;
})(WOLF);