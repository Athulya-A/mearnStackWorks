var student={
    roll_no:2,
    s_name:"Adithya",
    course:"MCA",
    total:450
}
console.log(student["s_name"]);
console.log(student.s_name);
console.log(student.course);
// Add
console.log("gender" in student);
console.log("roll_no" in student);
student["gender"]="female"
console.log(student);
// isVaccinated:true
student.isVaccinated=true
console.log(student);
//Add
student.vaccine="Coviedshield"
console.log(student);
// update
student.vaccine="co-vaxin"
console.log(student);

student.total=500
console.log(student);


student.total+=50
console.log(student);


for(var key in student){
    console.log(key);             // key=roll_no,s_name,course,toatal,gender,..........
    console.log(student[key]);    // student[id]
}
