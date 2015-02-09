/**
 * Created by Darek on 2015-01-20.
 */
Ext.onReady(function(){

    Ext.define('Employee', {
        mixins: {
            observable: 'Ext.util.Observable'
        },
        doWork: function(){
            this.fireEvent('darek');

        },

        constructor: function (config) {
            // The Observable constructor copies all of the properties of `config` on
            // to `this` using Ext.apply. Further, the `listeners` property is
            // processed to add listeners.
            //
            this.mixins.observable.constructor.call(this, config);

            this.addEvents(
                'darek',
                'fired',
                'quit'
            );
        }
    });

    var newEmployee = Ext.create("Employee",{
        name: 'name0',
        listeners: {
            darek: function() {
                // By default, "this" will be the object that fired the event.

            }
        }
    });

    Ext.util.Observable.observe(Employee);
    Employee.on('darek', function(con, options) {
        console.log('Ajax request made to ' + options.url);
    });

    newEmployee.doWork();


    Ext.create('Ext.panel.Panel', {
             title: 'Hello',
             width: 200,
             html: '<p>World!</p>',
              tbar:{ xtype:'toolbar',items:[{text:'Button'}]},
             renderTo: Ext.getBody()

         });

    var toolbar = Ext.create('Ext.toolbar.Toolbar', {
        renderTo: document.body,
        width   : 700,
        items: [
            {
                text: 'Example Button'
            }
        ]
    });

    var addedItems = [];

    Ext.create('Ext.toolbar.Toolbar', {
        renderTo: document.body,
        width   : 700,
        margin  : '5 0 0 0',
        items   : [
            {
                text   : 'Add a button',
                scope  : this,
                handler: function() {
                    var text = prompt('Please enter the text for your button:');
                    addedItems.push(toolbar.add({
                        text: text
                    }));
                }
            },
            {
                text   : 'Add a text item',
                scope  : this,
                handler: function() {
                    var text = prompt('Please enter the text for your item:');
                    addedItems.push(toolbar.add(text));
                }
            },
            {
                text   : 'Add a toolbar separator',
                scope  : this,
                handler: function() {
                    addedItems.push(toolbar.add('-'));
                }
            },
            {
                text   : 'Add a toolbar spacer',
                scope  : this,
                handler: function() {
                    addedItems.push(toolbar.add('->'));
                }
            },
            '->',
            {
                text   : 'Remove last inserted item',
                scope  : this,
                handler: function() {
                    if (addedItems.length) {
                        toolbar.remove(addedItems.pop());
                    } else if (toolbar.items.length) {
                        toolbar.remove(toolbar.items.last());
                    } else {
                        alert('No items in the toolbar');
                    }
                }
            },
            {
                text   : 'Remove all items',
                scope  : this,
                handler: function() {
                    toolbar.removeAll();
                }
            }
        ]
    });

    var Event = (function () {
        function Event(name) {
            this.name = name;
        }
        return Event;
    })();


});