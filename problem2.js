const heights2 = ['rahim', 'robin', 'rafi', 'ron', 'rashed'];

function getsmall(frd){
    let small=frd[0];{
        for (const i of frd){
            if(i.length<=small.length){
                small=i;
            }
        }return small;
    }
}

const liam=getsmall(heights2);
console.log(liam);