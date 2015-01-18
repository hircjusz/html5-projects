Ext.onReady(function(){
    // Define the Cookbook.Vehicle class
    Ext.define('Cookbook.Vehicle', {

        config: {
            manufacturer: 'Unknown Manufacturer',
            model: 'Unknown Model',
            topSpeed: 0
        },

        constructor: function(manufacturer, model, topSpeed){
            // initialise our config object
            this.initConfig();

            if (manufacturer) {
                this.setManufacturer(manufacturer);
            }
            if (model) {
                this.setModel(model);
            }
            if (topSpeed) {
                this.setTopSpeed(topSpeed);
            }
        },

        travel: function(distance){
            alert('The ' + this.getManufacturer() + ' ' + this.getModel() + ' travelled ' + distance + ' miles at ' + this.getTopSpeed() + 'mph');
        }

    }, function(){
        console.log('Vehicle Class defined!');
    });

    // create an instance of Cookbook.Vehicle class
    var vehicle = Ext.create('Cookbook.Vehicle', 'Aston Martin', 'Vanquish', 60);

    vehicle.travel(100); // alerts �The Aston Martin Vanquish travelled 100 miles at 60mph


    // Define the Cookbook.Plane class
    Ext.define('Cookbook.Plane', {

        extend: 'Cookbook.Vehicle',

        config: {
            maxAltitude: 0
        },

        constructor: function(manufacturer, model, topSpeed, maxAltitude){
            // initialise our config object
            this.initConfig();

            if (maxAltitude) {
                this.setMaxAltitude(maxAltitude);
            }

            // call the parent class' constructor
            this.callParent([manufacturer, model, topSpeed]);
        },

        takeOff: function(){
            alert('The ' + this.getManufacturer() + ' ' + this.getModel() + ' is taking off.');
        },
        land: function(){
            alert('The ' + this.getManufacturer() + ' ' + this.getModel() + ' is landing.');
        },

        travel: function(distance){
            this.takeOff();

            // execute the base class� generic travel method
            this.callParent(arguments);

            alert('The ' + this.getManufacturer() + ' ' + this.getModel() + ' flew at an altitude of ' + this.getMaxAltitude() + 'feet');

            this.land();
        }

    }, function(){
        console.log('Plane Class Defined!');
    });

    // create an instance of Cookbook.Plane class
    var plane = Ext.create('Cookbook.Plane', 'Boeing', '747', 500, 30000);

    plane.travel(800); // alerts 'The Boeing 747 is taking off'
    // 'The Boeing 747 travelled 800 miles at 500mph'
    // 'The Boeing 747 flew at an altitude of 30000 feet'
    // 'The Boeing 747 is landing.'

});