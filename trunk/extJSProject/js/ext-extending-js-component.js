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

});