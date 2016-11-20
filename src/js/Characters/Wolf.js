var wolf = {
    wolfId: 'wolf',
    wolfAreaId: 'wolfArea',
    defaultPosition: 'centered',

    renderWolf: function() {
        var wolfCharacter = document.createElement('div');

        wolfCharacter.setAttribute('id', (this.wolfId));
        wolfCharacter.classList.add(wolf.defaultPosition);

        document.getElementById(this.wolfAreaId).appendChild(wolfCharacter);
    }
};

wolf.renderWolf();