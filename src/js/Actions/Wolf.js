WOLF = (function (scope) {
    scope.setWolfPosition = function (side) {
        var wolfElement = document.getElementById(scope.wolfBody.wolfId),
            wolfSide = this.wolfBody[side];

        if (!wolfElement.classList.contains(wolfSide)) {
            wolfElement.classList.remove(this.wolfBody.onLeftSide, this.wolfBody.onRightSide);
            wolfElement.classList.add(wolfSide);
        } else {
            return null;
        }
    };

    scope.setBasketPosition = function (position) {
        var basketElement = document.getElementsByClassName(scope.basket.basketClass)[0],
            basketPosition = this.basket[position];
        console.log(basketElement);

        if (!basketElement.classList.contains(basketPosition)) {
            basketElement.classList.remove(this.basket.onTopLeft, this.basket.onTopRight, this.basket.onBottomLeft, this.basket.onBottomRight);
            basketElement.classList.add(basketPosition);
        } else {
            return null;
        }
    };

    return scope;
})(WOLF);