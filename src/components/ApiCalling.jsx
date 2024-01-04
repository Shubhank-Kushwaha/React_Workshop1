import axios from "axios";
import React,{useState, useEffect} from "react";

const ApiCalling=()=>{
const  [data,getData]= useState([])
const handleGetApiData=()=>
{
    axios.get("https://jsonplaceholder.typicode.com/posts")
    .then((response)=>{
        getData(response.data)
        console.log(response.data);
    })
    .catch((error)=>{
        console.log(error);
    })

}
useEffect(()=>{
    handleGetApiData()
},[])

return(
    <>
    
    <table>
    <thread >
        
        <tbody className="table-success">
        <tr>
            <th>ID</th>     
            <th>Title</th>
            <th>Body</th>
        </tr>
        {data.map((items)=>(
        <tr  className="table-success" key={items.id}>
        <td>{items.id}</td>
        <td>{items.title}</td>
        <td>{items.body}</td>
        
        </tr>
        ))}</tbody>
        <tr>
            <th>Name</th>
            <th> Age</th>
            <th>Gender</th>   
        </tr>
        <tr>
            <th>Parit</th>
            <th>22</th>
            <th>Male</th>
        </tr>    
    </thread>
    </table>

    </>
)
}

export default ApiCalling