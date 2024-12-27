document.addEventListener("DOMContentLoaded", function(){
   const cars = [
    {   
        model: "Chevrolet Cobalt",
        description:"Chevrolet Cobalt – спроектирован как для ежедневных поездок, так и для путешествий на дальние расстояния со всей семьёй. Просторный комфортабельный салон позволяет разместить до пяти человек, при этом имеет объемный багажник",
        pics : ["https://astps-photos-kl.kcdn.kz/webp/47/4704e4bd-4f62-438b-a454-9d963b1fd8a9/1-750x470.jpg",
            "https://astps-photos-kl.kcdn.kz/webp/47/4704e4bd-4f62-438b-a454-9d963b1fd8a9/2-750x470.jpg",
            "https://astps-photos-kl.kcdn.kz/webp/47/4704e4bd-4f62-438b-a454-9d963b1fd8a9/5-750x470.jpg",
            "https://astps-photos-kl.kcdn.kz/webp/47/4704e4bd-4f62-438b-a454-9d963b1fd8a9/11-750x470.jpg"
        ],
        link:"https://kolesa.kz/a/show/179040028?fromUserSearch=1"
    },
    {   model: "Toyota Camry",
        description: "Встречайте новую гибридную Toyota Camry — впечатляющий седан с гибридным силовым агрегатом пятого поколения. Вместе с ним вы легко добьетесь поставленных целей и откроете новые горизонты.",
        pics:["https://astps-photos-kl.kcdn.kz/kolesa-newautomodels/663e0a5d238a466dd4504202/46/full.webp","https://astps-photos-kl.kcdn.kz/kolesa-newautomodels/663e0a5d238a466dd4504202/48/full.webp","https://astps-photos-kl.kcdn.kz/kolesa-newautomodels/663e0a5d238a466dd4504202/49/full.webp","https://astps-photos-kl.kcdn.kz/kolesa-newautomodels/663e0a5d238a466dd4504202/60/full.webp"],
        link:"https://kolesa.kz/cars/new/toyota-camry-xv80-sedan/"
    },
    {   model:"Porsche Panamera",
        description: "Модели Panamera сочетают в себе спортивную динамику движения и высокий уровень комфорта – как с точки зрения продольной, так и поперечной динамики. Идеально согласованное сочетание мощного привода, коробки передач Porsche Doppelkupplung (PDK) и ходовой части обеспечивает впечатляющую общую производительность.",
        pics:["https://astps-photos-kl.kcdn.kz/kolesa-newautomodels/60ab4a406960e10010639f82/12/full.webp","https://astps-photos-kl.kcdn.kz/kolesa-newautomodels/60ab4a406960e10010639f82/13/full.webp","https://astps-photos-kl.kcdn.kz/kolesa-newautomodels/60ab4a406960e10010639f82/21/full.webp","https://astps-photos-kl.kcdn.kz/kolesa-newautomodels/60ab4a406960e10010639f82/23/full.webp"],
        link:"https://kolesa.kz/cars/new/porsche-panamera/"
    },
    {   model:"Audi E-tron",
        description:"Откройте для себя новый полностью электрический Audi Q8 e-tron с высоковольтной аккумуляторной батареей емкостью до 106 кВт ч, обеспечивающей максимальный запас хода до 582 км. При низком уровне заряда в системе MMI можно активировать режим экономии энергии , чтобы получить дополнительный запас хода.",
        pics:["https://astps-photos-kl.kcdn.kz/kolesa-newautomodels/60a4b67cc544e500106b24a2/1/full.webp","https://astps-photos-kl.kcdn.kz/kolesa-newautomodels/60a4b67cc544e500106b24a2/2/full.webp","https://astps-photos-kl.kcdn.kz/kolesa-newautomodels/60a4b67cc544e500106b24a2/4/full.webp","https://astps-photos-kl.kcdn.kz/kolesa-newautomodels/60a4b67cc544e500106b24a2/21/full.webp"],
        link:"https://kolesa.kz/cars/new/audi-e-tron/"
    }

    ]
    const navLinks = document.querySelectorAll(".header__links");
    for (const navLink of navLinks) {
        navLink.addEventListener("click",function(event){
            event.preventDefault();
            const id = navLink.getAttribute("href");
            document.querySelector(id).scrollIntoView({
                behavior: "smooth"
            })
        })
    }
    const modal = document.querySelector(".modal");
    const modalClose = document.querySelector(".modal-back")
    const modalWrapper = document.querySelector(".modal-container");
    const modalPics = document.querySelector(".modal-pics");
    const modalItems = document.querySelectorAll(".modal-pic");
    const buttons = document.querySelectorAll(".card-button");
    const arrowLeft = document.querySelector(".modal-arrowleft");
    const arrowRight = document.querySelector(".modal-arrowright");
    const modalTitle = document.querySelector(".modal-title");
    const modalDesc = document.querySelector(".modal-description");
    const modalLink = document.querySelector(".modal-link");
    let sliderIndex = 0;
    function moveLeft(){
        if(sliderIndex !== 0){
            sliderIndex--;
            let offsetSize = modalWrapper.offsetWidth;
            modalPics.style.marginLeft = `-${sliderIndex*offsetSize}px`
        }
    };
    function moveRight(){
        if(sliderIndex !== modalItems.length - 1){
        sliderIndex++;
        let offsetSize = modalWrapper.offsetWidth;
        modalPics.style.marginLeft = `-${sliderIndex * offsetSize}px`
        }
    };
    arrowRight.addEventListener("click",moveRight);
    arrowLeft.addEventListener("click",moveLeft);
    function closeModal (){
        console.log('Modal close clicked');
        modal.classList.add("hide")
    }
    modalClose.addEventListener("click",closeModal);
    for( let i = 0; i < buttons.length; i++){
        buttons[i].addEventListener("click",function(){
            modal.classList.remove("hide");
            sliderIndex = 0;
            modalPics.style.marginLeft = "0";
            for(let j = 0; j < modalItems.length; j++){
                modalItems[j].src = cars[i].pics[j];
                modalDesc.textContent = cars[i].description;
                modalTitle.textContent = cars[i].model;
                modalLink.href = cars[i].link;
            }
        })
    }
 const feedback = document.querySelector(".feedback__input")
 const userName = document.querySelector("#name");
 const userPhone = document.querySelector("#telephone");
 const userEmail = document.querySelector("#email");
 const userText = document.querySelector("#feedbackText");

function validateInput(input,message){
    const errorMessage = input.nextElementSibling;
    if(input.value.trim()===""){
        input.classList.add("error");
        errorMessage.textContent = `Введите ваше ${message}`
        return false
    }
    else{
        input.classList.remove("error");
        errorMessage.textContent = '';
        return true
    }
}
feedback.addEventListener("submit",function(event){
    event.preventDefault();
    const nameIsValid = validateInput(userName,"Имя");
    const emailIsValid = validateInput(userEmail, "Email");
    const phoneIsValid = validateInput(userPhone,"Телефон");
    const messageIsValid = validateInput(userText, "Сообщение");
    if(nameIsValid && emailIsValid && phoneIsValid && messageIsValid){
        alert("Сообщение успешно отправлено!");
        supportForm.reset();
    }
})
})