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
            leftSide: {
                cssClass: 'onLeft',
                state: 'left'
            },
            rightSide: {
                cssClass: 'onRight',
                state: 'right'
            },
            currentPosition: {
                state: null
            }
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

    getCurrentBasketState: function() {
        return this.basket.position.currentPosition.state;
    },

    updateWolfState: function(current) {
        if (current === 'default') {
            this.wolfBody.position.currentPosition.state = null;
        } else {
            this.wolfBody.position.currentPosition.state = this.wolfBody.position[current].state;
        }
    },

    getCurrentWolfState: function () {
        return this.wolfBody.position.currentPosition.state;
    },

    resetWolfPosition: function () {
        this.resetWolfSide();
        this.updateWolfState('default');
        this.setBasketPosition('default');
    },

    render: function () {
        document.getElementById(this.wolfAreaId).appendChild(this.wolfBody.renderWolf());
    }
};