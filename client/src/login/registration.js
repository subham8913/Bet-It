import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Name from "./../images/name.jpg";
import pass from "./../images/pass.png";
import Email from "./../images/email.jpg";

function App() {
	const history = useNavigate();

	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	async function registerUser(event) {
		event.preventDefault();

		const response = await fetch("http://localhost:1337/api/register", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				name,
				email,
				password,
			}),
		});

		const data = await response.json();

		if (data.status === "ok") {
			history.push("/login");
		}
	}

	return (

		<div className="main">
		<div className="sub-main">
		  <div>
			
			<div>
			  <h1>Register </h1>
			  
			  
			  <div className="first-input">
				<img src={Name} alt="Name" className="img-all"/>
				<input
					value={name}
					className="name"
					onChange={(e) => setName(e.target.value)}
					type="text"
					placeholder="Name"
				/>
				
			  </div>
			  <div className="second-input">
			  
				<img src={Email} alt="email" className="img-all"/>
				
				<input
					value={email}
					className="name"
					onChange={(e) => setEmail(e.target.value)}
					type="email"
					placeholder="Email"
				/>
			  </div>
			  
			  <div className="third-input">
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
			 <button onClick={registerUser}>Register</button>
			 </div>
			  
			   <p className="link">
				 <a href="#">Forgot password ?</a> Or<a href="#">log in</a>
			   </p>
			  
	
			</div>
		  </div>
		  
   
		</div>
	   </div>




		// <div>
		// 	<h1>Register</h1>
		// 	<form onSubmit={registerUser}>
		// 		<input
		// 			value={name}
		// 			onChange={(e) => setName(e.target.value)}
		// 			type="text"
		// 			placeholder="Name"
		// 		/>
		// 		<br />
		// 		<input
		// 			value={email}
		// 			onChange={(e) => setEmail(e.target.value)}
		// 			type="email"
		// 			placeholder="Email"
		// 		/>
		// 		<br />
		// 		<input
		// 			value={password}
		// 			onChange={(e) => setPassword(e.target.value)}
		// 			type="password"
		// 			placeholder="Password"
		// 		/>
		// 		<br />
		// 		<input type="submit" value="Register" />
		// 	</form>
		// </div>
	);
}

export default App;
