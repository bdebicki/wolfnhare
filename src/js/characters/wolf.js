var WOLF = {
    wolfAreaId: 'wolfArea',

    basket: {
        basketClass: 'basket',
        onTopLeft: 'onTopLeft',
        onTopRight: 'onTopRight',
        onBottomLeft: 'onBottomLeft',
        onBottomRight: 'onBottomRight',
        currentPosition: null,
        defaultPosition: function() {return this.onBottomLeft},

        renderBasket: function() {
            basketElement = document.createElement('span');
            basketElement.classList.add(this.basketClass, this.defaultPosition());

            return basketElement;
        }
    },

    wolfBody: {
        wolfId: 'wolf',
        onLeftSide: 'onLeft',
        onRightSide: 'onRight',

        renderWolf: function() {
            wolfBodyElement = document.createElement('div');
            wolfBodyElement.setAttribute('id', (this.wolfId));
            wolfBodyElement.appendChild(WOLF.basket.renderBasket());

            return wolfBodyElement;
        }
    },

    updateCurrentBasketPosition: function(current) {
        this.basket.currentPosition = current.toLowerCase().split('on')[1];
    },

    getCurrentBasketPosition: function() {
        return this.basket.currentPosition;
    },

    render: function () {
        document.getElementById(this.wolfAreaId).appendChild(this.wolfBody.renderWolf());
    }
};