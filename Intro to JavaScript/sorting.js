/*
//Sorting

const num = [1, 2, 3, 34, 12, 50, 2, 1, 2, 6];
const sortedNums = num.sort((a, b) => a - b);//by default it will sort by the ASCII of each number in the array
console.log(sortedNums);
*/

/*
const objs = [
    {year: 2012, make: "Ford" },
    {year: 2017, make: "Porsche" },
    {year: 1999, make: "Volvo" },
    {year: 2022, make: "Buick" },
];

const sortedObjs = objs.sort((a, b) => b.year - a.year);
console.log(sortedObjs);
*/

//More Complicated Version
const objs = [
    {year: 2012, make: "Ford" },
    {year: 2017, make: "Porsche" },
    {year: 1999, make: "Volvo" },
    {year: 2022, make: "Buick" },
    {year: 2023, make: "Toyota" },
    {year: 2022, make: "Subaru" },
    {year: 2023, make: "Honda" },
    {year: 2017, make: "Tesla" },
];

const sortedObjs = objs.sort((a, b) => {
    const diffYear = b.year - a.year;
    if(diffYear === 0){
        if (a.make > b.make) {
            return 1;
        } else if (a.make < b.make) {
            return -1;
        }else {
            return 0;
        }
    }
    return diffYear;
});
//console.log(sortedObjs);
console.log(sortedObjs.reverse());//reversed order