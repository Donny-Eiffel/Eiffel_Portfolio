const mobileMenu = document.getElementById('mobile_menu');
mobileMenu.addEventListener("click",()=>{
const desktopMenu = document.getElementById("desktop_menu");
mobileMenu.classList.toggle("active");
desktopMenu.classList.toggle("active");
});


//object to store card properties
const projectCards = [
    {
        image: "#",
        title: "multi-post stories Gain+Glory",
        technologies: ['Ruby on Rails', 'css' , 'javaScript' , 'HTML'],
        description: "A plateform to share and celebrate stories through multi posts. lorem Ipsum is simply dummy text of the printing and typesetting industry. lorem ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relealorem ipsum is simply dummy text of the printing and typesetting industry.",
        githunLink: "#",
        liverLink:"#",
        link:"#"
    },

    {
        image: "#",
        title: "multi-post stories Gain+Glory",
        technologies: ['Ruby on Rails', 'css' , 'javaScript' , 'HTML'],
        description: "A plateform to share and celebrate stories through multi posts. lorem Ipsum is simply dummy text of the printing and typesetting industry. lorem ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relealorem ipsum is simply dummy text of the printing and typesetting industry.",
        githunLink: "#",
        liverLink:"#",
        link:"#"
    },

    {
        image: "#",
        title: "multi-post stories Gain+Glory",
        technologies: ['Ruby on Rails', 'css' , 'javaScript' , 'HTML'],
        description: "A plateform to share and celebrate stories through multi posts. lorem Ipsum is simply dummy text of the printing and typesetting industry. lorem ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relealorem ipsum is simply dummy text of the printing and typesetting industry.",
        githunLink: "#",
        liverLink:"#",
        link:"#"
    },

    {
        image: "#",
        title: "multi-post stories Gain+Glory",
        technologies: ['Ruby on Rails', 'css' , 'javaScript' , 'HTML'],
        description: "A plateform to share and celebrate stories through multi posts. lorem Ipsum is simply dummy text of the printing and typesetting industry. lorem ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relealorem ipsum is simply dummy text of the printing and typesetting industry.",
        githunLink: "#",
        liverLink:"#",
        link:"#"
    },

    {
        image: "#",
        title: "multi-post stories Gain+Glory",
        technologies: ['Ruby on Rails', 'css' , 'javaScript' , 'HTML'],
        description: "A plateform to share and celebrate stories through multi posts. lorem Ipsum is simply dummy text of the printing and typesetting industry. lorem ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relealorem ipsum is simply dummy text of the printing and typesetting industry.",
        githunLink: "#",
        liverLink:"#",
        link:"#"
    },

    {
        image: "#",
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
        image: "./assets/images/icon-skils.svg",
        title: "languages",
        languages: ['Database Management', 'Version Control', 'Cli','Web Development', 'API Design'],
    },
];

console.log('hi',projectCards);


projectCards.forEach((project)=>{
    const projectCard = document.getElementById('cards')
    const firstDiv = document.createElement('div');
    firstDiv.classList.add('card');

    const cardImage = document.createElement('div');
    cardImage.classList.add('card-image');

    const img = document.createElement('img')
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

    project.technologies.forEach((list)=>{
        const li = document.createElement('li');
        li.innerHTML = list;
        listItems.appendChild(li);
    });

    const cardBtn = document.createElement('div');
    cardBtn.classList.add('btn');

    const btn = document.createElement('button');

    btn.type = 'submit';

    btn.innerHTML = 'See Project'

    cardBtn.appendChild(btn);

    cardLanguage.appendChild(listItems);
    cardTitle.appendChild(headingOne);

    secondDiv.append(cardTitle,cardLanguage,cardBtn);



    firstDiv.append(cardImage, secondDiv);
    projectCard.appendChild(firstDiv)
    console.log(project)
})

// projectCards.forEach((project)=>{
//  const projects = document.getElementById('cards');
//  const firstDiv = document.createElement('div');
//  firstDiv.classList.add('card');
//  const secondDiv = document.createElement('div');
//  secondDiv.classList.add('card-image');
//  const img = document.createElement('img');
//  img.src = project.image;
//  img.alt = project.title
//  const details = document.createElement('div');
//  details.classList.add('cards-details');
//  const cardTitle = document.createElement('title');
//  cardTitle.classList.add('title');
//  const heading = document.createElement('h3');
//  heading.innerHTML = project.title;




// cardTitle.appendChild(heading);
// details.appendChild(cardTitle);
// firstDiv.append(secondDiv,details);
//  projects.appendChild(firstDiv);
//  console.log(project)
// });