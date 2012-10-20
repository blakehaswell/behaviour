var Behaviour = function (name, obj) {
    this.name = name;
    this.obj = obj;
};

Behaviour.prototype = {
    init: function () {
        // Find elements with this behaviour and instantiate `BehaviourElem` objects.
        this.findElem(this.name).each($.proxy(function (index, $elem) {
            new BehaviourElem($elem, this.obj);
        }, this));
    },
    
    findElem: function (name) {
        return $(behaviour.currentEvent.target).find("[data-behaviour~='" + name + "']");
    }
};





var BehaviourElem = function ($elem, obj) {
    this.obj = $.extend({}, obj);
    this.obj.$elem = $elem;
    this.bindEvents();
    this.init();
};

BehaviourElem.prototype = {
    bindEvents: function () {
        if (this.obj.events !== undefined) {
            $.each(this.obj.events, $.proxy(this.bindEvent(event, fn), this));
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





var behaviour = {};

behaviour.init = function () {
    // Initialise an array to store all behaviours.
    this.behaviours = [];
    
    $(document).on("ready jsContentLoaded", $.proxy(function (e) {
        this.currentEvent = e;
        this.run();
    }, this));
};

behaviour.run = function () {
    $.each(this.behaviours, function (index, behaviour) {
        behaviour.init();
    });
};

behaviour.add = function (name, obj) {
    this.behaviours.push(new Behaviour(name, obj));
};

behaviour.init();