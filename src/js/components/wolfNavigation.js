var WOLFNAVIGATION = {
    navId: 'wolfNavigation',
    navBtnClass: 'navigationBtn',
    topLeftBtn: 'topLeft',
    bottomLeftBtn: 'bottomLeft',
    topRightBtn: 'topRight',
    bottomRightBtn: 'bottomRight',
    actionsAvailable: false,

    getNavBtn: function() {
        return document.getElementById(this.navId).getElementsByClassName(this.navBtnClass);
    }
};
