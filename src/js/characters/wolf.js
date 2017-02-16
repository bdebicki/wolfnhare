var WOLF = {
    wolfAreaId: 'wolfArea',

    basket: {
        basketClass: 'basket',
        position: {
            topLeft: {
                cssClass: 'onTopLeft',
                state: 'topLeft'
            },
            topRight: {
                cssClass: 'onTopRight',
                state: 'topRight'
            },
            bottomLeft: {
                cssClass: 'onBottomLeft',
                state: 'bottomLeft'
            },
            bottomRight: {
                cssClass: 'onBottomRight',
                state: 'bottomRight'
            },
            currentPosition: {
                state: null
            },
            defaultPosition: {
                cssClass: function () {return WOLF.basket.position.bottomLeft.cssClass},
                state: function () {return WOLF.basket.position.currentPosition.state}
            }
        },

        renderBasket: function() {
            basketElement = document.createElement('span');
            basketElement.classList.add(WOLF.basket.basketClass, WOLF.basket.position.defaultPosition.cssClass());

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

    updateBasketState: function(current) {
        if (current === 'default') {
            this.basket.position.currentPosition.state = this.basket.position.defaultPosition.state();
        } else {
            this.basket.position.currentPosition.state = this.basket.position[current].state;
        }
    },

    getCurrentBasketPosition: function() {
        return this.basket.position.currentPosition.state;
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