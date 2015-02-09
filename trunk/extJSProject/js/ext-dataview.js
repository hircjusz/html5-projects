/**
 * Created by Darek on 2015-01-20.
 */
Ext.onReady(function(){

    var crewStore = new Ext.data.ArrayStore({
        storeId: 'crewStore',
        idIndex: 0,
        fields: [
            'name',
        ],
        data: [['alan'],['bob'],['caroline'],['dylan']]
    });

    var tpl = '<tpl for="."><div class="thumb-wrap" id="{name}"><a href="mailto:{name}@somewhere.com">{name}</a></div></tpl>';

    var dataPanel = new Ext.Panel({
        id: 'dataPanel',
        frame: false,
        layout: 'fit',
        items: new Ext.DataView({
            store: crewStore,
            tpl: tpl,
            autoHeight: true,
            multiSelect: true,
            singleSelect: false,
            frame: true,
            itemId: 'dataView',
            itemSelector: 'div.thumb-wrap',
            overClass: 'x-view-over',
            listeners: {
                click: function(view,index,node,event){
                    if( window.console ) console.log('dataView.click(%o,%o,%o,%o)',view,index,node,event);
                },
                beforeclick: function(view,index,node,event){
                    if( window.console ) console.log('dataView.beforeclick(%o,%o,%o,%o)',view,index,node,event);
                }
            }
        })
    });

    var theLayout = new Ext.Viewport({
        layout: 'border',
        layoutConfig: {
            animate: false
        },
        items: [{
            region: 'center',
            margins: '5 5 5 5',
            layout: 'fit',
            items: dataPanel
        }]
    });

});