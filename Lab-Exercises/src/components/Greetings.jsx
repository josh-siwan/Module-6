// add this to a new file City.jsx in the components folder
// destructures props object into 3 variables, two with defaults
function Greetings({name,children}) {

    return (
    <div>
        {name? <p> Hello {name} </p> : "Hello World"}
        {children}
    </div>
    )
    }
    
    export default Greetings;