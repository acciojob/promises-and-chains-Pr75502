//your JS code here. If required.
let  age=document.querySelector("#age")
let name=document.querySelector("#name")
let btn=document.querySelector("#btn")


btn.addEventListener("click", ()=>{
	if(name.value.trim()==""||age.value.trim()==""){
		alert("Please enter valid details.")
		return;
	}

	
	promise=new Promise((resolve, reject)=>{
	setTimeout(()=>{
		
		if(age.value>18 ){
			resolve(`Welcome, ${name.value}. You can vote.`)
		}else{
			reject(`Oh sorry ${name.value} . You aren't old enough.`)
			}
	}, 4000)
});
promise.then(message=>alert(message))
.catch(error=>alert(error))


})
