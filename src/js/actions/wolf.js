WOLF = (function (scope) {
    scope.resetWolfSide = function () {
        document.getElementById(scope.wolfBody.wolfId).classList.remove(this.wolfBody.position.leftSide.cssClass, this.wolfBody.position.rightSide.cssClass);
    };

    scope.setWolfSide = function (side) {
        scope.updateCurrentWolfState(side);

        var wolfElement = document.getElementById(scope.wolfBody.wolfId),
            wolfSide = this.wolfBody.position[side].cssClass;

        console.log(side, wolfSide);

        if (!wolfElement.classList.contains(wolfSide)) {
            this.resetWolfSide();
            wolfElement.classList.add(wolfSide);
        } else {
            return null;
        }
    };

    scope.setBasketPosition = function (position) {
        scope.updateBasketState(position);

        var basketElement = document.getElementsByClassName(scope.basket.basketClass)[0];

        if (position === 'default') {
            var basketPosition = this.basket.position.defaultPosition.cssClass();
        } else {
            var basketPosition = this.basket.position[position].cssClass;
        }
        if (!basketElement.classList.contains(basketPosition)) {
            basketElement.classList.remove(this.basket.position.topLeft.cssClass, this.basket.position.topRight.cssClass, this.basket.position.bottomLeft.cssClass, this.basket.position.bottomRight.cssClass);
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