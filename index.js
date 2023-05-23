// Code your solution in this file!
function distanceFromHqInBlocks(location){
    return Math.abs(42-location)
}
function distanceFromHqInFeet(location){
    return distanceFromHqInBlocks(location)*264;
}
function distanceTravelledInFeet(start, destination){
    return Math.abs(start-destination)*264;
}
function calculatesFarePrice(start, destination){
    let fare = 0;
    const feetTravelled = distanceTravelledInFeet(start, destination);
    // console.log(feetTravelled)
    if (feetTravelled <= 400){
        fare = 0;
    }else if (feetTravelled > 400 && feetTravelled <= 2000){
        fare = (feetTravelled - 400)*2/100;
    }else if (feetTravelled > 2000 && feetTravelled < 2500){
        fare = 25;
    }else{
        fare = "cannot travel that far";
    }
    return fare;
        
}
    
// console.log(calculatesFarePrice(8, 10));