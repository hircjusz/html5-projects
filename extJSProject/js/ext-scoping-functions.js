Ext.onReady(function(){
    // create 'cat' object
    var cat = {
        sound: 'miaow',
        speak: function(){
            alert(this.sound);
        }
    };

    // create 'dog' object
    var dog = {
        sound: 'woof',
        speak: function(){
            alert(this.sound);
        }
    };

    // call 'speak' method on each
    cat.speak(); // alerts 'miaow'
    dog.speak(); // alerts 'woof'

    // Use Ext.bind to execute dog's speak() method in the scope of the 'cat' object
    Ext.bind(dog.speak, cat)(); // alerts 'miaow'


    // create our first Button whose click handler is scoped to the default object (the button)
    var button = Ext.create('Ext.button.Button', {
        text: 'My Test Button',
        listeners: {
            click: function(button, e, options){
                alert(this.text); // alerts 'My Test Button'
            }
        },
        renderTo: Ext.getBody()
    });
    button.show();

    // create our sample scope object
    var exampleObject = {
        text: 'My Test Object'
    };

    // create our second Button whose click handler is scoped to the 'exampleObject' using Ext.bind
    var button = Ext.create('Ext.button.Button', {
        text: 'My Test Button',
        listeners: {
            click: Ext.bind(function(button, e, options){
                alert(this.text); // alerts 'My Test Object'
            }, exampleObject)
        },
        renderTo: Ext.getBody()
    });
    button.show();

    // create our third Button whose click handler is scoped to the 'exampleObject' using the 'scope' configuration object
    var button = Ext.create('Ext.button.Button', {
        text: 'My Test Button',
        listeners: {
            click: function(button, e, options){
                alert(this.text); // alerts 'My Test Object'
            },
            scope: exampleObject
        },
        renderTo: Ext.getBody()
    });
    button.show();
});