  burgerIMG = document.querySelector(".menu__img");
  burgerActive = document.querySelector(".menu__burger__main");
  menuBurger = document.querySelector(".menu__burger");
  mainMenu = document.querySelector(".mb__main-link-menu");
  mainMenuBouquet = document.querySelector(".mb__bouquete");
  
  mainMenu.onclick = () =>{
            burgerIMG.classList.remove('active');
            burgerIMG.classList.remove('active');

            setTimeout(()=>{
                  burgerActive.style.opacity = "0";
                  burgerActive.style.visibility = "hidden";  
            },100);
            setTimeout(()=>{
                  document.getElementById("burgerMenu").src="../Images/menu.svg";
                  burgerIMG.style.opacity = "1";
                  burgerIMG.style.visibility = "visible";
                  burgerActive.style.display = "none";
                  menuBurger.style.display = "none";
            },450);
      }

      mainMenuBouquet.onclick = () =>{
            burgerIMG.classList.remove('active');
            burgerIMG.classList.remove('active');

            setTimeout(()=>{
                  burgerActive.style.opacity = "0";
                  burgerActive.style.visibility = "hidden";  
            },100);
            setTimeout(()=>{
                  document.getElementById("burgerMenu").src="../Images/menu.svg";
                  burgerIMG.style.opacity = "1";
                  burgerIMG.style.visibility = "visible";
                  burgerActive.style.display = "none";
                  menuBurger.style.display = "none";
            },450);
      }

  burgerIMG.onclick = () => {
      if(burgerIMG.classList.contains('active')){
            burgerIMG.classList.remove('active');
            burgerIMG.classList.remove('active');

            setTimeout(()=>{
                  burgerActive.style.opacity = "0";
                  burgerActive.style.visibility = "hidden";  
            },100);
            setTimeout(()=>{
                  document.getElementById("burgerMenu").src="../Images/menu.svg";
                  burgerIMG.style.opacity = "1";
                  burgerIMG.style.visibility = "visible";
                  burgerActive.style.display = "none";
                  menuBurger.style.display = "none";
            },450);
            
      }else{
            burgerIMG.classList.add('active');
            burgerActive.classList.add('active');

            setTimeout(()=>{
                  document.getElementById("burgerMenu").src="../Images/Close.svg";
                  burgerIMG.style.opacity = "1";
                  burgerIMG.style.visibility = "visible";

                  burgerActive.style.opacity = "1";
                  burgerActive.style.visibility = "visible";
            },100)

                  burgerActive.style.display = "block";
                  menuBurger.style.display = "flex";
      }

  }
  
  

  

  
