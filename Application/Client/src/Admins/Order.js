// import { useHistory } from "react-router-dom";
// import toastr from 'toastr';
// import React, { useState,useEffect } from 'react';
// import axios from 'axios';
function LoginSuperAdmin() {







    return(
        

    <div className="h-screen ">

      <div className="h-screen lg:bg-back bg-cover bg-center bg-indigo-600 bg-opacity-25 ">
      <nav className="bg-white px-8 pt-2 shadow-md my-9">
        <div className="-mb-px flex justify-center">
            <a className="no-underline text-teal-dark border-b-2 border-teal-dark uppercase tracking-wide font-bold text-xs py-3 mr-8 p-3" href="/AdminDashboard">
              Home
            </a>
            <a className="no-underline text-grey-dark border-b-2 border-transparent uppercase tracking-wide font-bold text-xs py-3 mr-8 p-3" href="/ClientOrder">
            Orders
            </a>
            <a className="no-underline text-grey-dark border-b-2 border-transparent uppercase tracking-wide font-bold text-xs py-3 mr-8 p-3" href="/Delivery">
            delivery Service
            </a>
            <a className="no-underline text-grey-dark border-b-2 border-transparent uppercase tracking-wide font-bold text-xs py-3 p-3" href="/Logout">
            log out
            </a>
        </div>
      </nav>
    
    <main className="flex-1  dark:bg-gray-900 overflow-y-auto transition
      duration-500 ease-in-out">
      <div className="px-24 py-12 text-gray-700 dark:text-gray-500 transition
        duration-500 ease-in-out">

  
  

        <div className="container my-12 mx-auto px-4 md:px-12">
  <div className="flex flex-wrap -mx-1 lg:-mx-4">
    {/* Column */}
    <div className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
      {/* Article */}
      <article className="overflow-hidden rounded-lg shadow-lg">
        <a href="/">
          <img alt="Placeholder" className="block h-auto w-full" src="./product.jpg" />
        </a>
        <header className="flex items-center justify-between leading-tight p-2 md:p-4">
          <h1 className="text-lg">
            <a className="no-underline hover:underline text-black" href="/">
              Dolipran
            </a>
          </h1>
          <p className="text-grey-darker text-sm">
            14/4/19
          </p>
           <p className="text-grey-darker text-sm">
            Statius : Inconfirme
          </p>
        </header>
        <header className="flex items-center justify-between leading-tight p-2 md:p-4">
           <p className="text-grey-darker text-sm">
            Adresse : Agadir Morocco
          </p>
            <p className="text-grey-darker text-sm">
            Phone: 0621114160
          </p>
           <p className="text-grey-darker text-sm">
            180MAD
          </p>
        </header>
        <footer className="flex items-center justify-between leading-none p-2 md:p-4">
          <a className="flex items-center no-underline hover:underline text-black" href="/">
            <img alt="Placeholder" className="block rounded-full w-10" src="./admins/iconadmin.png" />
            <p className="ml-2 text-sm">
              Yassine Cherkaoui
            </p>
          </a>
          <form action="//">
        <select class=" bg-white dark:bg-gray-800 text-black-400 appearance-none border-none inline-block py-3 pl-3 pr-8 rounded leading-tight w-full">
		<option class="pt-6" value="Unconfirmed">Unconfirmed</option>
		<option value="Confirmed">Confirmed</option>
        </select>
                <button type="submit"
              class="p-2 bg-grey-600 text-black-400 rounded-full  transition ease-in duration-200 focus:outline-none">
        <svg viewBox="0 0 20 20" enable-background="new 0 0 20 20" class="w-6 h-6">
          <path fill="/000" d="M16,10c0,0.553-0.048,1-0.601,1H11v4.399C11,15.951,10.553,16,10,16c-0.553,0-1-0.049-1-0.601V11H4.601
                                  C4.049,11,4,10.553,4,10c0-0.553,0.049-1,0.601-1H9V4.601C9,4.048,9.447,4,10,4c0.553,0,1,0.048,1,0.601V9h4.399
                                  C15.952,9,16,9.447,16,10z" />
        </svg>
      </button>
          </form>
        </footer>
        
      </article>
      {/* END Article */}
    </div>
   
  </div>
</div>

  
  
  
        
      </div>
  
    </main>
    
  </div>
  </div>



    )

}
export default LoginSuperAdmin;