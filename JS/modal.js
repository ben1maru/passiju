        var modal = document.querySelector(".modal");
          var trigger = document.getElementById("mw-7");
          var closeButton = document.querySelector(".close-button");
          
          function toggleModal() {
              modal.classList.toggle("show-modal");
              document.body.style.overflow = "hidden"
              
          }
      
          function windowOnClick(event) {
              if (event.target === modal) {
                  toggleModal();
                  document.body.style.overflow = ""
              }
          }
      
         
          trigger.onclick = () =>{
            toggleModal();
            document.getElementById("image-menu").src="Images/Images for menu/Coffe/Cappuccino.HEIC";
              document.getElementById("name-item").innerHTML = "Капучіно";
          }
          window.addEventListener("click", windowOnClick); 

          closeButton.onclick = () =>{
            toggleModal();
            document.body.style.overflow = ""

          }
          
          var modal2 = document.querySelector(".modal");
          var trigger2 = document.getElementById("mw-1");
          var closeButton = document.querySelector(".close-button");
          
          function toggleModal() {
              modal2.classList.toggle("show-modal");
              document.body.style.overflow = "hidden"
             
          }
      
          function windowOnClick(event) {
              if (event.target === modal2) {
                  toggleModal();
                  document.body.style.overflow = ""
              }
          }
      
          trigger2.onclick = () =>{
            toggleModal();
            document.getElementById("image-menu").src="Images/Images for menu/Coffe/Espresso.PNG";
            document.getElementById("name-item").innerHTML = "Еспресо";
          }
          window.addEventListener("click", windowOnClick); 

          closeButton.onclick = () =>{
            toggleModal();
            document.body.style.overflow = ""

          }
          

          