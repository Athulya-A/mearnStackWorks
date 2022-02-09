class student{
    setStudent(roll_no,s_name,course,total){
        this.roll=roll_no;
        this.name=s_name,
        this.course=course,
        this.total=total
    }
    printDetails(){
        console.log(this.roll,this.name,this.course,this.total);
    }
}

var st=new student()
st.setStudent(1000,"ammu","ms",450)
st.printDetails()