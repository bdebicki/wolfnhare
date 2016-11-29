EGGS = (function (scope) {
    scope.updateStep = function(egg) {
        var currentStep = parseInt(egg.dataset.eggStep);

        if(currentStep < scope.maxStep) {
            egg.dataset.eggStep = currentStep + 1;
        } else {
            scope.removeEgg(egg);
            clearInterval(window['egg' + this.currentId]);
        }
    };

    return scope;
})(EGGS);