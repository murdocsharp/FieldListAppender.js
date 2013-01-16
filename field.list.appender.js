(function ($) {
    $.fn.FieldListAppender = function (opts) {

        // default configuration
        var config = $.extend({}, {
            newField: '<input type="text" />',
            currentListIndex: 1,
            lastItemClass: 'last-item',
            focusInputType: 'input'
        }, opts);

        var currentIndex = config.currentListIndex;
        var container = this;

        container.on('change', '.' + config.lastItemClass, function () {
            currentIndex++;
            $(this).removeClass(config.lastItemClass);

            var newFieldHtml = config.newField;
            newFieldHtml = newFieldHtml.replace('{{index}}', currentIndex);

            var $newField = $(newFieldHtml).appendTo(container);

            var $newInput = $newField.find(config.focusInputType);
            $newInput.focus();
        });

        return this;
    };
})(jQuery);
