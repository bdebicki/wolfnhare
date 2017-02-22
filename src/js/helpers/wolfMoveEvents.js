WOLF = (function (scope) {
    var clickEventCondition = function (event, trigger) {
            return event.target.classList.contains(WOLFNAVIGATION.btns[trigger]);
        };

    window.addEventListener('keydown', function(event) {
        if (event.defaultPrevented || WOLFNAVIGATION.actionsAvailable !== true) {
            return null;
        }

        switch (event.key) {
            case GAME.navKey.leftTop:
                WOLF.setWolfPose('leftSide', 'topLeft');
                break;
            case GAME.navKey.leftBottom:
                WOLF.setWolfPose('leftSide', 'bottomLeft');
                break;
            case GAME.navKey.rightTop:
                WOLF.setWolfPose('rightSide', 'topRight');
                break;
            case GAME.navKey.rightBottom:
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