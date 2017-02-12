WOLF = (function (scope) {
    var leftTopKey = 's',
        leftBottomKey = 'x',
        rightTopKey = 'l',
        rightBottomKey = ',',
        clickEventCondition = function (event, trigger) {
            return event.target.classList.contains(WOLFNAVIGATION.btns[trigger]);
        };

    window.addEventListener('keydown', function(event) {
        if (event.defaultPrevented || WOLFNAVIGATION.actionsAvailable !== true) {
            return null;
        }

        switch (event.key) {
            case leftTopKey:
                WOLF.setWolfPose('leftSide', 'topLeft');
                break;
            case leftBottomKey:
                WOLF.setWolfPose('leftSide', 'bottomLeft');
                break;
            case rightTopKey:
                WOLF.setWolfPose('rightSide', 'topRight');
                break;
            case rightBottomKey:
                WOLF.setWolfPose('rightSide', 'bottomRight');
                break;
            default:
                return null;
        }

        event.preventDefault();
    }, false);

    for (var i = 0, navBtns = WOLFNAVIGATION.getNavBtn(); i < navBtns.length; i++) {
        navBtns[i].addEventListener('click', function(event) {
            if (clickEventCondition(event, 'topLeft') && WOLFNAVIGATION.actionsAvailable === true) {
                WOLF.setWolfPose('leftSide', 'topLeft');
            } else if (clickEventCondition(event, 'bottomLeft') && WOLFNAVIGATION.actionsAvailable === true) {
                WOLF.setWolfPose('leftSide', 'bttomLeft');
            } else if (clickEventCondition(event, 'topRight') && WOLFNAVIGATION.actionsAvailable === true) {
                WOLF.setWolfPose('rightSide', 'topRight');
            } else if (clickEventCondition(event, 'bottomRight') && WOLFNAVIGATION.actionsAvailable === true) {
                WOLF.setWolfPose('rightSide', 'bottomRight');
            }
        }, false);
    };

    return scope;
})(WOLF);