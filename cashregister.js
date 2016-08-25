document.write("<h1>Caisse enregistreuse en JavaScript</h1>");

var StaffMember = function(name,discountPercent){
    this.name = name;
    this.discountPercent = discountPercent;
};

var sally = new StaffMember("Sally",5);
var bob = new StaffMember("Bob",10);

// Create yourself again as 'me' with a staff discount of 20%
var me = new StaffMember("Isabelle",20);

var cashRegister = {
    total:0,
    lastTransactionAmount: 0,
    discountValue: 0,
    scan: function(item,quantity){
      this.item = item;
      this.quantity = quantity;
        switch (item){
        case "eggs": this.add(0.98 * quantity); break;
        case "milk": this.add(1.23 * quantity); break;
        case "magazine": this.add(4.99 * quantity); break;
        case "chocolate": this.add(0.45 * quantity); break;
        }
        return (true);
    },
    add: function(itemCost){
      this.total += (itemCost || 0);
      this.lastTransactionAmount = itemCost;
      document.write("<p>- "+this.item+" ("+this.quantity+") = "+itemCost+"</p>");
    },
    voidLastTransaction: function(){
        this.total -= this.lastTransactionAmount;
        this.lastTransactionAmount = 0;
    },
    // Create a new method applyStaffDiscount here
    applyStaffDiscount: function(employee) {
      discountValue = this.total * (employee.discountPercent/100);
      this.total -= discountValue;
      document.write("<p class='italique'>"+employee.name+" - Discount employé : "+employee.discountPercent+" %"+" - A déduire : "+discountValue+" €</p>");
    }

};

cashRegister.scan('eggs',1);
cashRegister.scan('milk',1);
cashRegister.scan('magazine',3);

document.write('<p class="petit">Total des achats : '+cashRegister.total+' €</p>');
// Apply your staff discount by passing the 'me' object
// to applyStaffDiscount
cashRegister.applyStaffDiscount(me);

// Show the total bill
document.write('<p class="annotation">(Total non arrondi : '+cashRegister.total+' €)</p>'); // total non arrondi
document.write('<p class="strong">Total à payer : '+cashRegister.total.toFixed(2)+' €</p>'); // total arrondi à 2 décimales
