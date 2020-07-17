/**
var marks=[20,60,90,80,70,100];
var sum=0;
for(i=0;i<marks.length;i++){
   // var element=marks[i];
   // sum=sum+element;
   sum=sum+marks[i];
}
console.log(sum);
//////function/////
/** */


function arraySum(marks){
    var sum=0;
    for(i=0;i<marks.length;i++){
        var element=marks[i];
        sum=sum+element;
    
    }
    return sum;
}
var marks=[20,60,90,80,70,100];
var result=arraySum(marks);
console.log(result);