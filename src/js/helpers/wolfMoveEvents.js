WOLF = (function (scope) {
    var leftTopKey = 's',
        leftBottomKey = 'x',
        rightTopKey = 'l',
        rightBottomKey = ',',
        clickEventCondition = function (event, trigger) {
            return event.target.classList.contains(WOLFNAVIGATION[trigger]);
        };

    window.addEventListener('keydown', function(event) {
        if (event.defaultPrevented) {
            return null;
        }

        if (WOLFNAVIGATION.actionsAvailable === true) {
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
        }

        event.preventDefault();
    }, false);

    for (var i = 0, navBtns = WOLFNAVIGATION.navBtn(); i < navBtns.length; i++) {
        navBtns[i].addEventListener('click', function(event) {
            if (clickEventCondition(event, 'topLeftBtn') && WOLFNAVIGATION.actionsAvailable === true) {
                WOLF.setWolfPose('onLeftSide', 'onTopLeft');
            } else if (clickEventCondition(event, 'bottomLeftBtn') && WOLFNAVIGATION.actionsAvailable === true) {
                WOLF.setWolfPose('onLeftSide', 'onBottomLeft');
            } else if (clickEventCondition(event, 'topRightBtn') && WOLFNAVIGATION.actionsAvailable === true) {
                WOLF.setWolfPose('onRightSide', 'onTopRight');
            } else if (clickEventCondition(event, 'bottomRightBtn') && WOLFNAVIGATION.actionsAvailable === true) {
                WOLF.setWolfPose('onRightSide', 'onBottomRight');
            }
        }, false);
    };

    return scope;
})(WOLF);