behaviour.add("demo", {
    init: function () {
        this.$elem.css("background-color", "#00f");
    },
    
    events: {
        mouseenter: function () {
            this.$elem.css("background-color", "#f00");
        },
        
        mouseleave: function () {
            this.$elem.css("background-color", "#00f");
        }
    }
});