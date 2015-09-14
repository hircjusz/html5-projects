
Ext.onReady(function(){

    Ext.define('Examples.plugin.ClearButton', {
        alias:'clearbutton',
        init:function(textField){

        }

    });

    Ext.define('ext.view.clearbutton.ClearButtonPanel',{
        extend:'Ext.Panel',
        renderTo:'panel',
        constructor : function(config) {
            Ext.apply(this, {
                modal : true,
                width : 300,
                height : 230,
                title : 'ClearButton plugin',
                layout : 'fit',
                autoRender:'true',
                items : [],
                buttons : [{
                    text : 'OK',
                    handler : function() {
                        this.close();
                    },
                    scope : this
                }]
            });
            //this.callParent(arguments);
        }
    });
    var clearButtonPanel = Ext.create('ext.view.clearbutton.ClearButtonPanel');
     clearButtonPanel.render('panel');
});