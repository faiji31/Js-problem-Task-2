function calculateElectronicsBudget(lap,tab,mob){
  const  laptop= 3000;
   const tablet=1500;
  const  mobile=2000;

const lapprice = laptop*lap;
const tabprice = tablet*tab;
const mobprice = mobile * mob;

const total = lapprice + tabprice + mobprice;
return total;


}

const liam = calculateElectronicsBudget(2,2,2);
console.log(liam)