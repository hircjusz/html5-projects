/**
 * Created by Darek on 2015-01-19.
 */
Ext.onReady(function(){



    //************************Plugin Development*************//
    Ext.define("Examples.plugin.GridSearch", {
        extend: 'Ext.util.Observable',
        alias: 'plugin.gridsearch',

        init: function (cmp) {
            this.grid = cmp.view.up('gridpanel');
            if (this.grid.rendered)
                this.onRender();
            else {
                this.grid.on('render', this.onRender, this);
            }

        },
        onRender : function() {


        }

    });


    //********************************************************//
    var movieStore = Ext.create("Ext.data.Store", {
        fields: ["title", "rent", "buy"],
        data: [
            { title: "Forrest Gump", rent: 2.99, buy: 6.99 },
            { title: "Cast Away", rent: 3.99, buy: 13.46 },
            { title: "Apollo 13", rent: 3.99, buy: 7.99 }
        ]
    });





        Ext.create("Ext.grid.Panel", {
            store: movieStore,
            title : "Tom Hanks collection",
            renderTo : Ext.getBody(),
            width : 350,
            plugins : [
                'gridsearch'
            ],
            columns: [
                {
                    text: 'Movie',
                    dataIndex: 'title'
                },
                {
                    text: 'Rent',
                    dataIndex: 'rent'
                },
                {
                    text: 'Buy',
                    dataIndex: 'buy'
                }
            ]
        });

});