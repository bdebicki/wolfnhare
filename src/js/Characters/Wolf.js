var wolf = {
    wolfCharacter: null,
    basket: null,

    wolfId: 'wolf',
    wolfAreaId: 'wolfArea',

    renderBasket: function() {
        basket = document.createElement('span');
        basket.classList.add('basket', 'onBottomLeft');

        return basket;
    },

    renderWolf: function() {
        wolfCharacter = document.createElement('div');
        wolfCharacter.setAttribute('id', (this.wolfId));
        wolfCharacter.appendChild(this.renderBasket());

        return wolfCharacter;
    },

    render: function () {
        document.getElementById(this.wolfAreaId).appendChild(this.renderWolf());
    }
};

wolf.render();