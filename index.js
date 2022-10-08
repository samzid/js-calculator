
/* =====================================Object create ====================*/
/* 
                        var person={
                            firstName:"Samzid khan",
                            lastName:"babu",
                            age:26,
                            
                            func:function(){
                                return this.firstName+thi.lastName;
                            }
                        }
                        document.write(person.firstName);
 */

/* =================tolowerCase-toUpperCase latter============================ */

                            /*
                             var tex ="samzid khan";
                            tex=tex.toUpperCase();
                            document.write(tex); 
                            
/* =================== tow  Numbrt or another number concate with function ==========================*/

                            /*
                             var firstName ="samzid ";
                            var lastName="Khan";
                            document.write(firstName.concat((lastName)));

                             */
                            
/* ======================== Slice function / cate nawa ================= ================ */
                          /* 
                          var tex1= "Bangladesh";
                          var text= tex1.slice(2,5);
                          document.write(text);
                          
                          */
/* ======================== Input function sum sub multi  dive================= ================ */

/*                      var number1 = prompt("Enter The First  Number :");
                        var number2 = prompt("Enter the secound number:");
                        number1=parseInt(number1,10);
                        number2=parseInt(number2,10);

                        var sum;
                        sum= number1+number2;
                        document.write("Total Addition="+sum+"<br/>");

                        var sub;
                        sub= number1-number2;
                        document.write("Total Subtraction="+sub+"<br/>");
                        var mul;
                        mul= number1*number2;
                        document.write("Total Multiplaction="+mul+"<br/>");
                        var divi;
                        divi= number1/number2;
                        document.write("Total Divisition="+divi+"<br/>");
 */



                        /* 
                        1+2=3
                        1-2=1
                        */



                        var num1=prompt("Enter the Any first number:");
                        var num2=prompt("Enter the Any secound number :");

                        num1=parseInt(num1,10);
                        num2=parseInt(num2,10);

                        var sum;
                        sum=num1+ num2;
                        document.write("sum = " + num1 + " + " + num2 + "=" + sum +"<br/>");

                        var sub;
                        sub=num1- num2;
                        document.write("sub = " + num1 + " - " + num2 + "=" +sub +"<br/>" );

                        var mul;
                        mul=num1* num2;
                        document.write("Multi= " + num1 + " * " + num2 + "=" + mul+"<br/>" );

                        var dive;
                        dive=num1/ num2;
                        document.write("Divi = " + num1 + " / " + num2 + "=" + dive +"<br/>");

                        var avg;
                        avg=num1 % num2;
                        document.write("avg= " + num1 + " % " + num2 + "=" + avg +"<br/>");
                        

