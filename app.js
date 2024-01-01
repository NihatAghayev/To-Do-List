const  girisKutusu = document.getElementById('input-box');
const listUl = document.getElementById('listUl');
const butonuSil = document.getElementById('sil')
butonuSil.style.display = "none";
function tikla(){
    if(girisKutusu.value === ''){
        alert("Lutfen Yapilacak  Birsey Giriniz.")
    }
    
    else{ 
        let li = document.createElement("li");
        li.innerHTML = girisKutusu.value;
        listUl.appendChild(li);
        while(girisKutusu.value === true){
             butonuSil.style.display = "block";
       
        }
       
       
        
    
    }
    
}
