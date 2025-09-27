const studentInfo = [{
    "name": "Sandy",
    "department": "ECE",
    "regNo": 188
},
{ "name": "riya",
    "department": "ECE",
    "regNo": 187
}];
const student= studentInfo.filter(reg => reg.regNo==187); 
console.log(student);