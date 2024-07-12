let players = [
    { name: 'Eran Forer', level: Math.floor(Math.random() * 5) + 1 },
    { name: 'אוטו ציון ובטינה ביוטי', level: Math.floor(Math.random() * 5) + 1 },
    { name: 'משה חן', level: Math.floor(Math.random() * 5) + 1 },
    { name: 'Omer', level: Math.floor(Math.random() * 5) + 1 },
    { name: 'אלון ניסנבלט', level: Math.floor(Math.random() * 5) + 1 },
    { name: 'RoTem', level: Math.floor(Math.random() * 5) + 1 },
    { name: 'גולדי', level: Math.floor(Math.random() * 5) + 1 },
    { name: 'לירון', level: Math.floor(Math.random() * 5) + 1 },
    { name: 'יובל הילמן', level: Math.floor(Math.random() * 5) + 1 },
    { name: 'Offir', level: Math.floor(Math.random() * 5) + 1 },
    { name: 'Sapir Madari', level: Math.floor(Math.random() * 5) + 1 },
    { name: 'נועם אבא של עוזי', level: Math.floor(Math.random() * 5) + 1 },
    { name: 'אפיק', level: Math.floor(Math.random() * 5) + 1 },
    { name: 'Ronsk', level: Math.floor(Math.random() * 5) + 1 },
    { name: 'Niv', level: Math.floor(Math.random() * 5) + 1 },
    { name: 'אלעד פור', level: Math.floor(Math.random() * 5) + 1 },
    { name: 'Adan', level: Math.floor(Math.random() * 5) + 1 },
    { name: 'עידו שלום אדריכלות ושימור מבנים', level: Math.floor(Math.random() * 5) + 1 },
    { name: 'Shaul Magor', level: Math.floor(Math.random() * 5) + 1 },
    { name: 'Dima', level: Math.floor(Math.random() * 5) + 1 },
    { name: 'Elad Gelbart', level: Math.floor(Math.random() * 5) + 1 },
    { name: 'גורו בעיר', level: Math.floor(Math.random() * 5) + 1 },
    { name: 'Moshe Nehemya', level: Math.floor(Math.random() * 5) + 1 },
    { name: 'player', level: Math.floor(Math.random() * 5) + 1 },
    { name: 'ארול', level: Math.floor(Math.random() * 5) + 1 },
];

function generateTeams() {
    const numTeams = 3;
    const teams = Array.from({ length: numTeams }, () => []);

    players.sort((a, b) => b.level - a.level);

    players.forEach((player, index) => {
        teams[index % numTeams].push(player);
    });

    const teamsContainer = document.getElementById('teams');
    teamsContainer.innerHTML = '';

    teams.forEach((team, i) => {
        const teamDiv = document.createElement('div');
        teamDiv.className = 'team';
        teamDiv.innerHTML = `<h2>Team ${i + 1}</h2>`;
        team.forEach(player => {
            const playerDiv = document.createElement('div');
            playerDiv.textContent = `${player.name} (Level: ${player.level})`;
            teamDiv.appendChild(playerDiv);
        });
        teamsContainer.appendChild(teamDiv);
    });
}

function loadPlayers() {
    const form = document.getElementById('playerForm');
    form.innerHTML = '';
    players.forEach((player, index) => {
        const playerInput = document.createElement('div');
        playerInput.className = 'player-input';
        playerInput.innerHTML = `
            <input type="text" value="${player.name}" id="name-${index}">
            <input type="number" value="${player.level}" id="level-${index}" min="1" max="5">
            <button onclick="deletePlayer(${index})">Delete</button>
        `;
        form.appendChild(playerInput);
    });
}

function addPlayer() {
    players.push({ name: '', level: 1 });
    loadPlayers();
}

function deletePlayer(index) {
    players.splice(index, 1);
    loadPlayers();
}

function savePlayers() {
    players = players.map((player, index) => {
        const name = document.getElementById(`name-${index}`).value;
        const level = document.getElementById(`level-${index}`).value;
        return { name, level: parseInt(level, 10) };
    });
    alert('Players updated!');
}

function loadStatistics() {
    const statsContainer = document.getElementById('statistics');
    statsContainer.innerHTML = '';

    players.forEach(player => {
        const playerDiv = document.createElement('div');
        playerDiv.textContent = `${player.name} - Level: ${player.level}`;
        statsContainer.appendChild(playerDiv);
    });
}

// Load players when the update page is opened
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        if (document.getElementById('playerForm')) {
            loadPlayers();
        }
        if (document.getElementById('statistics')) {
            loadStatistics();
        }
    });
} else {
    if (document.getElementById('playerForm')) {
        loadPlayers();
    }
    if (document.getElementById('statistics')) {
        loadStatistics();
    }
}