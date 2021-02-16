const coffee = {

    customername : {
        firstname : 'Manjotbir', 
        lastname  : 'Singh'
      },
    drinktype : ['Latte', 'Coffee', 'Expresso'],
    coffeesize: ['Short', 'Tall', 'Grande', 'Venti'],
    drizzle : (true,false),
    whippedcream : (true,false),
    sweetener : (true,false),
    coldfoam : (true,false),

    dairy: ['Cream','2% Milk','Almond milk'],

    checkdrizzle : function (){
        if(this.drizzle === true)
        return "Add Drizzle";
        else
        return " ";
    },
    
    checkwhippedcream : function (){
        if(this.whippedcream === true)
        return "Add Whipped Cream ";
        else
        return " ";
    },
    
    checksweetner : function (){
        if(this.sweetener === true)
        return "Add Sweetner";
        else
        return " ";
    },
    
    checkcoldfoam : function (){
        if(this.coldfoam === true)
        return "Add Coldfoam";
        else
        return " ";
    },

    order : function() {
        alert('Order Details are ' + this.customername.firstname + this.customername.lastname + ' drink type is ' + this.drinktype[2] + ' coffee size is ' + this.coffeesize[3] + this.checkdrizzle() + " " + this.checkwhippedcream() + " " + this.checksweetner() + " " + this.checkcoldfoam()  + " " + this.dairy[2]);
    }

    
}

    coffee.drizzle = true;
    coffee.whippedcream = true;
    coffee.sweetener = true;
    coffee.coldfoam = true;




coffee.order();


const coffeefriend = {

    customername : {
        firstname : 'firstname', 
        lastname  : 'lastname'
      },
    drinktype : ['Latte', 'Coffee', 'Expresso'],
    coffeesize: ['Short', 'Tall', 'Grande', 'Venti'],
    drizzle : (true,false),
    whippedcream : (true,false),
    sweetener : (true,false),
    coldfoam : (true,false),

    dairy: ['Cream','2% Milk','Almond milk'],

    checkdrizzle : function (){
        if(this.drizzle === true)
        return "Add Drizzle";
        else
        return " ";
    },
    
    checkwhippedcream : function (){
        if(this.whippedcream === true)
        return "Add Whipped Cream ";
        else
        return " ";
    },
    
    checksweetner : function (){
        if(this.sweetener === true)
        return "Add Sweetner";
        else
        return " ";
    },
    
    checkcoldfoam : function (){
        if(this.coldfoam === true)
        return "Add Coldfoam";
        else
        return " ";
    },

    order2 : function() {
        alert('Order Details are ' + this.customername.firstname + this.customername.lastname + ' drink type is ' + this.drinktype + ' coffee size is ' + this.coffeesize + this.checkdrizzle() + " " +  this.checkwhippedcream() + " " +  this.checksweetner() + " " +  this.checkcoldfoam()  + this.dairy );
    }

    
}

coffeefriend.customername.firstname = 'Sahejpal';
coffeefriend.customername.lastname = 'Singh';

coffeefriend.drinktype = 'Latte';
coffeefriend.coffeesize = 'Tall';

coffeefriend.drizzle = true;
coffeefriend.whippedcream = false;
coffeefriend.sweetener = true;
coffeefriend.coldfoam = false;

coffeefriend.dairy = 'Cream';

coffeefriend.order2();
