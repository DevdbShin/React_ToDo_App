import React from "react";

const TodoForm = React.memo(({value, setValue, handleSubmit}) => {
    //const TodoForm = ({value, setValue, setTodoData}) => {
    console.log("Form component");

    const handleChange = (e) => {
        setValue(e.target.value);
    };

    /*function testclick (dd) {
        console.log(dd);
    }*/

    return (
        <div className="todoTop">
            <div className="title">
                <h1>My To Do List</h1>
                <form style={{display: "flex"}} onSubmit={handleSubmit}>
                    <input
                        type="text"
                        name="value"
                        style={{flex: "10", padding: "5px"}}
                        placeholder="Title..."
                        value={value}
                        onChange={handleChange}
                        //onClick={testclick}
                    />
                    <input
                        type={"submit"}
                        value={"Add"}
                        className={"btn"}
                        style={{flex: "1"}}
                    />
                </form>
            </div>
        </div>
    );
});

export default TodoForm;