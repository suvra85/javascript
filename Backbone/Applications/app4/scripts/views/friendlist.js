define(['jquery', 'backbone', 'mustache','text!views/friendlist.tmpl'], function($, Backbone, mustache,tempalte) {

    var friendlist = Backbone.View.extend({

        el:$('#container'),

        initialize: function() {

            this.data ={"friends": [
                { name: "Sinki",id:1},
                { name: "Niharika",id: 2},
                { name: "Joydeep",id: 3},
                { name: "Rima",id: 4}
                { name: "Nazia",id: 5}

            ]};


            var htmldata =mustache.to_html(tempalte,this.data);


            this.$el.html(htmldata);
        }

    });

    return friendlist;

})
