/**
 * Created by Darek on 2015-01-20.
 */
Ext.onReady(function(){

    Ext.create('Ext.panel.Panel', {
             title: 'Hello',
             width: 200,
             html: '<p>World!</p>',
             renderTo: Ext.getBody()
         });



});