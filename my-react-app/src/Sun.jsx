import userContext from "./context.js";
import Recieve from "./recieve.jsx";

function Variant()
{
    return (
        <userContext.Provider value="vishnu">
            <Recieve></Recieve>
        </userContext.Provider>
    );
}
export default Variant;