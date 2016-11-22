var WOLFNAVIGATION = {
    options: {
        navId: 'wolfNavigation',
        navBtnClass: 'navigationBtn',
        topLeftBtnClass: 'topLeft',
        bottomLeftBtnClass: 'bottomLeft',
        topRightBtnClass: 'topRight',
        bottomRightBtnClass: 'bottomRight'
    },

    nav: function() {
        return document.getElementById(this.options.navId);
    },

    navBtn: function() {
        return this.nav().getElementsByClassName(this.options.navBtnClass);
    },

    topLeftButton: function() {
        return this.navigation().getElementsByClassName(this.options.topLeftBtnClass)[0];
    },
    bottomLeftButton: function() {
        return this.navigation().getElementsByClassName(this.options.bottomLeftBtnClass)[0];
    },
    topRightButton: function() {
        return this.navigation().getElementsByClassName(this.options.topRightBtnClass)[0];
    },
    bottomRightButton: function() {
        return this.navigation().getElementsByClassName(this.options.bottomRightBtnClass)[0];
    }
};
