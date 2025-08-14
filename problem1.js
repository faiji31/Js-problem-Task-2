const heights2 = [167, 190, 120, 165, 137];

function min(heights){
   let min2=heights[0];
    for (const i of heights){
        if(i<min2){
            min2=i;
        }
    }return min2;
}

const liam = min(heights2);
console.log(liam);