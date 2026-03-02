const form = document.getElementById("newsletterForm");

  form.addEventListener("submit", function(e) {
    e.preventDefault();

    const email = document.getElementById("userEmail").value;

    fetch("https://docs.google.com/forms/d/e/1FAIpQLScWN31ye_IQ4ITj3URMB0ek9r4WUmLlicnGWnnwoYp3qdUaEA/formResponse", {
      method: "POST",
      mode: "no-cors",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      body: "entry.784493293=" + encodeURIComponent(email)
    });

    document.getElementById("newsletterFormBox").classList.add("d-none");
    document.getElementById("successMessage").classList.remove("d-none");
  });

  function resetNewsletter() {
    document.getElementById("newsletterForm").reset();
    document.getElementById("successMessage").classList.add("d-none");
    document.getElementById("newsletterFormBox").classList.remove("d-none");
  }


  const allForms={
    Hamburger:document.querySelector('.hamburger'),
    closeIcon:document.querySelector('.close-box'),
    headerNav:document.querySelector('Header nav'),
    footerDate:document.querySelector('.dte'),
    
    
  }

  allForms.Hamburger.addEventListener('click' , (e)=>{
    e.stopPropagation();
    allForms.headerNav.classList.toggle('active');

  })
  allForms.closeIcon.addEventListener('click' , ()=>{
    allForms.headerNav.classList.remove('active');
  })
  document.addEventListener('click' , (e)=>{
   if( !allForms.closeIcon.contains(e.target) && !allForms.Hamburger.contains(e.target)){
    allForms.headerNav.classList.remove('active');
  }
})

  let  updateYear=new Date().getFullYear();
  allForms.footerDate.innerHTML=updateYear;




  