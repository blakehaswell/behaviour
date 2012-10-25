Behaviour.add("demo", {
    init: function () {
        this.$elem.css("background-color", "#00f");
    },
    
    events: {
        mouseenter: function () {
            this.$elem.css("background-color", "#f00");
            this.$elem.text(this.event.type);
        },
        
        mouseleave: function () {
            this.$elem.css("background-color", "#00f");
            this.$elem.text(this.event.type);
        }
    }
});