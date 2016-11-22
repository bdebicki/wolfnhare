var WOLFNAVIGATION = {
    options: {
        navId: 'wolfNavigation',
        navBtnClass: 'navigationBtn',
        topLeftBtnClass: 'topLeft',
        bottomLeftBtnClass: 'bottomLeft',
        topRightBtnClass: 'topRight',
        bottomRightBtnClass: 'bottomRight'
    },

    navBtn: function() {
        return document.getElementById(this.options.navId).getElementsByClassName(this.options.navBtnClass);
    }
};
