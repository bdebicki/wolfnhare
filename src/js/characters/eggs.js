var EGGS = {
    eggClass: 'egg',

    renderEgg: function(chicken) {
        var egg = document.createElement('span');

        egg.classList.add(this.eggClass);
        egg.setAttribute('data-step', '1');
        chicken.appendChild(egg);
    },

    removeEGG: function(egg) {
        document.removeChild(egg);
    }
};