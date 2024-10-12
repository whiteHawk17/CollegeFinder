let btn=document.querySelector("button");
let url="http://universities.hipolabs.com/search?name=";
let ip=document.querySelector("input");
let ul=document.querySelector("ul");

btn.addEventListener("click",async()=>{

    ul.innerText="";
    let clgArr=await getClg();
    
    for(clg of clgArr){
        let li=document.createElement("li");
        li.innerText=clg.name;
        ul.appendChild(li);
        
    }
   
    
})

ip.addEventListener("keydown",async(event)=>{
    if(event.key==="Enter"){
        ul.innerText="";
    let clgArr=await getClg();
    
    for(clg of clgArr){
        let li=document.createElement("li");
        li.innerText=clg.name;
        ul.appendChild(li);
        
    }
    }
});


async function getClg(){
    let  url1 =`${url}${ip.value}`;
    let  resArr  = await axios.get(url1);
    return resArr.data;
}