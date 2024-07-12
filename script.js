document.addEventListener('DOMContentLoaded', () => {
    const updateForm = document.getElementById('updateForm');
    const statsContainer = document.getElementById('statsContainer');

    if (updateForm) {
        updateForm.addEventListener('submit', (event) => {
            event.preventDefault();
            const player = event.target.player.value;
            const goals = parseInt(event.target.goals.value);
            const assists = parseInt(event.target.assists.value);
            updateStats(player, goals, assists);
            event.target.reset();
        });
    }

    if (statsContainer) {
        displayStats();
    }
});

function updateStats(player, goals, assists) {
    let players = JSON.parse(localStorage.getItem('players')) || {};
    if (!players[player]) {
        players[player] = { gamesPlayed: 0, goals: 0, assists: 0 };
    }
    players[player].gamesPlayed += 1;
    players[player].goals += goals;
    players[player].assists += assists;
    localStorage.setItem('players', JSON.stringify(players));
}

function displayStats() {
    let players = JSON.parse(localStorage.getItem('players')) || {};
    const statsContainer = document.getElementById('statsContainer');
    statsContainer.innerHTML = '';
    for (const player in players) {
        const playerStats = players[player];
        const playerDiv = document.createElement('div');
        playerDiv.innerHTML = `
            <h3>${player}</h3>
            <p>Games Played: ${playerStats.gamesPlayed}</p>
            <p>Goals: ${playerStats.goals}</p>
            <p>Assists: ${playerStats.assists}</p>
        `;
        statsContainer.appendChild(playerDiv);
    }
}
