 const players = [
        {
            name: "Rohit Paudel",
            role: "Batsman",
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQz2TOq--jWJh50dgeoN8oLC5zbwhybLCVRQ&s",
            description: "A promising young batsman and captain of the Nepal national cricket team."
        },
        {
            name: "Aasif Sheikh",
            role: "Batsman",
            img: "https://www.cricnepal.com/wp-content/uploads/2023/06/Md-Aasif-Sheikh-Nepal-WCQ23-DP.webp",
        description: "Best and trustable palyer of Nepal. Md-Aasif-Sheikh is the first batter to score 50 in Asia Cup"
    },
    {
        name: "Sandeep Lamichhane",
        role: "Bowler",
        img: "https://www.cricnepal.com/wp-content/uploads/2023/06/Sandeep-Lamichhane-Nepal-WCQ23-DP.webp",
        description: "Nepal's star leg-spinner who has made a mark in various T20 leagues worldwide."
    },
    {
        name: "Dipendra Singh Airee",
        role: "All-rounder",
        img: "https://www.cricnepal.com/wp-content/uploads/2023/06/Dipendra-Singh-Airee-Nepal-WCQ23-DP.webp",
        description: "A reliable all-rounder who contributes with both bat and ball."
    },
    {
        name: "Kushal Bhurtel",
        role: "Batsman",
        img: "https://www.cricnepal.com/wp-content/uploads/2023/06/Kushal-Bhurtel-Nepal-WCQ23-DP.webp",
        description: "An aggressive opening batsman known for his powerful hitting."
    },
    {
        name: "Aarif Sheikh",
        role: "All-rounder",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQi85Js9fwjJI990KfRA5lnPD1tVCRSI2t-UQ&s",
        description: "A versatile all-rounder who adds depth to the team."
    },
    {
        name: "Anil Kumar Sah",
        role: "All-rounder",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTEYZ19E7DPBBlW4PVTqvPes_OKZ_gI49cAA&s",
        description: "Anil is a best batter in the team."
    },
    {
        name: "Sompal Kami",
        role: "All-rounder",
        img: "https://www.cricnepal.com/wp-content/uploads/2023/06/Sompal-Kami-Nepal-WCQ23-DP.webp",
        description: "Fast-bowling all-rounder known for his pace and hard-hitting abilities."
    }
];

const teams = [
    { name: "Nepal Men's National Team", description: "The primary team representing Nepal in men's cricket." },
    { name: "Nepal Women's National Team", description: "The primary team representing Nepal in women's cricket." },
    { name: "Nepal U-19 Team", description: "The under-19 team representing Nepal in international youth cricket." },
    { name: "Nepal 'A' Team", description: "The secondary team representing Nepal in men's cricket." },
];

const fixtures = [
    { date: "2024-07-15", opponent: "Sri Lanka Development Squad", location: "Colombo", format: "T20" },
    { date: "2024-07-18", opponent: "Sri Lanka Development Squad", location: "Colombo", format: "T20" },
    { date: "2024-07-22", opponent: "Bangladesh", location: "Dhaka", format: "ODI" },
    { date: "2024-08-05", opponent: "Afghanistan", location: "Kathmandu", format: "T20" }
];

const results = [
    { date: "2024-07-09", opponent: "Sri Lanka Development Squad", result: "Lost by 33 runs", format: "T20" },
    { date: "2024-06-30", opponent: "Zimbabwe", result: "Won by 5 wickets", format: "ODI" },
    { date: "2024-06-25", opponent: "Canada", result: "Match abandoned due to rain", format: "T20" }
];

function displayList(list, containerId) {
    const container = document.getElementById(containerId);
    list.forEach(item => {
        const listItem = document.createElement('li');
        listItem.classList.add('player-profile');
        if (containerId === 'player-list') {
            listItem.innerHTML = `
                <img src="${item.img}" alt="${item.name}">
                <h3>${item.name}</h3>
                <p>${item.role}</p>
                <p>${item.description}</p>
            `;
        } else if (containerId === 'fixtures-list') {
            listItem.innerHTML = `
                <p><strong>${item.date}</strong> vs ${item.opponent} (${item.format}) - ${item.location}</p>
            `;
        } else if (containerId === 'results-list') {
            listItem.innerHTML = `
                <p><strong>${item.date}</strong> vs ${item.opponent} (${item.format}) - ${item.result}</p>
            `;
        }
        container.appendChild(listItem);
    });
}

function showSection(id) {
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        if (section.id === id) {
            section.classList.add('active');
        } else {
            section.classList.remove('active');
        }
    });
}

document.addEventListener('DOMContentLoaded', () => {
    displayList(players, 'player-list');
    displayList(teams, 'team-list');
    displayList(fixtures, 'fixtures-list');
    displayList(results, 'results-list');
    const navLinks = document.querySelectorAll('nav ul li a');
    navLinks.forEach(link => {
        link.addEventListener('click', event => {
            event.preventDefault();
            const targetId = event.target.getAttribute('href').substring(1);
            showSection(targetId);
        });
    });
});