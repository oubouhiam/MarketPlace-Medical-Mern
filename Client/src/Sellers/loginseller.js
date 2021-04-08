import { useHistory } from "react-router-dom";
import toastr from 'toastr';
import React, { useState } from 'react';
import axios from 'axios';
import "toastr/build/toastr.css";
function LoginSeller() {

	const history = useHistory();
	const [Username, setUsername] = useState();
  const [Password, setPassword] = useState();
  // const [status] = useState();


	const handleSubmit = (e) => {
		e.preventDefault();

	const user = {Username,Password};

	axios.post(`http://localhost:8080/seller/login`, user)
		.then(res => {
			if(!res.data.message){ 
       let status= res.data.status;

       localStorage.setItem("status", status);
        if(status == "InActive"){
          var yesno = window.confirm(
          "This Account is not activated! Yet please contact us if you have any problem" +
          " Email : supportSeller@marequetplce.com"
          );
          if (yesno) {   
            window.location.reload();
          }
        }else if (status == "Block"){
        var yesno = window.confirm(
          "This Account is Blocked! please contact us if you have any problem" +
          " Email : supportSeller@marequetplce.com"
          );
          if (yesno) {   
            window.location.reload();
          }
      }else{
        let token= res.data.token;
        localStorage.setItem("token", token);
        history.push('/DashboardSeller');
        toastr.info('User is authenticated SuccessFully', `Welcome ${user.login}`)
      }
    
    
    }
      else(

      // Calling toast method by passing string 
      toastr.warning(res.error, 'Username Or password invalid !!!! Please Check form !') 
      )
		 
		})
	}

    return(
      <div className="flex" >
      {/* Login Section */}
      <div className="w-full md:w-1/2 flex flex-col">
        <div className="flex justify-center pt-12 md:pl-12 md:-mb-24">
        <img src="http://image.noelshack.com/fichiers/2021/13/7/1617557837-shoplogo.png" style={{height: '100px'}} alt="logo" />
        </div>
        <div className="flex flex-col justify-center md:justify-start my-auto pt-8 md:pt-0 px-8 md:px-24 lg:px-32">
          <p className="text-center text-3xl">Espace Seller</p>
          <form className="flex flex-col pt-3 md:pt-8" onSubmit={handleSubmit}>
            <div className="flex flex-col pt-4">
              <label htmlFor="email" className="text-lg">Email</label>
              <input  id="text" type="text" placeholder="your@email.com" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline"
            value={Username}
            onChange={e => setUsername(e.target.value)} />
            </div>
            <div className="flex flex-col pt-4">
              <label htmlFor="password" className="text-lg">Password</label>
              <input id="password" type="password"  placeholder="Password" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline"
              value={Password} 
              onChange={e => setPassword(e.target.value)}
              />
             </div>
            <button onClick={toastr} type="submit"className="bg-gray-900 text-white active:bg-pink-700 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full" style={{transition: 'all 0.15s ease 0s'}}>
                               Sign In</button>
          </form>
          <div className="mt-12 text-sm font-display font-semibold text-gray-700 text-center"> Become a Seller <a
           className="cursor-pointer text-indigo-600 hover:text-indigo-800" href="/becomeseller">Click Here</a></div>
        </div>
      </div>
      {/* Image Section */}
      <div className="w-1/2 shadow-2xl">
        <img className="object-cover w-full h-screen hidden md:block" src="https://source.unsplash.com/IXUM4cJynP0" />
      </div>
    </div>
//        <div className="lg:flex">
//   <div className="lg:w-1/2 xl:max-w-screen-sm">
//     <div className="mt-10 px-12 sm:px-24 md:px-48 lg:px-12 lg:mt-16 xl:px-24 xl:max-w-2xl">
//       <h2 className="text-center text-4xl text-indigo-900 font-display font-semibold lg:text-left xl:text-5xl
//               xl:text-bold">Welcome Back Seller <br></br> Make some money</h2>
//       <div className="mt-12">
//         <form onSubmit={handleSubmit}>
//           <div>
//             <div className="text-sm font-bold text-gray-700 tracking-wide">UserName</div>
//             <input className="w-full text-lg py-2 border-b border-gray-300 focus:outline-none focus:border-indigo-500" type="text" placeholder="YassineSeller" 
//             value={Username}
//             onChange={e => setUsername(e.target.value)}
//             />
//           </div>
//           <div className="mt-8">
//             <div className="flex justify-between items-center">
//               <div className="text-sm font-bold text-gray-700 tracking-wide">
//                 Password
//               </div>
//               <div>
//                 <a className="text-xs font-display font-semibold text-indigo-600 hover:text-indigo-800
//                                   cursor-pointer" href="/forgetpassword">
//                   Forgot Password?
//                 </a>
//               </div>
//             </div>
//             <input className="w-full text-lg py-2 border-b border-gray-300 focus:outline-none focus:border-indigo-500" type="password" placeholder="Enter your password"
//             value={Password} 
//             onChange={e => setPassword(e.target.value)}
//             />
//           </div>
//           <div className="mt-10">
//             <button className="bg-indigo-500 text-gray-100 p-4 w-full rounded-full tracking-wide
//                           font-semibold font-display focus:outline-none focus:shadow-outline hover:bg-indigo-600
//                           shadow-lg" type="submit">
//               Log In
//             </button>
//           </div>
//         </form>
//         <div className="mt-12 text-sm font-display font-semibold text-gray-700 text-center">
//           Become a Seller <a className="cursor-pointer text-indigo-600 hover:text-indigo-800" href="/becomeseller">Click Here</a>
//         </div>
//       </div>
//     </div>
//   </div>
//   <div className="hidden lg:flex items-center justify-center bg-indigo-100 flex-1 h-screen">
//     <div className="max-w-xs transform duration-200 hover:scale-110 cursor-pointer">
//       <svg className="w-5/6 mx-auto" id="f080dbb7-9b2b-439b-a118-60b91c514f72" data-name="Layer 1" viewBox="0 0 528.71721 699.76785">

//         <rect y="17.06342" width={444} height={657} fill="#535461" />
//         <polygon points="323 691.063 0 674.063 0 17.063 323 0.063 323 691.063" fill="#7f9cf5" />
//         <circle cx={296} cy="377.06342" r={4} fill="#535461" />
//         <polygon points="296 377.66 298.773 382.463 301.545 387.265 296 387.265 290.455 387.265 293.227 382.463 296 377.66" fill="#535461" />
//         <polygon points="337 691.063 317.217 691 318 0.063 337 0.063 337 691.063" fill="#7f9cf5" />
//         <g opacity="0.1">
//           <polygon points="337.217 691 317.217 691 318.217 0 337.217 0 337.217 691" fill="#fff" />
//         </g>
//         <circle cx={296} cy="348.06342" r={13} opacity="0.1" />
//         <circle cx={296} cy="346.06342" r={13} fill="#535461" />
//         <line x1="52.81943" y1="16.10799" x2="52.81943" y2="677.15616" fill="none" stroke="#000" strokeMiterlimit={10} strokeWidth={2} opacity="0.1" />
//         <line x1="109.81943" y1="12.10799" x2="109.81943" y2="679.15616" fill="none" stroke="#000" strokeMiterlimit={10} strokeWidth={2} opacity="0.1" />
//         <line x1="166.81943" y1="9.10799" x2="166.81943" y2={683} fill="none" stroke="#000" strokeMiterlimit={10} strokeWidth={2} opacity="0.1" />
//         <line x1="223.81943" y1="6.10799" x2="223.81943" y2="687.15616" fill="none" stroke="#000" strokeMiterlimit={10} strokeWidth={2} opacity="0.1" />
//         <line x1="280.81943" y1="3.10799" x2="280.81943" y2={688} fill="none" stroke="#000" strokeMiterlimit={10} strokeWidth={2} opacity="0.1" />
//         <ellipse cx="463.21721" cy="95.32341" rx="39.5" ry={37} fill="#2f2e41" />
//         <path d="M683.8586,425.93948l-10,14s-48,10-30,25,44-14,44-14l14-18Z" transform="translate(-335.6414 -100.11607)" fill="#ffb8b8" />
//         <path d="M735.8586,266.93948s-13,0-16,18-6,78-6,78-42,55-35,62,15,20,20,18,48-61,48-61Z" transform="translate(-335.6414 -100.11607)" fill="#7f9cf5" />
//         <path d="M735.8586,266.93948s-13,0-16,18-6,78-6,78-42,55-35,62,15,20,20,18,48-61,48-61Z" transform="translate(-335.6414 -100.11607)" opacity="0.1" />
//         <path d="M775.8586,215.93948s-1,39-13,41-8,15-8,15,39,23,65,0l5-12s-18-13-10-31Z" transform="translate(-335.6414 -100.11607)" fill="#ffb8b8" />
//         <path d="M708.8586,455.93948s-59,110-37,144,55,104,60,104,33-14,31-23-32-76-40-82-4-22-3-23,34-54,34-54-1,84,3,97-1,106,4,110,28,11,32,5,16-97,8-118l15-144Z" transform="translate(-335.6414 -100.11607)" fill="#2f2e41" />
//         <path d="M762.8586,722.93948l-25,46s-36,26-11,30,40-6,40-6l22-16v-46Z" transform="translate(-335.6414 -100.11607)" fill="#2f2e41" />
//         <path d="M728.8586,696.93948l13,31s5,13,0,16-19,21-10,23a29.29979,29.29979,0,0,0,5.49538.5463,55.56592,55.56592,0,0,0,40.39768-16.43936l8.10694-8.10694s-27.77007-63.94827-27.385-63.47414S728.8586,696.93948,728.8586,696.93948Z" transform="translate(-335.6414 -100.11607)" fill="#2f2e41" />
//         <circle cx="465.21721" cy="105.82341" r={34} fill="#ffb8b8" />
//         <path d="M820.3586,253.43948l-10.5,10.5s-32,12-47,0c0,0,5.5-11.5,5.5-10.5s-43.5,7.5-47.5,25.5,3,49,3,49-28,132-17,135,114,28,113,9,8-97,8-97l35-67s-5-22-17-29S820.3586,253.43948,820.3586,253.43948Z" transform="translate(-335.6414 -100.11607)" fill="#7f9cf5" />
//         <path d="M775.8586,448.93948l-13,8s-50,34-24,40,41-24,41-24l10-12Z" transform="translate(-335.6414 -100.11607)" fill="#ffb8b8" />
//         <path d="M849.8586,301.93948l9,9s6,84-6,101-67,63-70,60-22-18-18-20,57.18287-57.56942,57.18287-57.56942l-4.18287-77.43058Z" transform="translate(-335.6414 -100.11607)" opacity="0.1" />
//         <path d="M853.8586,298.93948l9,9s6,84-6,101-67,63-70,60-22-18-18-20,57.18287-57.56942,57.18287-57.56942l-4.18287-77.43058Z" transform="translate(-335.6414 -100.11607)" fill="#7f9cf5" />
//         <path d="M786.797,157.64461s-11.5575-4.20273-27.31774,4.72807l8.40546,2.10136s-12.60819,1.05068-14.18421,17.8616h5.77875s-3.67739,14.70955,0,18.91228l2.364-4.4654,6.82943,13.65887,1.576-6.82944,3.15205,1.05069,2.10137-11.03217s5.25341,7.88012,9.45614,8.40546V195.2065s11.5575,13.13352,15.23489,12.60818l-5.25341-7.35477,7.35477,1.576-3.152-5.25341,18.91228,5.25341-4.20273-5.25341,13.13352,4.20273,6.3041,2.6267s8.9308-20.4883-3.67739-34.67251S798.61712,151.60318,786.797,157.64461Z" transform="translate(-335.6414 -100.11607)" fill="#2f2e41" />
//       </svg>
//     </div>
//   </div>
// </div>


          )
        }
        export default LoginSeller;