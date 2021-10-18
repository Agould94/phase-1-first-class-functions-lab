const returnFirstTwoDrivers = (arr)=> {
    let arr2=[];
    arr2.push(arr[0]);
    arr2.push(arr[1]);
    return arr2;
}

const returnLastTwoDrivers = (arr) => {
    let arr2 = [];
    arr2.push(arr[arr.length -2])
    arr2.push(arr[arr.length -1])
    return arr2
}

let selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

const createFareMultiplier = (i) => {
    return function(fare){return fare*i};
};

const fareDoubler = (fare) => {return createFareMultiplier(2)(fare)};

const fareTripler = (fare) => {return createFareMultiplier(3)(fare)};

const selectDifferentDrivers = (arr, f) =>{
   return f(arr)
}