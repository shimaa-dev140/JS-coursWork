let productName=laptop;
let unitPrice=600;
let quantity=2;
let isMember= true;
let Subtotal=unitPrice*quantity;
let discount=0;
let shoping=0;

   if (isMember && Subtotal >=100 ){
        discount = Subtotal*0.10
   };

   let totalAfterDiscount =Subtotal - discount;

   if(  totalAfterDiscount <=500){
    shoping=50
   };

   let finalTotal=  totalAfterDiscount + shoping;

   
   console.log( productName );
   console.log( unitPrice );
   console.log( quantity );
   console.log( isMember );
   console.log( Subtotal );
   console.log( discount );
   console.log(  shoping );
   console.log(finalTotal );
   




