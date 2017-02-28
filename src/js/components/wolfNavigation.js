var WOLF_NAVIGATION = {
    navId: 'wolfNavigation',
    navBtnClass: 'navigationBtn',
    btns: {
        topLeft: 'topLeft',
        bottomLeft: 'bottomLeft',
        topRight: 'topRight',
        bottomRight: 'bottomRight'
    },
    actionsAvailable: false,

    getNavBtn: function() {
        return document.getElementById(this.navId).getElementsByClassName(this.navBtnClass);
    }
};
