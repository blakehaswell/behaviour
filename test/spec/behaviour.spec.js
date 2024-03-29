describe("Behaviour", function () {
    
    describe("The `add` method", function () {
        
        var behaviourArrayLength;
        
        beforeEach(function () {
            behaviourArrayLength = Behaviour.behaviours.length;
        });
        
        it("Adds an item to the behaviours array", function () {
            Behaviour.add("testBehaviour1", {});
            
            expect(Behaviour.behaviours.length).toEqual(behaviourArrayLength + 1);
        });
        
        it("Adds Behaviour objects to the behaviours array", function () {
            Behaviour.add("testBehaviour2", {});
            
            expect(Behaviour.behaviours[behaviourArrayLength].name).toEqual("testBehaviour2");
            expect(Behaviour.behaviours[behaviourArrayLength].obj).toEqual({});
        });
        
    });
    
    describe("Behaviour objects", function () {
        
        describe("The `init` method", function  () {
            
            xit("Runs on document ready", function () {
                // Document ready has already run. Not sure how to test this...
            });
            
            it("Runs on jsContentLoaded", function () {
                var initFn = sinon.spy();
                
                Behaviour.add("initTest", {
                    init: initFn
                });
                
                $(document).trigger("jsContentLoaded");
                
                expect(initFn.calledOnce).toBeTruthy();
            });
            
            xit("Runs with the correct context", function () {});
            
        });
        
        xdescribe("The `events` object", function () {
            
            it("runs the assigned method when the event is triggered on the element", function () {});
            
            it("does not run the assigned method when the event is triggered on non-child elements", function () {});
            
            it("runs methods with the correct context", function () {});
            
        });
        
    });
    
});