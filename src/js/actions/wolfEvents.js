WOLF_NAVIGATION = (function (scope) {
    var clickEventCondition = function (event, trigger) {
            return event.target.classList.contains(WOLF_NAVIGATION.btns[trigger]);
        };

    for (var i = 0, navBtns = WOLF_NAVIGATION.getNavBtn(); i < navBtns.length; i++) {
        navBtns[i].addEventListener('click', function(event) {
            if (clickEventCondition(event, 'topLeft') && WOLF_NAVIGATION.actionsAvailable === true) {
                WOLF.setWolfPose('leftSide', 'topLeft');
            } else if (clickEventCondition(event, 'bottomLeft') && WOLF_NAVIGATION.actionsAvailable === true) {
                WOLF.setWolfPose('leftSide', 'bottomLeft');
            } else if (clickEventCondition(event, 'topRight') && WOLF_NAVIGATION.actionsAvailable === true) {
                WOLF.setWolfPose('rightSide', 'topRight');
            } else if (clickEventCondition(event, 'bottomRight') && WOLF_NAVIGATION.actionsAvailable === true) {
                WOLF.setWolfPose('rightSide', 'bottomRight');
            }
        }, false);
    };

    window.addEventListener('keydown', function(event) {
        if (event.defaultPrevented || WOLF_NAVIGATION.actionsAvailable !== true) {
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

  return scope;
})(WOLF_NAVIGATION);
