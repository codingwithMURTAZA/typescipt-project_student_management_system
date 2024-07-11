import inquirer from "inquirer";
import chalk from "chalk";


class Student{
    static counter = 10000
    id:number;
    name:string;
    courses:string[];
    balance:number;

    constructor(name:string){
        this.id = Student.counter++;
        this.name =name;
        this.courses = [];
        this.balance = 1000;
    }

//method to add course for our stuident.
enroll_course(course:string){
     this.courses.push(course)
   } 

//method to view balance.
view_balance(){
    console.log(`balance of ${this.name} is : ${this.balance}`);
    }

 //method for pay student fees .
 pay_fees(amount:number){
    
        this.balance -= amount
    console.log(`${amount} fees payed successfuly of ${this.name}`);
    } 

//method to show student_satus.
view_status(){
    console.log(`Id: ${this.id}`);
    console.log(`Name: ${this.name}`);
    console.log(`Course: ${ this.courses}`);
    console.log(`Balance: ${this.balance}`);
      
    }    
}

//mathod of student maneger
 class Student_manager{
    
    students : Student[]

    constructor(){
        this.students=[];
    }

//method to add student.
      add_student(name:string){
        let $student = new Student(name);
        this.students.push($student);
        console.log(chalk.green(`student ${name} add successfuly,student id is :${$student.id}`));
        
    }

    //method to enroll student in a coures
    enroll_student(student_id :number,course :string){
       let student_found = this.students.find( std => std.id === student_id)
       if(student_found){
        student_found.enroll_course(course);
        console.log(chalk.green(`${student_found.name} enroll successfuly in ${course}`));
        
       }

    }

    //method to vieww balance.
    view_student_balance(student_id:number){
        let student_2 = this.find_student(student_id)
        if(student_2){
            student_2.view_balance()

        }
        else{
            console.log(chalk.red("Student not found. Please a correct student id"));
            
        }

    }

    //method to pay fees.
    student_pay_fees(student_id:number,amount:number){
        let student_3 =this.find_student(student_id)
    
        if(student_3){
            
            student_3.pay_fees(amount)

        }else{
            console.log(chalk.red("Student not found. Please a correct student id"));
            
        }
        
    }

//method to show student status.
    show_student_status(student_id :number){
        let student_4 = this.find_student(student_id )
        if(student_4){
             student_4.view_status()
            }else{
                console.log(chalk.red("Student not found. Please a correct student id"));
                
            }

    }

    //make a method to found student.
  find_student(student_id:number){
    return this.students.find(std => std.id === student_id)
 }

};


   async function main(){
    console.log(chalk.blue("\n\t\t===={ welcome in MURTAZA ALI student managment system }====\n"));
      let student_manager = new Student_manager();

      while(true){
        let choicess = await inquirer.prompt([
            {
                name:"choice",
                message:"select an Option to perform your program",
                type:"list",
                choices:["Add student","Enroll student","View student balance","Pay fees","Show status","Exit"]
            }
        ])

        //using switch and case to run our program.
        switch(choicess.choice){
            case "Add student":
            let name_input =await inquirer.prompt([
                {
                    name:"name",
                    message:"enter a student name",
                    type:"input",
                }
            ]);
            student_manager.add_student(name_input.name);
            break
           case "Enroll student":
      let student_enroll =await inquirer.prompt([
           {
               name:"student_id",
                 message:"enter a student id",
                type:"number",
            },
            {
                 name:"course",
                message:"enter a course name",
               type:"input"
             }
             ]);
                student_manager.enroll_student(student_enroll.student_id,student_enroll.course)
                break;
 
     case "View student balance":
        
      let balance_input =await inquirer.prompt([
             {
                 name:"balance",
                 message:"enter a student id",
                 type:"number"
             }
               ])
                    student_manager.view_student_balance(balance_input.balance)
                    break;

    case "Pay fees":
let student_pay =await inquirer.prompt([
            {
                 name:"pay",
                 message:"enter a student id",
                 type:"number"
             },
             {
                 name:"fees",
                 message:"enter your amount that you want to pay",
                 type:"input"
              }
               ]);
                        student_manager.student_pay_fees(student_pay.pay,student_pay.fees)
                        break;
     case "Show status":
  let student_show =await inquirer.prompt([
              {
                  name:"show",
                  message:"enter student id",
                  type:"number"
              }
              ])
                 student_manager.show_student_status(student_show.show)
                   break;
     case "Exit":
           console.log("exiting...");
          process.exit()
                            

            }
        }
    
    }

main()
 





























































































