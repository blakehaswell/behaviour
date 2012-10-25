var Behaviour = function (name, obj) {
    this.name = name;
    this.obj = obj;
};

Behaviour.prototype = {
    init: function () {
        this.findElems().each($.proxy(function (index, elem) {
            new BehaviourElem($(elem), this.obj);
        }, this));
    },
    
    findElems: function () {
        return $(Behaviour.currentEvent.target).find("[data-behaviour~='" + this.name + "']");
    }
};



// Initialise an array to store all behaviours.
Behaviour.behaviours = [];

Behaviour.add = function (name, obj) {
    this.behaviours.push(new Behaviour(name, obj));
};

Behaviour.run = function () {
    $.each(this.behaviours, function (index, behaviour) {
        behaviour.init();
    });
};



$(document).on("ready jsContentLoaded", function (e) {
    Behaviour.currentEvent = e;
    Behaviour.run();
});