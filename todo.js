let todoList=[
            {task:'drink water',
            dueDate:' 29-10-2024'}, 
            {task:'fresh up',
                dueDate:' 29-10-2024'
            }, 
            {task:'do yoga',
                dueDate:' 29-10-2024'
            },
            {task:'study',
                dueDate:' 29-10-2024'
            }
        
    ];
displayItems();


function addTodo(){
    let inputElement = document.querySelector('#todo-input');
    let dateElement =document.querySelector
    ('#todo-date');
     let todoItem = inputElement.value;
     let todoDate = dateElement.value;
    todoList.push({task: todoItem, dueDate:todoDate});
    inputElement.value='';
    dateElement.value='';
    displayItems();
}
    function displayItems() {
        let conatainerElements = document.querySelector('.todo-container');

        let newHtml='';

        
        for(let i=0; i<todoList.length; i++){
            // let task =todoList[i].task;
            // let dueDate = todoList[i].dueDate;
            let{task, dueDate}=todoList[i];
            newHtml+=`
            
            <span>${task}</span>
            <span>${dueDate}</span>
            <button class='btn-delete' onclick ="todoList.splice(${i},1);
            displayItems();">Delete</button>
            
            `;
            
        }
        conatainerElements.innerHTML=newHtml;
    }
