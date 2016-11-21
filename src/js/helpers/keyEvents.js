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