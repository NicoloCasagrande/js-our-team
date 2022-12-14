"use strict";

const members = [
    {
        name: 'Wayne Barnett',
        role: 'Founder & CEO', 
        memberImage: 'img/wayne-barnett-founder-ceo.jpg'
    },
    {
        name: 'Angela Caroll',
        role: 'Chief Editor', 
        memberImage: 'img/angela-caroll-chief-editor.jpg'
    }, 
    {
        name: 'Walter Gordon',
        role: 'Office Manager', 
        memberImage: 'img/walter-gordon-office-manager.jpg'
    },
    {
        name: 'Angela Lopez',
        role: 'Social Media Manager', 
        memberImage: 'img/angela-lopez-social-media-manager.jpg'
    },
    {
        name: 'Scott Estrada',
        role: 'Developer', 
        memberImage: 'img/scott-estrada-developer.jpg'
    },
    {
        name: 'Barbara Ramos',
        role: 'Graphic Designer', 
        memberImage: 'img/barbara-ramos-graphic-designer.jpg'
    }
];

for (let i = 0; i < members.length; i++) {
    console.log(members[i].name, members[i].role, members[i].memberImage);
}

const display = document.getElementById('member-list');

for (let i = 0; i < members.length; i++) {
    const memberLi = document.createElement('li');
    memberLi.innerHTML = `${members[i].name}, ${members[i].role}, ${members[i].memberImage}`;
    display.append(memberLi);
}

const cardContainer = document.querySelector('.container');

for (let i = 0; i < members.length; i++) {
    const memberCard = document.createElement('div');
    memberCard.classList.add('card');
    memberCard.innerHTML += `<img src="${members[i].memberImage}" alt="">`;
    memberCard.innerHTML += `<span>${members[i].name}</span>`;
    memberCard.innerHTML += `<span>${members[i].role}</span>`;
    cardContainer.append(memberCard);
}
