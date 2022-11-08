import { useState } from "react";
import '../css/login.css';
import profile from "./../images/a.png";
import Email from "./../images/email.jpg";
import pass from "./../images/pass.png";

function App() {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	async function loginUser(event) {
		event.preventDefault();

		const response = await fetch("http://localhost:1337/api/login", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				email,
				password,
			}),
		});

		const data = await response.json();

		if (data.user) {
			localStorage.setItem("token", data.user);
			alert("Login successful");
			window.location.href = "/dashboard";
		} else {
			alert("Please check your username and password");
		}
	}

	return (
			<div className="main">
     <div className="sub-main">
       <div>
         <div className="imgs">
           <div className="container-image">
             <img src={profile} alt="profile" className="profile"/>

           </div>


         </div>
         <div>
           <h1>Login </h1>
		   
           <div>
             <img src={Email} alt="email" className="img-all"/>
			 
			 <input
					value={email}
					className="name"
					onChange={(e) => setEmail(e.target.value)}
					type="email"
					placeholder="Email"
				/>
           </div>
           <div className="second-input">
             <img src={pass} alt="pass" className="img-all"/>
			 <input
					value={password}
					className="name"
					onChange={(e) => setPassword(e.target.value)}
					type="password"
					placeholder="Password"
				/>
           </div>
          <div className="login-button">
          <button onClick={loginUser}>Login</button>
          </div>
           
            <p className="link">
              <a href="#">Forgot password ?</a> Or<a href="register">Sign Up</a>
            </p>
           
 
         </div>
       </div>
       

     </div>
    </div>
		  
		
	);
}

export default App;
