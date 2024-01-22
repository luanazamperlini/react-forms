export default function SignUpForm(){
    const[username, setUsername] = React.useState(" ");
    const[password, setPassword] = React.useState(" ");
    const[error, setError] = React.useState(null);

    function handleUsername(event){
        setUsername(event.target.value)
    }

    function handlePassword(event){
        setPassword(event.target.value)
    }

    function handleError(event){
        setError(event.target.value)
    }
    async function handleSubmit(event) {
        event.preventDefault();
        console.log("Hello 👋");
      }

    
render()

return(
<>

<h2>Sign Up!</h2>;
    <form>
        <label>
            Username: 
            <input value = {username} onChange={(e) => setUsername(e.target.value)} />
        </label>
        <label>
            Password:
            <input value = {password} onChange={(e) => setPassword(e.target.value)} />
        </label>
        <button>Submit</button>
    </form>
</>
)
}