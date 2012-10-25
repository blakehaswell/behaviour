var BehaviourElem = function ($elem, obj) {
    this.obj = $.extend({}, obj);
    this.obj.$elem = $elem;
    this.bindEvents();
    this.init();
};

BehaviourElem.prototype = {
    bindEvents: function () {
        if (this.obj.events !== undefined) {
            $.each(this.obj.events, $.proxy(this.bindEvent, this));
        }
    },
    
    bindEvent: function (event, fn) {
        // When the event is triggered we create a reference to the event, then call the function.
        this.obj.$elem.on(event, $.proxy(function (event) {
            this.obj.event = event;
            fn.call(this.obj);
        }, this));
    },
    
    init: function () {
        if (this.obj.init !== undefined) {
            this.obj.init.call(this.obj);
        }
    }
};