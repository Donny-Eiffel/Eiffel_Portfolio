const mobileMenu = document.getElementById('mobile_menu');
mobileMenu.addEventListener("click",()=>{
const desktopMenu = document.getElementById("desktop_menu");
mobileMenu.classList.toggle("active");
desktopMenu.classList.toggle("active");
});


//object to store card properties
const projectCards = [
    {
        image: "./assets/images/icon-languages.svg",
        title: "multi-post stories Gain+Glory",
        technologies: ['Ruby on Rails', 'css' , 'javaScript' , 'HTML'],
        description: "A plateform to share and celebrate stories through multi posts. lorem Ipsum is simply dummy text of the printing and typesetting industry. lorem ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relealorem ipsum is simply dummy text of the printing and typesetting industry.",
        githunLink: "#",
        liverLink:"#",
        link:"#"
    },

    {
        image: "./assets/images/icon-languages.svg",
        title: "multi-post stories Gain+Glory",
        technologies: ['Ruby on Rails', 'css' , 'javaScript' , 'HTML'],
        description: "A plateform to share and celebrate stories through multi posts. lorem Ipsum is simply dummy text of the printing and typesetting industry. lorem ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relealorem ipsum is simply dummy text of the printing and typesetting industry.",
        githunLink: "#",
        liverLink:"#",
        link:"#"
    },

    {
        image: "./assets/images/icon-languages.svg",
        title: "multi-post stories Gain+Glory",
        technologies: ['Ruby on Rails', 'css' , 'javaScript' , 'HTML'],
        description: "A plateform to share and celebrate stories through multi posts. lorem Ipsum is simply dummy text of the printing and typesetting industry. lorem ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relealorem ipsum is simply dummy text of the printing and typesetting industry.",
        githunLink: "#",
        liverLink:"#",
        link:"#"
    },

    {
        image: "./assets/images/icon-languages.svg",
        title: "multi-post stories Gain+Glory",
        technologies: ['Ruby on Rails', 'css' , 'javaScript' , 'HTML'],
        description: "A plateform to share and celebrate stories through multi posts. lorem Ipsum is simply dummy text of the printing and typesetting industry. lorem ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relealorem ipsum is simply dummy text of the printing and typesetting industry.",
        githunLink: "#",
        liverLink:"#",
        link:"#"
    },

    {
        image: "./assets/images/icon-languages.svg",
        title: "multi-post stories Gain+Glory",
        technologies: ['Ruby on Rails', 'css' , 'javaScript' , 'HTML'],
        description: "A plateform to share and celebrate stories through multi posts. lorem Ipsum is simply dummy text of the printing and typesetting industry. lorem ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relealorem ipsum is simply dummy text of the printing and typesetting industry.",
        githunLink: "#",
        liverLink:"#",
        link:"#"
    },

    {
        image: "./assets/images/icon-languages.svg",
        title: "multi-post stories Gain+Glory",
        technologies: ['Ruby on Rails', 'css' , 'javaScript' , 'HTML'],
        description: "A plateform to share and celebrate stories through multi posts. lorem Ipsum is simply dummy text of the printing and typesetting industry. lorem ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relealorem ipsum is simply dummy text of the printing and typesetting industry.",
        githunLink: "#",
        liverLink:"#",
        link:"#"
    },
];


const projectCardsTwo = [
    {
        image: "./assets/images/icon-languages.svg",
        title: "languages",
        languages: ['javaScript', 'Ruby', 'Html','css'],
    },

    {
        image: "./assets/images/icon-frameworks (1).svg",
        title: "languages",
        languages: ['React.js', 'Ruby', 'RSpect','Capybara','selenium'],
    },

    {
        image: "./assets/images/icon-skills.svg",
        title: "languages",
        languages: ['Database Management', 'Version Control', 'Cli','Web Development', 'API Design'],
    },
];

console.log('hi',projectCards);

