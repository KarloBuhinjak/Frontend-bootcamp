document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("form");
  const playersList = document.querySelector(".players-list");

  loadPlayers();

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const firstName = document.getElementById("first-name").value;
    const lastName = document.getElementById("last-name").value;
    const photoLink = document.getElementById("photo-link").value;
    const position = document.getElementById("position").value;

    const player = {
      id: Date.now(),
      firstName,
      lastName,
      photoLink,
      position,
    };

    addPlayerToLocalStorage(player);
    addPlayerToList(player);
    form.reset();
  });

  function addPlayerToLocalStorage(player) {
    const players = getPlayersFromLocalStorage();
    players.push(player);
    localStorage.setItem("players", JSON.stringify(players));
  }

  function getPlayersFromLocalStorage() {
    const players = localStorage.getItem("players");
    return JSON.parse(players);
  }

  function loadPlayers() {
    const players = getPlayersFromLocalStorage();
    players.forEach((player) => addPlayerToList(player));
  }

  function addPlayerToList(player) {
    const positionMap = {
      FW: "Forward",
      MID: "Midfielder",
      DF: "Defender",
      GK: "Goalkeeper",
    };

    const playerElement = document.createElement("div");
    playerElement.classList.add("player");
    playerElement.innerHTML = `
          <img src="${player.photoLink}" alt="${player.firstName} ${
      player.lastName
    }" />
          <div class="player-info">
              <h3>${player.firstName} ${player.lastName}</h3>
              <p>Position: ${positionMap[player.position]}</p>
          </div>
          <div class="player-actions">
              <button class="btn-update" data-id="${player.id}">Update</button>
              <button class="btn-delete" data-id="${player.id}">Delete</button>
          </div>
      `;

    playersList.appendChild(playerElement);

    playerElement
      .querySelector(".btn-delete")
      .addEventListener("click", function () {
        deletePlayer(player.id);
      });

    playerElement
      .querySelector(".btn-update")
      .addEventListener("click", function () {
        window.location.href = `update-player.html?id=${player.id}`;
      });
  }

  function deletePlayer(playerId) {
    let players = getPlayersFromLocalStorage();
    players = players.filter((player) => player.id !== playerId);
    localStorage.setItem("players", JSON.stringify(players));
    location.reload();
  }
});
