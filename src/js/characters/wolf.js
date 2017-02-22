var WOLF = {
    wolfAreaId: 'wolfArea',

    basket: {
        basketClass: 'basket',
        position: {
            topLeft: {
                cssClass: 'onTopLeft',
                state: 'topLeft',
                wolfSide: 'leftSide'
            },
            topRight: {
                cssClass: 'onTopRight',
                state: 'topRight',
                wolfSide: 'rightSide'
            },
            bottomLeft: {
                cssClass: 'onBottomLeft',
                state: 'bottomLeft',
                wolfSide: 'leftSide'
            },
            bottomRight: {
                cssClass: 'onBottomRight',
                state: 'bottomRight',
                wolfSide: 'rightSide'
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

    render: function () {
        document.getElementById(this.wolfAreaId).appendChild(this.wolfBody.renderWolf());
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

    resetWolfSide: function () {
        document.getElementById(this.wolfBody.wolfId).classList.remove(this.wolfBody.position.leftSide.cssClass, this.wolfBody.position.rightSide.cssClass);
    },

    setWolfSide: function (side) {
        this.updateWolfState(side);

        var wolfElement = document.getElementById(this.wolfBody.wolfId),
            wolfSide = this.wolfBody.position[side].cssClass;

        if (!wolfElement.classList.contains(wolfSide)) {
            this.resetWolfSide();
            wolfElement.classList.add(wolfSide);
        } else {
            return null;
        }
    },

    setBasketPosition: function (position) {
        this.updateBasketState(position);

        var basketElement = document.getElementsByClassName(this.basket.basketClass)[0];

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
    },

    setWolfPose: function (wolfSide, basketPosition) {
        this.setWolfSide(wolfSide);
        this.setBasketPosition(basketPosition);
    },

    autoSetWolfPose: function () {
        var actualWolfSide = WOLF.basket.position[CHICKENS.getCurrentChicken()].wolfSide;

        WOLF.setWolfPose(actualWolfSide, CHICKENS.getCurrentChicken());
    }

};