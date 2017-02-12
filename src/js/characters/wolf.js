var WOLF = {
    wolfAreaId: 'wolfArea',

    basket: {
        basketClass: 'basket',
        position: {
            topLeft: 'onTopLeft',
            topRight: 'onTopRight',
            bottomLeft: 'onBottomLeft',
            bottomRight: 'onBottomRight',
            currentPosition: null,
            defaultPosition: function() {return this.bottomLeft}
        },

        renderBasket: function() {
            basketElement = document.createElement('span');
            basketElement.classList.add(this.basketClass, this.position.defaultPosition());

            return basketElement;
        }
    },

    wolfBody: {
        wolfId: 'wolf',
        position: {
            leftSide: 'onLeft',
            rightSide: 'onRight',
            currentSide: null
        },

        renderWolf: function() {
            wolfBodyElement = document.createElement('div');
            wolfBodyElement.setAttribute('id', (this.wolfId));
            wolfBodyElement.appendChild(WOLF.basket.renderBasket());

            return wolfBodyElement;
        }
    },

    updateCurrentBasketPosition: function(current) {
        if (current === 'default') {
            this.basket.position.currentPosition = null;
        } else {
            this.basket.position.currentPosition = current.toLowerCase();
        }
    },

    getCurrentBasketPosition: function() {
        return this.basket.position.currentPosition;
    },

    updateCurrentWolfSide: function(current) {
        this.wolfBody.position.currentPosition = current.toLowerCase().split('on')[1];
    },

    getCurrentWolfSide: function () {
        return this.wolfBody.position.currentPosition;
    },

    resetWolfPosition: function () {
        this.resetWolfSide();
        this.setBasketPosition('default');
    },

    render: function () {
        document.getElementById(this.wolfAreaId).appendChild(this.wolfBody.renderWolf());
    }
};