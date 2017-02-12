WOLF = (function (scope) {
    scope.resetWolfSide = function () {
        document.getElementById(scope.wolfBody.wolfId).classList.remove(this.wolfBody.position.leftSide, this.wolfBody.position.rightSide);
    };

    scope.setWolfSide = function (side) {
        scope.updateCurrentWolfSide(side);

        var wolfElement = document.getElementById(scope.wolfBody.wolfId),
            wolfSide = this.wolfBody.position[side];

        if (!wolfElement.classList.contains(wolfSide)) {
            this.resetWolfSide();
            wolfElement.classList.add(wolfSide);
        } else {
            return null;
        }
    };

    scope.setBasketPosition = function (position) {
        scope.updateCurrentBasketPosition(position);

        var basketElement = document.getElementsByClassName(scope.basket.basketClass)[0];

        if (position === 'default') {
            var basketPosition = this.basket.position.defaultPosition();
        } else {
            var basketPosition = this.basket.position[position];
        }
        if (!basketElement.classList.contains(basketPosition)) {
            basketElement.classList.remove(this.basket.position.topLeft, this.basket.position.topRight, this.basket.position.bottomLeft, this.basket.position.bottomRight);
            basketElement.classList.add(basketPosition);
        } else {
            return null;
        }
    };

    scope.setWolfPose = function (wolfSide, basketPosition) {
        this.setWolfSide(wolfSide);
        this.setBasketPosition(basketPosition);
    };

    return scope;
})(WOLF);