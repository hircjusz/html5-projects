/**
 * Created by Darek on 2015-01-19.
 */
Ext.onReady(function(){

    //************************Plugin Development*************//
    Ext.define("Examples.plugin.GridSearch", {
        extend: 'Ext.util.Observable',
        alias: 'plugin.gridsearch',
        config : {
            iconCls : 'icon-zoom',
            checkIndexes : "all",
            mode : 'local',
            minChars : 1,
            width : 100,
            searchText : 'Search',
            selectAllText : 'Select all',
            position: 'bottom' ,
            paramNames: {
                fields:'fields'
                ,query:'query'
            }
        },
        init: function (cmp) {
            this.grid = cmp.view.up('gridpanel');
            if (this.grid.rendered)
                this.onRender();
            else {
                this.grid.on('render', this.onRender, this);
            }

        },
        onRender : function() {
            var tb = this.getToolbar();
            this.menu = new Ext.menu.Menu();
            this.field = Ext.create("Ext.form.field.Trigger", {
                width : this.width,
                selectOnFocus : undefined === this.selectOnFocus ?
                    true : this.selectOnFocus,
                triggerCls : 'x-form-clear-trigger',
                minLength : this.minLength
            });
            tb.add('->', {
                text : this.searchText,
                menu : this.menu,
                iconCls : this.iconCls
            }, this.field);

        },
        getToolbar: function(){
            var me =this;
            dockedItems = this.grid.getDockedItems();
            toolbar =null;
            hasToolbar=false;

            if(dockedItems.length>0){
                Ext.each(dockedItems,function(item){

                    if(item.xtype=='toolbar' && item.dock==me.position){
                        hasToolbar=true;
                        toolbar=item;
                        return false;
                    }

                });

            }
            if(!hasToolbar){
                toolbar = this.grid.addDocked({
                    xtype: 'toolbar',
                    dock: this.position
                })[0];
            }
            return toolbar;


        }

    });


    //********************************************************//

    Ext.create("Ext.form.field.Trigger",{
        renderTo:Ext.getBody()
    });
    //************************Trigger*********************//
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