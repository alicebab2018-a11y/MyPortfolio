const toggle=document.querySelector(".mobile-toggle");
const menu=document.querySelector(".menu");
toggle.addEventListener("click",()=>{const open=menu.classList.toggle("active");toggle.setAttribute("aria-expanded",open);toggle.innerHTML=open?'<i class="fas fa-xmark"></i>':'<i class="fas fa-bars"></i>';});
document.querySelectorAll(".menu a").forEach(link=>link.addEventListener("click",()=>{menu.classList.remove("active");toggle.setAttribute("aria-expanded","false");toggle.innerHTML='<i class="fas fa-bars"></i>';}));
document.getElementById("hireForm").addEventListener("submit",e=>{e.preventDefault();document.getElementById("formNote").textContent="Your request is ready. Connect this form to your email/backend to receive submissions.";});