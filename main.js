

let input=document.querySelector(".input");
let submit=document.querySelector(".add");
let taskdiv=document.querySelector(".tasks");
//emptty array to stor taske
let arrayoftasks=[];

//treggar get data from local
//getdtafromlocalstorage();

//Add Task
submit.onclick= function(){
    if(input.value !==""){
        addtasktoarray(input.value);//add taske to array of tasks
        input.value="";//empty
    }
};

taskdiv.addEventListener("change",(e)=>{
if(e.target.classList.contains("del"))
e.target.parentElement.classList.add('style');
//document.querySelector("span .del").classList.add("style");

})







//click on task element 

function addtasktoarray(tasktext){
//task data
const task ={
    id: Date.now(),
    title:tasktext,
    completed:false,

};
//push the data insid array of tasks
arrayoftasks.push(task);
//console.log(arrayoftasks);
//Add taske to page
addElementtopagefrom(arrayoftasks);
//add taske to local storage
//adddatatolocalstoragetoarraytasks(arrayoftasks);

}
function addElementtopagefrom(arrayoftasks){
//empte thetaske div
taskdiv.innerHTML="";
//looping of array of tasks

arrayoftasks.forEach((task)=>{
  let div=document.createElement("div");
  div.className="task";
  //cheke if class done
  if(task.completed){

    div.className="taskdone";

  }
  
  var checkbox=document.createElement('input');
  checkbox.type='checkbox';
  checkbox.className='del';

  
  let span=document.createElement("span");
  span.className='del ';
  //span.appendChild(document.createTextNode("delete"));
 
  
  div.appendChild(checkbox);
  div.appendChild(span);

  taskdiv.appendChild(div);

 span .appendChild(document.createTextNode(task.title));
 
 
  

});



 };
 

 



/*function adddatatolocalstoragetoarraytasks(arrayoftasks){


    window.localStorage.setItem("tasks",JSON.stringify(arrayoftasks));
}
function getdtafromlocalstorage(){

    let data=window.localStorage.getItem("tasks");
    if(data){
        let tasks=JSON.parse(data);

    }
};*/
