let characters = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z','A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z','@','#','$','&','1','2','3','4','5','6','7','8','9','0']



 function getPassword() {
     let password = ""
     let pass = []
     for(let j = 1; j<=4; j++ )
     {
    for(let i = 1; i<=15; i++ )
    {   
        let num = Math.floor(Math.random()*65)+1
        password += characters[num]
    }  
       pass.push(password)
       password = ''
    
       }
      
      document.getElementById("pass1").textContent = pass[0]
      document.getElementById("pass2").textContent = pass[1]
      document.getElementById("pass3").textContent = pass[2]
      document.getElementById("pass4").textContent = pass[3]
      
      
 }
 
 
 