var HARE = {
    hareId: 'hare',
    hiddenClass: 'hidden',
    isHareVisible: true,
    firstTimeShow: 3500,
    visibleTime: 5000,
    hiddenTime: 4500,
  
    toggleHare: function (boolen) {
        var hare = document.getElementById(this.hareId);

        this.isHareVisible = boolen;

        if(boolen === false) {
            hare.classList.add(this.hiddenClass);
        } else {
            hare.classList.remove(this.hiddenClass);
        }
    }
};