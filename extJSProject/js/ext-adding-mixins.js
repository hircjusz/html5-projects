
Ext.onReady(function(){
    // Define the HasCamera class
    Ext.define('HasCamera', {
        takePhoto: function(){
            alert('Say Cheese! .... Click!');
        }
    });

    // Define the Cookbook.Smartphone class
    Ext.define('Cookbook.Smartphone', {

        mixins: {
            camera: 'HasCamera'
        },

        useCamera: function(){
            this.takePhoto();
        },

        takePhoto: function(){
            this.focus();

            this.mixins.camera.takePhoto.call(this);
        },

        focus: function(){
            alert('Focusing Subject...');
        }
    });

    var smartphone = Ext.create('Cookbook.Smartphone');
    smartphone.useCamera(); // alerts 'Focusing Subject...'


});