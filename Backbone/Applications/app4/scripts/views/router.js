define("Router",["backbone","views/friendlist"],function(Backbone,friendlist){

    var AppRouter = Backbone.Router.extend({
        routes: {
            "": "index",
            'about': "about",
            "friends/:id": "getFriend",
            "*actions": "defaultRoute"

        },
        index: function() {
            console.log("hi")
            new friendlist();


        },
        about: function() {
                    console.log("hi")


        },
        getFriend:function(id)
        {
            console.log(id)

        }

    });

var app=new AppRouter;
Backbone.history.start();
return app;

});