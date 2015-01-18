/**
 * Created by Darek on 2014-12-29.
 */
Ext.onReady(function(){
    // Define new class 'Vehicle' under the 'Cookbook' namespace
    Ext.define('Cookbook.Vehicle', {

        // define our config object
        config: {
            Manufacturer: 'Aston Martin',
            Model: 'Vanquish'
        },

        constructor: function(config){
            // initialise our config object
            this.initConfig(config);

            return this;
        },

        // show details of Vehicle
        getDetails: function(){
            alert('I am an ' + this.getManufacturer() + ' ' + this.getModel());
        },

        // update DOM elements with current Values
        applyManufacturer: function(manufacturer){
            Ext.get('manufacturer').update(manufacturer);

            return manufacturer;
        },
        applyModel: function(model){
            Ext.get('model').update(model);

            return model;
        }
    }, function(){
        console.log('Cookbook.Vehicle class defined!');
    });

    // create a new instance of Vehicle class
    var vehicle = Ext.create('Cookbook.Vehicle');

    // display its details
    vehicle.getDetails();

    // update Vehicle details
    vehicle.setManufacturer('Volkswagen');
    vehicle.setModel('Golf');

    // display its new details
    vehicle.getDetails();

});