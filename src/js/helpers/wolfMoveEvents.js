WOLF = (function (scope) {
    window.addEventListener('keydown', function(event) {
        var leftTopKey = 's',
            leftBottomKey = 'x',
            rightTopKey = 'l',
            rightBottomKey = ',';

        if (event.defaultPrevented) {
            return null;
        }

        switch (event.key) {
            case leftTopKey:
                WOLF.setWolfPose('onLeftSide', 'onTopLeft');
                break;
            case leftBottomKey:
                WOLF.setWolfPose('onLeftSide', 'onBottomLeft');
                break;
            case rightTopKey:
                WOLF.setWolfPose('onRightSide', 'onTopRight');
                break;
            case rightBottomKey:
                WOLF.setWolfPose('onRightSide', 'onBottomRight');
                break;
            default:
                return null;
        }

        event.preventDefault();
    }, false);

    for (var i = 0, navBtns = WOLFNAVIGATION.navBtn(); i < navBtns.length; i++) {
        navBtns[i].addEventListener('click', function(event) {
            if (event.target.classList.contains(WOLFNAVIGATION.topLeftBtn)) {
                WOLF.setWolfPose('onLeftSide', 'onTopLeft');
            } else if (event.target.classList.contains(WOLFNAVIGATION.bottomLeftBtn)) {
                WOLF.setWolfPose('onLeftSide', 'onBottomLeft');
            } else if (event.target.classList.contains(WOLFNAVIGATION.topRightBtn)) {
                WOLF.setWolfPose('onRightSide', 'onTopRight');
            } else if (event.target.classList.contains(WOLFNAVIGATION.bottomRightBtn)) {
                WOLF.setWolfPose('onRightSide', 'onBottomRight');
            }
        }, false);
    };

    return scope;
})(WOLF);