//define function 
function openModal(project) {
    const modal = document.createElement("div");
    modal.id = 'projectModal';  // Correct ID
    modal.classList.add('modal');

    const modalContent = document.createElement("div");
    modalContent.classList.add('modalcontent');
    modal.appendChild(modalContent);  // Append modalContent to modal

    const closeButton = document.createElement("span");
    closeButton.classList.add("closebutton");
    closeButton.innerHTML = "&times;";
    closeButton.addEventListener("click", closeModal);  // Call closeModal correctly
    modalContent.appendChild(closeButton);

    const modalImage = document.createElement("img");
    modalImage.classList.add("modalImage");
    modalImage.src = project.image;
    modalImage.alt = project.title;

  modalContent.appendChild(modalImage)
    const modalTitle = document.createElement("h3");
    modalTitle.textContent = project.title; //display title 

    

const list = document.createElement("ul");
list.id = "modaltechnologies";
project.technologies.forEach(tech =>{
const listItem = document.createElement("li");
listItem.innerHTML = tech;
list.appendChild(listItem);})



const modalDescription = document.createElement("p");
modalDescription.textContent=project.description
modalContent.append(modalTitle ,list, modalDescription)


document.body.appendChild(modal);
}


 function closeModal(){
      const modal = document.getElementById("projectModal");
      if (modal){
        modal.remove()
        window.removeEventListener("click",  outsideClick);
      }
    }
    function outsideClick(event) {
      if (event.target === event.currentTarget) {
        closeModal();
      }
    }

projectCards.forEach((project) => {
    const projectCard = document.getElementById('cards');
    const firstDiv = document.createElement('div');
    firstDiv.classList.add('card');

    const cardImage = document.createElement('div');
    cardImage.classList.add('card-image');

    const img = document.createElement('img');
    img.src = project.image;
    img.alt = project.title;

    cardImage.appendChild(img);

    const secondDiv = document.createElement('div');
    secondDiv.classList.add('card-details');

    const cardTitle = document.createElement('div');
    cardTitle.classList.add('title');

    const headingOne = document.createElement('h3');
    headingOne.innerHTML = project.title;

    const cardLanguage = document.createElement('div');
    cardLanguage.classList.add('languages');

    const listItems = document.createElement('ul');

    project.technologies.forEach((list) => {
        const li = document.createElement('li');
        li.innerHTML = list;
        listItems.appendChild(li);
    });

    const cardBtn = document.createElement('div');
    cardBtn.classList.add('btn');

    const btn = document.createElement('button');
    btn.type = 'button';  // Changed to 'button' to prevent form submission
    btn.innerHTML = 'See Project';

    btn.addEventListener('click', () => openModal(project));  // Pass a function reference

    cardBtn.appendChild(btn);
    cardLanguage.appendChild(listItems);
    cardTitle.appendChild(headingOne);

    secondDiv.append(cardTitle, cardLanguage, cardBtn);
    firstDiv.append(cardImage, secondDiv);
    projectCard.appendChild(firstDiv);
    console.log(project);
});



console.log('hi',projectCardsTwo);
projectCardsTwo.forEach((tech)=>{

const techCard = document.getElementById('technologies')
const divOne = document.createElement('div');
    divOne.classList.add('tech-card');

const techImage = document.createElement('div');
    techImage.classList.add('tech-image');

const img2 = document.createElement('img');
    img2.src = tech.image;
    img2.alt = tech.title;

    techImage.appendChild(img2);

const techTitle = document.createElement('div');
    techTitle.classList.add('tech-title');

const headingTwo = document.createElement('h3');
    headingTwo.innerHTML = tech.title;
    techTitle.appendChild(headingTwo);

const techLanguage = document.createElement('div');
    techLanguage.classList.add('tech-language');

const listItemsTwo = document.createElement('ul');

    tech.languages.forEach((list)=>{
        const li2 = document.createElement('li');
        li2.innerHTML = list;
        listItemsTwo.appendChild(li2);
    });


    techLanguage.appendChild(listItemsTwo);



    divOne.append(techImage,techTitle,techLanguage);
    
    
    techCard.appendChild(divOne)
    console.log(tech)
})