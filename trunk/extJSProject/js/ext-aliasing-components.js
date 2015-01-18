
    Ext.onReady(function(){

    Ext.define('Customer.support.SupportMessage', {
        extend: 'Ext.panel.Panel',
        alias: 'widget.supportMessage',
        title: 'Customer Support',
        html: 'Customer support is online'
    });

    Ext.application({
        name: 'Customer',
        launch: function(){
            Ext.create('Ext.container.Viewport', {
                layout: 'fit',
                items: [{
                    xtype: 'supportMessage'
                }]
            });
        }
    });

});