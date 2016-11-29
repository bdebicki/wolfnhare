var EGGS = {
    eggClass: 'egg',
    currentId: 0,
    initialId: 1,
    initialStep: 1,
    maxStep: 5,

    renderEgg: function(chicken) {
        var egg = document.createElement('span');

        egg.classList.add(this.eggClass);
        egg.setAttribute('data-egg-step', this.initialStep);
        egg.setAttribute('id', this.initialId);
        chicken.appendChild(egg);

        this.currentId = this.initialId;
        this.initialId = this.initialId + 1;
    },

    removeEgg: function(egg) {
        document.removeChild(egg);
    }
};


