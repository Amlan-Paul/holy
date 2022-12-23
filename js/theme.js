// Js code to make color box enable or disable
  let colorIcons = document.querySelector(".color-icon"),
  icons = document.querySelector(".color-icon .icons");

  icons.addEventListener("click" , ()=>{
    colorIcons.classList.toggle("open");
  })

  // getting all .btn elements
  let buttons = document.querySelectorAll(".btn");

  for (var button of buttons) {
    button.addEventListener("click", (e)=>{ //adding click event to each button
      let target = e.target;

      let open = document.querySelector(".open");
      if(open) open.classList.remove("open");

      document.querySelector(".active").classList.remove("active");
      target.classList.add("active");

      // js code to switch colors (also day night mode)
      let root = document.querySelector(":root");
      let dataColor = target.getAttribute("data-color"); //getting data-color values of clicked button
      let color = dataColor.split(" "); //splitting each color from space and make them array

      //passing particular value to a particular root variable
      root.style.setProperty("--white", color[0]);
      root.style.setProperty("--black", color[1]);
      root.style.setProperty("--nav-main", color[2]);
      root.style.setProperty("--switchers-main", color[3]);
      root.style.setProperty("--light-bg"
      , color[4]);
     
      let iconName = target.className.split(" ")[2]; //getting the class name of icon
      
      let coloText = document.querySelector(".home-content span");
      let heading = document.querySelector(".heading");
      let heading1 = document.querySelector(".heading1");
      let heading2 = document.querySelector(".heading2");
      let heading3 = document.querySelector(".heading3");
      let heading4 = document.querySelector(".heading4");
      let heading5 = document.querySelector(".heading5");
      let heading6 = document.querySelector(".heading6");
      let heading7 = document.querySelector(".heading7");
      let heading8 = document.querySelector(".heading8");
      let heading9 = document.querySelector(".heading9");
      let heading10 = document.querySelector(".heading10");
      let heading11 = document.querySelector(".heading11");
      let heading12 = document.querySelector(".heading12");
      let textHeader = document.querySelector(".text-header");
      let textColor = document.querySelector(".text-color");
      let colorText = document.querySelector(".color-text");
      let colorBtn = document.querySelector(".color-btn");
      let colorCredit = document.querySelector(".color-credit");
      let colorIcon = document.getElementById("icon-size");
      let ceoVoice = document.querySelector(".ceo-voice");
      let notice = document.querySelector(".notice");
      let igText = document.querySelector(".ig-text");
      let adTxt = document.querySelector(".ad-txt");
      let onTxt = document.querySelector(".on-txt")
      
      
      if(target.classList.contains("fa-moon")){ //if icon name is moon
        target.classList.replace(iconName, "fa-sun") //replace it with the sun
        colorIcons.style.display = "none";
        coloText.classList.add("darkMode");
        heading.classList.add("darkMode");
        heading1.classList.add("darkMode");
        heading2.classList.add("darkMode");
        heading3.classList.add("darkMode");
        heading4.classList.add("darkMode");
        heading5.classList.add("darkMode");
        heading6.classList.add("darkMode");
        heading7.classList.add("darkMode");
        heading8.classList.add("darkMode");
        heading9.classList.add("darkMode");
        heading10.classList.add("darkMode");
        heading11.classList.add("darkMode");
        heading12.classList.add("darkMode");
        textHeader.classList.add("darkMode");
        textColor.classList.add("darkMode");
        colorText.classList.add("darkMode");
        colorBtn.classList.add("darkMode");
        colorCredit.classList.add("darkMode");
        colorIcon.classList.add("darkMode");
        ceoVoice.classList.add("darkMode");
        notice.classList.add("darkMode");
        igText.classList.add("darkMode");
        adTxt.classList.add("darkMode");
        onTxt.classList.add("darkMode");
        
        
      }else if (target.classList.contains("fa-sun")) { //if icon name is sun
        target.classList.replace("fa-sun", "fa-moon"); //replace it with the sun
        colorIcons.style.display = "block";
        coloText.classList.remove("darkMode");
        heading.classList.remove("darkMode");
        heading1.classList.remove("darkMode");
        heading2.classList.remove("darkMode");
        heading3.classList.remove("darkMode");
        heading4.classList.remove("darkMode");
        heading5.classList.remove("darkMode");
        heading6.classList.remove("darkMode");
        heading7.classList.remove("darkMode");
        heading8.classList.remove("darkMode");
        heading9.classList.remove("darkMode");
        heading10.classList.remove("darkMode");
        heading11.classList.remove("darkMode");
        heading12.classList.remove("darkMode");
        textHeader.classList.remove("darkMode");
        textColor.classList.remove("darkMode");
        colorText.classList.remove("darkMode");
        colorBtn.classList.remove("darkMode");
        colorCredit.classList.remove("darkMode");
        colorIcon.classList.remove("darkMode");
        ceoVoice.classList.remove("darkMode");
        notice.classList.remove("darkMode");
        igText.classList.remove("darkMode");
        adTxt.classList.remove("darkMode");
        onTxt.classList.remove("darkMode");
        document.querySelector(".btn.blue").click();
      }
    });
  }
