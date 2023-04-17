const lbl = document.querySelector(".lbl__drinks");
const menuFirst =  document.querySelector(".menu__drinks__conteiner");
const btnPluse = document.querySelector(".img__Close");

lbl.onclick = () => {
  if(lbl.classList.contains('active')){
    lbl.classList.remove("active");
    setTimeout(()=>{
        menuFirst.style.display = 'none';
    },700);
        menuFirst.style.opacity = "0";
        menuFirst.style.visibility = "hidden";
        btnPluse.classList.remove("active");
  }
  else{
      if (window.matchMedia("(max-width: 1024px)").matches) {
            lbl.classList.add("active");
            setTimeout(()=>{
                  menuFirst.style.opacity = "1";
                  menuFirst.style.visibility = "visible"; 
            },100);
                  menuFirst.style.display = 'block';
                  btnPluse.classList.add("active");
          } else {

            lbl.classList.add("active");
            setTimeout(()=>{
                  menuFirst.style.opacity = "1";
                  menuFirst.style.visibility = "visible"; 
            },100);
                  menuFirst.style.display = 'flex';
                  btnPluse.classList.add("active");
            }
      }
};

const lblTwo = document.querySelector(".lbl__drinks-two")
const menuSecond = document.querySelector(".menu__drinks__conteiner-two");
btnPluseTwo = document.querySelector(".img__Close-two");

lblTwo.onclick = () => {
    if(lblTwo.classList.contains('active')){
        lblTwo.classList.remove("active");
      setTimeout(()=>{
            menuSecond.style.display = 'none';
      },700);
            menuSecond.style.opacity = "0";
            menuSecond.style.visibility = "hidden";
            btnPluseTwo.classList.remove("active");
    }
    else{
      if (window.matchMedia("(max-width: 1024px)").matches) {
            lblTwo.classList.add("active");
            setTimeout(()=>{
                  menuSecond.style.opacity = "1";
                  menuSecond.style.visibility = "visible"; 
            },100);
                  menuSecond.style.display = 'block';
                  btnPluseTwo.classList.add("active");
          } else {

            lblTwo.classList.add("active");
            setTimeout(()=>{
                  menuSecond.style.opacity = "1";
                  menuSecond.style.visibility = "visible"; 
            },100);
                  menuSecond.style.display = 'flex';
                  btnPluseTwo.classList.add("active");
            }
      }
  };

  const lblThree = document.querySelector(".lbl__deserts")
  const menuThree = document.querySelector(".menu__deserts__conteiner");
  btnPluseThree = document.querySelector(".img__Close-three");

  lblThree.onclick = () => {
    if(lblThree.classList.contains('active')){
        lblThree.classList.remove("active");
      setTimeout(()=>{
            menuThree.style.display = 'none';
      },700);
            menuThree.style.opacity = "0";
            menuThree.style.visibility = "hidden";
            btnPluseThree.classList.remove("active");
    }
    else{
      if (window.matchMedia("(max-width: 1024px)").matches) {
            lblThree.classList.add("active");
            setTimeout(()=>{
                  menuThree.style.opacity = "1";
                  menuThree.style.visibility = "visible"; 
            },100);
                  menuThree.style.display = 'block';
                  btnPluseThree.classList.add("active");
          } else {

            lblThree.classList.add("active");
            setTimeout(()=>{
                  menuThree.style.opacity = "1";
                  menuThree.style.visibility = "visible"; 
            },100);
                  menuThree.style.display = 'flex';
                  btnPluseThree.classList.add("active");
            }
      }
  };

  const lblFour = document.querySelector(".lbl__other")
  const menuFour = document.querySelector(".menu__other__conteiner");
  btnPluseFour = document.querySelector(".img__Close-four");
  const lblOther = document.querySelector(".lbl__other-label")

  lblFour.onclick = () => {
     
    if(lblFour.classList.contains('active')){
       lblFour.classList.remove("active");
      setTimeout(()=>{
            menuFour.style.display = 'none';
      },100);
            menuFour.style.opacity = "0";
            menuFour.style.visibility = "hidden";
            btnPluseFour.classList.remove("active");
    }
    else{
      if (window.matchMedia("(max-width: 1024px)").matches) {
            lblFour.classList.add("active");
            setTimeout(()=>{
                  menuFour.style.opacity = "1";
                  menuFour.style.visibility = "visible"; 
            },100);
                  menuFour.style.display = 'block';
                  btnPluseFour.classList.add("active");
          } else {

                  lblFour.classList.add("active");
            setTimeout(()=>{
                  menuFour.style.opacity = "1";
                  menuFour.style.visibility = "visible"; 
            },100);
                  menuFour.style.display = 'flex';
                  btnPluseFour.classList.add("active");
            }
      }
      if (window.matchMedia("(max-width: 1024px)").matches) {
            if(lblFour.classList.contains('active')){
                  lblOther.style.margin = "20px 0px 0px 0px";
            }else{
                  setTimeout(()=>{
                  lblOther.style.margin = "0px 0px 0px 0px";
                  },700);
            }
      }else{
            if(lblFour.classList.contains('active')){
                  lblOther.style.margin = "0px 0px 0px 0px";
            }else{
                  setTimeout(()=>{
                  lblOther.style.margin = "0px 0px 0px 0px";
                  },700);
            }
      }
  };

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
                  document.getElementById("burgerMenu").src="Images/menu.svg";
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
                  document.getElementById("burgerMenu").src="Images/menu.svg";
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
                  document.getElementById("burgerMenu").src="Images/menu.svg";
                  burgerIMG.style.opacity = "1";
                  burgerIMG.style.visibility = "visible";
                  burgerActive.style.display = "none";
                  menuBurger.style.display = "none";
            },450);
            
      }else{
            burgerIMG.classList.add('active');
            burgerActive.classList.add('active');

            setTimeout(()=>{
                  document.getElementById("burgerMenu").src="Images/Close.svg";
                  burgerIMG.style.opacity = "1";
                  burgerIMG.style.visibility = "visible";

                  burgerActive.style.opacity = "1";
                  burgerActive.style.visibility = "visible";
            },100)

                  burgerActive.style.display = "block";
                  menuBurger.style.display = "flex";
      }

  }
  
  

  

  
