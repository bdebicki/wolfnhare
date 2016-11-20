var wolf = {
    wolfAreaId: 'wolfArea',

    basket: {
        basketClass: 'basket',
        onTopLeft: 'onTopLeft',
        onTopRight: 'onTopRight',
        onBottomLeft: 'onBottomLeft',
        onBottomRight: 'onBottomRight',
        defaultPosition: function() {return this.onBottomLeft},

        renderBasket: function() {
            basketElement = document.createElement('span');
            basketElement.classList.add(this.basketClass, this.defaultPosition());

            return basketElement;
        }
    },

    wolfBody: {
        wolfId: 'wolf',

        renderWolf: function() {
            wolfBodyElement = document.createElement('div');
            wolfBodyElement.setAttribute('id', (this.wolfId));
            wolfBodyElement.appendChild(wolf.basket.renderBasket());

            return wolfBodyElement;
        }
    },

    render: function () {
        document.getElementById(this.wolfAreaId).appendChild(this.wolfBody.renderWolf());
    }
};

wolf.render();