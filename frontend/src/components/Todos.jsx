/*
    todos = [
    {
        title: Go to Gym,
        desc: dhkwhdkj
        completed: false
    },
    {
    }
    ]


*/

export function Todos({todos}){
    return <div>
        {todos.map((todo)=>{
            return <div>
                <h1>{todo.title}</h1>
                <h2>{todo.desc}</h2>
                <button>{todo.completed == true ? "Completed" : "Mark as Completed"}</button>  
            </div>
        })}
    </div>
}