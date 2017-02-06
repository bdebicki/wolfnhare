WOLF = (function (scope) {
    scope.resetWolfSide = function () {
        document.getElementById(scope.wolfBody.wolfId).classList.remove(this.wolfBody.onLeftSide, this.wolfBody.onRightSide);
    };

    scope.setWolfSide = function (side) {
        scope.updateCurrentWolfSide(side);

        var wolfElement = document.getElementById(scope.wolfBody.wolfId),
            wolfSide = this.wolfBody[side];

        if (!wolfElement.classList.contains(wolfSide)) {
            this.resetWolfSide();
            wolfElement.classList.add(wolfSide);
        } else {
            return null;
        }
    };

    scope.setBasketPosition = function (position) {
        scope.updateCurrentBasketPosition(position);

        var basketElement = document.getElementsByClassName(scope.basket.basketClass)[0],
            basketPosition = this.basket[position];

        if (!basketElement.classList.contains(basketPosition)) {
            basketElement.classList.remove(this.basket.onTopLeft, this.basket.onTopRight, this.basket.onBottomLeft, this.basket.onBottomRight);
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