Ext.onReady(function(){
    // Define the Cookbook.Vehicle class
    var data = [{name: 'Samantha', age: 12},
        {name: 'Alexis', age: 14}
    ];

    var gameController = {
        scores  :[20, 34, 55, 46, 77],
        avgScore:null,
        players :[
            {name:"Tommy", playerID:987, age:23},
            {name:"Pau", playerID:87, age:33}
        ]
    };
    var christmasList = {mike:"Book", jason:"sweater", chelsea:"iPad" };
    var stringObj=JSON.stringify (christmasList);
    var friends=['Mike','Stacy','Rick','Andy'];
    friends.forEach(function(eachName,index){
       console.log(eachName);
    });

    var Person = function( firstName , lastName ){
        this.firstName = firstName;
        this.lastName = lastName;
        this.gender = 'male'
    };

    var clark = new Person( "Clark" , "Kent" );

    var SuperHero = function( firstName, lastName , powers ){
// Invoke the superclass constructor on the new object
// then use .call() to invoke the constructor as a method of
// the object to be initialized.
        Person.call(this, firstName, lastName);
// Finally, store their powers, a new array of traits not found in a normal 'Person'
        this.powers = powers;
    }

    SuperHero.prototype = Object.create(Person.prototype);
    var superman = new SuperHero( "Clark" ,"Kent" , ['flight','heat-vision'] );
    console.log(superman); // includes superhero props as well as gender

    function vehicle( vehicleType ){
// properties and defaults
        this.vehicleType = vehicleType || 'car',
            this.model = 'default',
            this.license = '00000-000'
    }

    var testInstance = new vehicle('car');
    console.log(testInstance);

    var truck = new vehicle('truck');

    truck.setModel = function( modelName ){
        this.model = modelName;
    }

    truck.setColor = function( color ){
        this.color = color;
    }
// Test the value setters and value assignment works correctly
    truck.setModel('CAT');
    truck.setColor('blue');
    console.log(truck);

    var secondInstance = new vehicle('car');
    console.log(secondInstance);


    function MacBook() {
        this.cost = function () { return 997; };
        this.screenSize = function () { return 13.3; };
    }
// Decorator 1
    function Memory( macbook ) {
        var v = macbook.cost();
        macbook.cost = function() {
            return v + 75;
        }
    }
// Decorator 2
    function Engraving( macbook ){
        var v = macbook.cost();
        macbook.cost = function(){
            return v + 200;
        };
    }
// Decorator 3
    function Insurance( macbook ){
        var v = macbook.cost();
        macbook.cost = function(){return v + 250;
        };
    }
    var mb = new MacBook();
    Memory(mb);
    Engraving(mb);
    Insurance(mb);
    console.log(mb.cost()); //1522
    console.log(mb.screenSize()); //13.3

    var Book = function (title, author, genre, pageCount, publisherID, ISBN) {
        this.title = title;
        this.author = author;
        this.genre = genre;
        this.pageCount = pageCount;
        this.publisherID = publisherID;
        this.ISBN = ISBN;
    };

    var BookFactory = (function () {
        var existingBooks = {};
        return {
            createBook: function (title, author, genre, pageCount, publisherID, ISBN) {
// Find out if a particular book meta-data combination has been created before
                var existingBook = existingBooks[ISBN];
                if (existingBook) {
                    return existingBook;
                } else {
// if not, let's create a new instance of it and store it
                    var book = new Book(title, author, genre, pageCount, publisherID, ISBN);
                    existingBooks[ISBN] = book;
                    return book;
                }
            }
        }
    }());

    var BookRecordManager = (function () {

        var bookRecordDatabase = {};


        return {


        };
    });


    var car = {};
// A car can have any number of doors
    Object.defineProperty(car, 'doors', {
        configurable: true,
        value: 4
    });

    Object.defineProperty(car, 'wheels', {
        configurable: false,
        value: 4
    });

    var store = {
        id: 1,
        cache: {},
        add: function( fn ) {
            if ( !fn.id ) {
                fn.id = store.id++;
                return !!(store.cache[fn.uuid] = fn);
            }
        }
};
function ninja(){}

    store.add( ninja );
    store.add( ninja );

    function merge(root){
        for ( var i = 0; i < arguments.length; i++ )
            for ( var key in arguments[i] )
                root[key] = arguments[i][key];
        return root;
    }
    var merged = merge({name: "John"}, {city: "Boston"});



    function addMethod(object, name, fn){
        var old = object[ name ];
        object[ name ] = function(){
            if ( fn.length == arguments.length )
                return fn.apply( this, arguments )
            else if ( typeof old == 'function' )
                return old.apply( this, arguments );
        };
    }

    function Ninjas(){
        var ninjas = [ "Dean Edwards", "Sam Stephenson", "Alex Russell" ];
        addMethod(this, "find", function(){
            return ninjas;
        });
        addMethod(this, "find", function(name){
            var ret = [];
            for ( var i = 0; i < ninjas; i++ )
                if ( ninjas[i].indexOf(name) == 0 )
                    ret.push( ninjas[i] );
            return ret;
        });
        addMethod(this, "find", function(first, last){
            var ret = [];
            for ( var i = 0; i < ninjas; i++ )
                if ( ninjas[i] == (first + "" + last) )
                    ret.push( ninjas[i] );
            return ret;
        });
    }
    var ninjas = new Ninjas();

    var div = document.getElementsByTagName("div");
    for ( var i = 0; i < div.length; i++ ) (function(i){
        div[i].addEventListener("click", function(){
            alert( "div #" + i + " was clicked." );
        }, false);
    })(i);


    var table = document.getElementsByTagName("tbody");
    for ( var i = 0; i < 2000; i++ ) {
        var tr = document.createElement("tr");
        for ( var t = 0; i < 6; i++ )
              var td = document.createElement("td");
        td.appendChild( document.createTextNode("" + t));
        tr.appendChild( td );
    }
    //table.appendChild( tr );

    function User(first, last){
        if ( !(this instanceof arguments.callee) )
            return new User(first, last);
        this.name = first + "" + last;
    }
    var name = "Resig";
    var user = User("John", name);

    function find(selector, root){
        root = root || document;
        var parts = selector.split(" "),
            query = parts[parts.length - 1],
            rest = parts.slice(0,-1).join("").toUpperCase(),
            elems = root.getElementsByTagName( query ),
            results = [];
        for ( var i = 0; i < elems.length; i++ ) {
            if ( rest ) {
                var parent = elems[i].parentNode;
                while ( parent && parent.nodeName != rest ) {
                    parent = parent.parentNode;
                }
                if ( parent ) {
                    results.push( elems[i] );
                }
            } else {
                results.push( elems[i] );
            }
        }
        return results;
    }

    var divs = find("div");

    var friend = {
        warmth: 0,
        useSweater: function (level) {
            this.warmth = level;
        }
    };
    var me = {
        warmth: 0,
        isWarm: function () {
            return this.warmth === 100;
        }
    };
// => false
    console.log(me.isWarm());
    try {
        me.useSweater(100);
    } catch (e) {
// => Object #<Object> has no method 'useSweater'
        console.log(e.message);
    }
    friend.useSweater.call(me, 100);
// => true
    console.log(me.isWarm());
    me.warmth = 0;
// => false
    console.log(me.isWarm());
    friend.useSweater.apply(me, [100]);
// => true
    console.log(me.isWarm());


    var getUniqueId = (function() {
        var id = 0;
        return function(element) {
            if (!element.id) {
                element.id = 'generated-uid-' + id++;
            }
            return element.id;
        };
    })();
    var elementWithId = document.createElement('p');
    elementWithId.id = 'foo-bar';
    var elementWithoutId = document.createElement('p');

    // => 'foo-bar'
    getUniqueId(elementWithId);
// => 'generated-id-0'
    getUniqueId(elementWithoutId);

    var car;
    function carFactory(kind) {
        var wheelCount, start;
        wheelCount = 4;
        start = function() {
            console.log('started with ' + wheelCount + ' wheels.');
        };
// Closure created here.
        return (function() {
            return {
                make: kind,wheels: wheelCount,
                startEngine: start
            };
        }());
    }
    car = carFactory('Tesla');
// => Tesla
    console.log(car.make);
// => started with 4 wheels.


    var Car, proxy, tesla;
    Car = function() {
        this.start = function() {
            return console.log("car started");
        };
        this.turnKey = function() {
            var carKey;
            carKey = document.getElementById("carKey");
            carKey.onclick = proxy(function(event) {this.start();
            }, this);
        };
        return this;
    };
// Use a closure to bind the outer scope's reference to this into the newly created inner scope.
    proxy = function(callback, self) {
        return function() {
            return callback.apply(self, arguments);
        };
    };
    tesla = new Car();
// Once a user click's the #carKey element they will see "car started"
    tesla.turnKey();

});