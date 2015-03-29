Ext.onReady(function(){

    Ext.define('Cookbook.DisplayPanel', {

        extend: 'Ext.panel.Panel',

        initComponent: function(){

            // apply our configuration to the class
            Ext.apply(this, {
                title: 'Display Panel',
                html: 'Display some information here!',
                width: 200,
                height: 200,
                renderTo: Ext.getBody()
            });

            // call the extended class' initComponent method
            this.callParent(arguments);
        }

    }, function(){
        console.log('Cookbook.DisplayPanel defined!');
    });

    var displayPanel = Ext.create('Cookbook.DisplayPanel');
    displayPanel.show();

    // define our Cookbook.InfoTextField class
    Ext.define('Cookbook.InfoTextField', {

        extend: 'Ext.form.field.Text',

        onRender: function(){
            this.callParent(arguments);

            // insert our Info Text element
            Ext.core.DomHelper.append(this.getEl(), '<div>' + this.infoText + '</div>');
        }

    }, function(){
        console.log('Cookbook.InfoTextField defined!');
    });

    // create an instance of our Cookbook.InfoTextField
    var infoTextField = Ext.create('Cookbook.InfoTextField', {
        renderTo: Ext.getBody(),
        fieldLabel: 'Username',
        infoText: 'Your Username must be at least 6 characters long.'
    });


    infoTextField.show();

    Ext.define('Simple.Class',{
        welcome:function(){
            console.log('log simple class');
        }

    });


    Ext.override(Simple.Class,{
        goodBye:function(){
            console.log('goodBye');
        },
        runAll:function(){
            console.log('runAll');
        }
    });
    var app= new Simple.Class();
    app.runAll();

    //***********************Selecting DOM ELEMNTS******************************//
    var bookTitleEl = Ext.get('book-title');

    // Alert the book-title element's ID
    console.log('Book Title ID: ' + bookTitleEl.id);


    // Get an Ext.CompositeElementLite instance containing Ext.Elements for all the LI tags in the authors UL
    var authorsListItemEls = Ext.select('ul#authors li');

    // Hide all the elements in the Ext.CompositeElementLite's collection
    authorsListItemEls.hide();

    // Retrieve the raw DOM nodes for each of the Author list's items (li tags)
    console.log(Ext.query('ul#authors li'));


});