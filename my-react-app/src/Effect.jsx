import { useEffect } from "react";
function Data()
{
    useEffect (
         ()=>{
            console.log("Good Morning");
         },[]


    );
    return(
        <h1>Good morning</h1>
    );
   
}
export default Data;