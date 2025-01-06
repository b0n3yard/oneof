const fs = require('fs')
const regex = /\.(?=.*@)/;
const student = []
const teacher = []
const actvstd = []
fs.readFile('audit.csv' , 'utf8',(err,data) => {
    if(err){
        console.log(err)
        return
    }
    const lines = data.trim().split('\n');
    const result =  lines.map( line =>{
        const [status, email] = line.split(',')
        return{
        status: status,
        email: email
    }
    })
    for(const i in result){
        const hasPeriod = regex.test(result[i].email) 
        if(hasPeriod == true){
            student.push(result[i])
        }else{
            teacher.push(result[i])
        }
    }
    console.log('student', student.length)
    for(const i in student){
        if(student[i].status == 'active'){
            actvstd.push(student[i])
        }
    }
    console.log('active', actvstd.length)
    for(const i in teacher){
    fs.appendFile(`teacher.txt`,`${teacher[i].email}\n`,(err)=>{
        if(err){
            console.log(err)
            return
        }
    })}
    console.log('teacher written')
    for(const i in actvstd)
   { fs.appendFile(`student.txt`,`${actvstd[i].email}\n`,(err)=>{
        if(err){
            console.log(err)
            return
        }
    })}
    console.log('student written')
})