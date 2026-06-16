import App from "./App.jsx"
function Animal(){
    return (
        <>
        <h1>Animals</h1>
        <div style={{ display:"flex",gap:"20px"}}>
        <p style={{textAlign:"justify"}}>

        Animals first appeared in the fossil record in the late Cryogenian period 
            and diversified in the subsequent Ediacaran period in what is known as the Avalon explosion.
             Nearly all modern animal phyla first appeared in the fossil record as 
             marine species during the Cambrian explosion,
             which began around 539 million years ago (Mya),
            and most classes during the Ordovician radiation 485.4 Mya.
            Common to all living animals, 6,331 groups of genes have been identified
            that may have arisen from a single common ancestor that lived about 
            650 Mya during the Cryogenian period.
            </p>
            <img  style={{width:280}}
            src="https://i.pinimg.com/736x/de/b6/0d/deb60d1ebb6559360cdb447daf0461e2.jpg" alt="animal" />
            </div>
            <App></App>
    

        </>
    );
}
export default Animal;