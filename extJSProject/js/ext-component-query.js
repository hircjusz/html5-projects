Ext.onReady(function(){

    var panel = Ext.create('Ext.panel.Panel', {

        height: 500,
        width: 500,
        renderTo: Ext.getBody(),
        margin: 50,

        layout: {
            type: 'vbox',
            align: 'stretch'
        },
        items: [{
            xtype: 'tabpanel',
            itemId: 'mainTabPanel',
            flex: 1,
            items: [{
                xtype: 'panel',
                title: 'Users',
                id: 'usersPanel',
                layout: {
                    type: 'vbox',
                    align: 'stretch'
                },
                tbar: [{
                    xtype: 'button',
                    text: 'Edit',
                    itemId: 'editButton'
                }],
                items: [{
                    xtype: 'form',
                    border: 0,
                    items: [{
                        xtype: 'textfield',
                        fieldLabel: 'Name',
                        allowBlank: false
                    }, {
                        xtype: 'textfield',
                        fieldLabel: 'Email',
                        allowBlank: false
                    }],
                    buttons: [{
                        xtype: 'button',
                        text: 'Save',
                        action: 'saveUser'
                    }]
                }, {
                    xtype: 'grid',
                    flex: 1,
                    border: 0,
                    columns: [{
                        header: 'Name',
                        dataIndex: 'Name',
                        flex: 1
                    }, {
                        header: 'Email',
                        dataIndex: 'Email'
                    }],
                    store: Ext.create('Ext.data.Store', {
                        fields: ['Name', 'Email'],
                        data: [{
                            Name: 'Joe Bloggs',
                            Email: 'joe@example.com'
                        }, {
                            Name: 'Jane Doe',
                            Email: 'jane@example.com'
                        }]
                    })
                }]
            }]
        }, {
            xtype: 'component',
            itemId: 'footerComponent',
            html: 'Footer Information',
            extraOptions: {
                option1: 'test',
                option2: 'test'
            },
            height: 40
        }]
    });

    // Ext.ComponentQuery's 'query' method

    // Get all Panels
    var panels = Ext.ComponentQuery.query('panel');
    console.log(panels);

    // get all Buttons that are descendents of a Panel
    var buttons = Ext.ComponentQuery.query('button');
    console.log(buttons);

    // get specific Button based on 'action' property
    var saveButton = Ext.ComponentQuery.query('button[action="saveUser"]')[0];
    console.log(saveButton);

    // get 2 types of Component (buttons and textfields)
    var buttonsAndTextfields = Ext.ComponentQuery.query('button, textfield');
    console.log(buttonsAndTextfields);

    // get specific Panel based on ID
    var usersPanel = Ext.ComponentQuery.query('panel#usersPanel')[0]; // or Ext.ComponentQuery.query('#usersPanel');
    console.log(usersPanel);

    // get components that have 'extraOptions' property with any value
    var extraOptionsComponents = Ext.ComponentQuery.query('component[extraOptions]');
    console.log(extraOptionsComponents);

    // Ext.ComponentQuery's method executing - get TextFields that are direct children of a form and are valid
    var validField = Ext.ComponentQuery.query('form > textfield{isValid()}');
    console.log(validField);

    // Ext.ComponentQuery's 'is' method

    // decide if main Panel is a panel
    var isPanel = Ext.ComponentQuery.is(panel, 'panel');
    console.log(isPanel); // true

    // decide if main Panel is a panel with an ID of 'myPanel'
    var isPanelWithCorrectID = Ext.ComponentQuery.is(panel, 'panel[id="myPanel"]');
    console.log(isPanelWithCorrectID); // undefined



    // Container's 'query' method

    // get all buttons under Users Panel
    var usersPanelButtons = usersPanel.query('button');
    console.log(usersPanelButtons);

    // Container's 'down' method

    // get first Panel under the main Panel (panel)
    var firstChildPanel = panel.down('panel');
    console.log(firstChildPanel);

    // Container's 'child' method

    // get first child button under the main Panel
    var childButton = panel.child('button');
    console.log(childButton); // is no Button in first level so returns null


    // Container's 'up' method

    // get first Panel above 'Add Order' button
    var saveUserButon = Ext.ComponentQuery.query('button[action="saveUser"]')[0];
    var saveUserButonParentPanel = saveUserButon.up('panel');

    console.log(saveUserButonParentPanel);


    // Pseudo-selectors

    // get last textfield
    var lastTextfield = Ext.ComponentQuery.query('textfield:last');
    console.log(lastTextfield);

    // define your own that returns visible components
    Ext.ComponentQuery.pseudos.visible = function(items) {
        var result = [];

        for (var i = 0; i < items.length; i++) {

            if (items[i].isVisible()) {
                result.push(items[i]);
            }
        }

        return result;
    };

    var visibleComponents = Ext.ComponentQuery.query('component:visible');
    console.log(visibleComponents);


});