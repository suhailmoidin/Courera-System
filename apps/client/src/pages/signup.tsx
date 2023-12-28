import { Signup } from "ui";
import { Button } from "ui";
export default function SignupPage(){
    return <div>
        <Signup onClick={(username, password)=>{
                const response = await axios.post()
        }}></Signup>
    </div>
}
