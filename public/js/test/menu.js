/**
 * Created by Wangyao on 2015/7/15.
 */

semantic.menu = {};

semantic.menu.ready = function() {
    var $menuItem = $('.ui.container .menu a.item, .menu .link.item');

    var handler = {
        activate: function() {
            if(!$(this).hasClass('dropdown browse')) {
                $(this)
                    .addClass('active')
                    .closest('.ui.menu')
                    .find('.item')
                    .not($(this))
                    .removeClass('active')
                ;
            }
        }
    };

    $menuItem.on('click', handler.activate);
};

$(document).ready(semantic.menu.ready);