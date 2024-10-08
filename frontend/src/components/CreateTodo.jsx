import { useState } from "react";

export function CreateTodo(){

    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");


    return <div>
        <input id="text" style={{
            padding: 10,
            margin: 10,
        }} type="text" placeholder="title" onChange={(e) => {
            const value = e.target.value;
            setTitle(e.target.value)
        }} /> <br />

        <input id="desc" style={{
            padding: 10,
            margin: 10,
        }} type="text" placeholder="desc" onChange={(e) => {
            const value = e.target.value;
            setDesc(e.target.value)
        }} /> <br />

        <button style={{
            padding: 10,
            margin: 10,
        }} onClick={() => {
            fetch("http://localhost:4000/todo", {
                method: "POST",
                body: JSON.stringify({
                    title: title,
                    desc: desc
                }),
                headers:{
                    "content-type": "application/json"
                }
            })
                .then(async (res) => {
                    const json = await res.json();
                    alert('Todo Added')
                })
        }}>Add a Todo</button>
    </div>
}