const connection= require('./dbConnect')
const express= require('express')
const app= express()

const port=4000

app.use(express.json());


//get all employees details
app.get('/employees',(req,res)=>{

        connection.query("SELECT * FROM employee",(err,rows)=>{
            if(err){
                console.log(err)
            }else{
                // console.log(rows)
               res.status(200).json({
                message:'data found',
                rows
               })
            }
        })
        
    
})

//get single employee  
app.get('/employees/:id',(req,res)=>{
  
        connection.query("SELECT * FROM employee WHERE id=? ",[req.params.id],(err,rows)=>{
            if(err){
                console.log(err)
            }else{
                // console.log(rows)
               res.status(200).json({
                message:'data found',
                rows
               })
            }
        })
        
    
})

//add employee
app.post('/employees/add',(req,res)=>{
  
       let emp= req.body // getting name,salary form user input.
       let empdata= [emp.name,emp.salary]

        connection.query("INSERT INTO employee(name,salary) values(?)",[empdata],(err,rows)=>{
            if(err){
                console.log(err)
            }else{
                // console.log(rows)
               res.status(200).json({
                message:'new Employee add success',
               rows
               })
            }
        })
        
   
})

//update employee
app.patch('/employees/update',(req,res)=>{
   
       let emp= req.body // getting name,salary form user input.
      const updatemp=  connection.query("UPDATE employee SET ? WHERE id=" +emp.id,[emp],(err,rows)=>{
            if(err){
                console.log(err)
            }else{
                
               res.status(200).json({
                message:'Employee data updated  successfull',
               rows
               })
            }
        })
        
   
})



//delet employee
app.delete('/employees/delet/:id',(req,res)=>{
    try {
        connection.query("DELETE FROM employee WHERE id=? ",[req.params.id],(err,rows)=>{
            if(err){
                console.log(err)
            }else{
                // console.log(rows)
               res.status(200).json({
                message:'data delete success',
                rows
               })
            }
        })
        
    } catch (error) {
        console.log(error)
    } 
})



// server is listing

app.listen(port,()=>{
    console.log(`Backend Server is running on ${port}`)
})