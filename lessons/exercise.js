var familySize = 2;
var plannedDistanceToDrive=100;


function recommendedCar(f,pdd) {
    if (f<=4 && pdd<200) {        
        return 'Tesla'
    } else if (f<=4 && pdd>=200) {
        return 'Toyota Camry'
    }else if(f>4){
        return 'Minivan'
    }



}

console.log(recommendedCar(familySize, plannedDistanceToDrive));