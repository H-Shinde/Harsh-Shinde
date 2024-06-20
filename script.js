function OpenIg(){
window.open('https://www.instagram.com/harshshinde0/');
}
function OpenLinkedIn(){
window.open('https://www.linkedin.com/in/harshvardhan-shinde-b0a0a1295/');
}
function openAimsharp(){
    window.open('https://github.com/H-Shinde/AimSharp');
}
function openMinigames(){
    window.open('https://github.com/H-Shinde');
}


const observer = new IntersectionObserver((entries)=>{
    entries.forEach((entry)=>{
        console.log(entry);
        if(entry.isIntersecting){
            entry.target.classList.add('show');
        }
        else{
            entry.target.classList.remove('show');

        }
    })
})
const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el)=>observer.observe(el));