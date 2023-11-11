import React from "react";

const Todolist = React.memo(({todoData, setTodoData, handleClick}) => {
    //const Todolist = ({todoData, setTodoData}) => {
    // console.log("List component");

    const changeFiled = (id) => {
        let newTodoData = todoData.map((data) => {
            if(data.id === id) {
                data.completed = !data.completed
            }
            return data;
        });
        setTodoData( newTodoData );
        localStorage.setItem("todoData", JSON.stringify(newTodoData));
    };

    return (
        <ul>
            {todoData.map((data) => (
                <li  key={data.id}
                     className={data.completed ? "" : "checked"}
                     onClick={() => changeFiled(data.id)} >
                    {data.title}
                    <span onClick={(e) => {
                            e.stopPropagation()
                            handleClick(data.id)
                        }
                    }>x</span>
                </li>
            ))}
        </ul>
    )
});

export default Todolist;