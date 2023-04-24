import { useEffect, useState } from "react";



function Registration() {

        const[test,setTest]=useState([])
useEffect(()=>{
	const ajaxSend = (formData) => {
        fetch("mail.php", {
            method: "POST",
            headers: {
                "Content-Type": "application/json", 
            },
            body: JSON.stringify(formData)
        })
            .then(response => alert("Сообщение отправлено"))
            .catch(error => console.error(error))
    };

    if (document.getElementsByTagName("form")) {
        const forms = document.getElementsByTagName("form");

        for (let i = 0; i < forms.length; i++) {
            forms[i].addEventListener("submit", function (e) {
                e.preventDefault();

                let formData = new FormData(this);
                formData = Object.fromEntries(formData);

                ajaxSend(formData)
                    .then((response) => {
                        console.log(response);
                    })
                    .catch((err) => console.error(err))
            });
        };
    }
})
 
  
  
 
      
    
    
   
      
  return (
	 <>
  <form>
    <img className="mb-4" src="/docs/5.3/assets/brand/bootstrap-logo.svg" alt="" width="72" height="57"/>
    <h1 className="h3 mb-3 fw-normal"><ya-tr-span data-index="4-0" data-translated="true" data-source-lang="en" data-target-lang="ru" data-value="Please sign in" data-translation="Пожалуйста, войдите" data-ch="0" data-type="trSpan">Пожалуйста, войдите</ya-tr-span></h1>

    <div className="form-floating">
      <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com"/>
      <label for="floatingInput"><ya-tr-span data-index="5-0" data-translated="true" data-source-lang="en" data-target-lang="ru" data-value="Email address" data-translation="Эл. адрес" data-ch="0" data-type="trSpan">Эл. адрес</ya-tr-span></label>
    </div>
    <div className="form-floating">
      <input type="password" className="form-control" id="floatingPassword" placeholder="Пароль"/>
      <label for="floatingPassword">Пароль</label>
    </div>

    <div className="checkbox mb-3">
      <label>
        <input type="checkbox" value="remember-me"/><ya-tr-span data-index="6-0" data-translated="true" data-source-lang="en" data-target-lang="ru" data-value=" Remember me " data-translation=" Запомнить меня " data-ch="0" data-type="trSpan"> Запомнить меня  </ya-tr-span></label>
    </div>
    <button className="w-100 btn btn-lg btn-primary" type="submit"><ya-tr-span data-index="7-0" data-translated="true" data-source-lang="en" data-target-lang="ru" data-value="Sign in" data-translation="Вход" data-ch="0" data-type="trSpan">Вход</ya-tr-span></button>
    <p className="mt-5 mb-3 text-body-secondary"><ya-tr-span data-index="8-0" data-translated="true" data-source-lang="en" data-target-lang="ru" data-value="© 2017–2023" data-translation="© 2017–2023" data-ch="0" data-type="trSpan">© 2017–2023</ya-tr-span></p>
  </form>
  </> )
}
 
 

    
      
  
     
export default Registration