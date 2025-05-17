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

//function to create a card