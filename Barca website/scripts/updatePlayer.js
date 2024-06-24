document.addEventListener("DOMContentLoaded", () => {
  const urlParams = new URLSearchParams(window.location.search);
  const playerId = parseInt(urlParams.get("id"));

  const updateForm = document.getElementById("update-form");
  const updateFirstNameInput = document.getElementById("update-first-name");
  const updateLastNameInput = document.getElementById("update-last-name");
  const updatePhotoLinkInput = document.getElementById("update-photo-link");
  const updatePositionInput = document.getElementById("update-position");

  loadPlayerForUpdate(playerId);

  updateForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const updatedPlayer = {
      id: playerId,
      firstName: updateFirstNameInput.value,
      lastName: updateLastNameInput.value,
      photoLink: updatePhotoLinkInput.value,
      position: updatePositionInput.value,
    };

    updatePlayerInLocalStorage(updatedPlayer);
    alert("Player updated successfully.");
    window.location.href = "players.html";
  });

  function loadPlayerForUpdate(playerId) {
    const players = getPlayersFromLocalStorage();

    const playerToUpdate = players.find((player) => player.id === playerId);

    if (playerToUpdate) {
      updateFirstNameInput.value = playerToUpdate.firstName;
      updateLastNameInput.value = playerToUpdate.lastName;
      updatePhotoLinkInput.value = playerToUpdate.photoLink;
      updatePositionInput.value = playerToUpdate.position;
    } else {
      alert("Player not found!");
      window.location.href = "players.html";
    }
  }

  function updatePlayerInLocalStorage(updatedPlayer) {
    let players = getPlayersFromLocalStorage();
    players = players.map((player) => {
      if (player.id === updatedPlayer.id) {
        return updatedPlayer;
      }
      return player;
    });
    localStorage.setItem("players", JSON.stringify(players));
  }

  function getPlayersFromLocalStorage() {
    const players = localStorage.getItem("players");
    console.log(JSON.parse(players));
    return JSON.parse(players);
  }
});
