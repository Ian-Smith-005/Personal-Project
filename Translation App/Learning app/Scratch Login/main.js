function myFunction(){
  var a = document.getElementById('password');
  var b = document.getElementById('hide1');
  var c = document.getElementById('hide2');
  
  if (a.type === 'password'){
    a.type = 'text'
    b.style.display = 'block';
    c.style.display = 'none'
  }
  else{
    a.type = 'password'
    b.style.display = 'none';
    c.style.display = 'block'
  }
}


function myAuthenticate() {
        var q = document.getElementsByClassName('passcode');
        var x = document.getElementsByClassName('name');
        
        if (passcode == 'MYP42022' && name == 'Guest1'){
                window.location.assign('Home.html');
        }
        else{
                q.style.outline = 'red';
                x.style.outline = 'red';
        }
        return false;
} 