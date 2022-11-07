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
    console.log(members[i].name, members[i].role, members[i].memberImage)
    
}