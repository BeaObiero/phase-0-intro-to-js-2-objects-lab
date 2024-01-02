// Write your solution in this file!
let employee = {
    name: "Sam",
    streetAddress: "11 Broadway"
};



//update employee with key and value and return new value without ammending the original object
function updateEmployeeWithKeyAndValue(key,value) {
    return {...employee,[key]: value};
}

//destructively update employee with key and value, should mutate original employee object
function destructivelyUpdateEmployeeWithKeyAndValue(key,value){
    employee[key] = value;
}

//delete from employee by key, deleting key, return new object without mutating original object
function deleteFromEmployeeByKey(key){
    let newEmployee = {...employee};
    delete newEmployee[key];
    return newEmployee
}

//destructivelyDestroyFromEmployeeByKey
function destructivelyDeleteFromEmployeeByKey(key){
    delete employee[key];
    return employee
}



