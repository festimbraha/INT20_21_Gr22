    function llogarite(){
    const cmimi = document.querySelector('#cmimi').value;
    const miremb = document.querySelector('#miremb').value;
    const zbritja = document.querySelector('#zbritja').value*0.01;
    const cmimiTotal = +cmimi + +miremb;
    const zbritja1 = cmimiTotal*zbritja;
    const pagesa = +cmimiTotal - +zbritja1;

    document.querySelector('#pagesa').innerHTML = 'Pagesa: €' + pagesa;
}
 // --> Show / Hide <--
  function myFunction() {
  var x = document.getElementById("MyDiv");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

  function myFunction1() {
    var message, x;
    message = document.getElementById("p01");
    message.innerHTML = "";
    x = document.getElementById("cmimi").value;
    try { 
      if(x == "")  throw "eshte pa vlere";
      if(isNaN(x)) throw "nuk eshte numer";
      x = Number(x);
      if(x != 300 && x!=600)   throw "duhet te jene 300 ose 600";
    }
    catch(err) {
      message.innerHTML = "*Cmimet " + err;
    }
    finally {
        document.getElementById("demo").value = " ";
      } 
  }
 