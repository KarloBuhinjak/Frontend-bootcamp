document.addEventListener("DOMContentLoaded", () => {
  const urlParams = new URLSearchParams(window.location.search);
  const matchId = parseInt(urlParams.get("id"));

  const updateForm = document.querySelector("form");
  const updateMatchTypeInput = document.getElementById("match-type");
  const updateOpponentInput = document.getElementById("opponent");
  const updateResultHomeInput = document.getElementById("result-home");
  const updateResultAwayInput = document.getElementById("result-away");
  const updateMatchDateInput = document.getElementById("match-date");

  loadMatchForUpdate(matchId);

  updateForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const updatedMatch = {
      id: matchId,
      matchType: updateMatchTypeInput.value,
      opponent: updateOpponentInput.value,
      resultHome: updateResultHomeInput.value,
      resultAway: updateResultAwayInput.value,
      matchDate: updateMatchDateInput.value,
    };

    updateMatchInLocalStorage(updatedMatch);
    alert("Match updated successfully.");
    window.location.href = "matches.html";
  });

  function loadMatchForUpdate(matchId) {
    const matches = getMatchesFromLocalStorage();

    const matchToUpdate = matches.find((match) => match.id === matchId);

    if (matchToUpdate) {
      updateMatchTypeInput.value = matchToUpdate.matchType;
      updateOpponentInput.value = matchToUpdate.opponent;
      updateResultHomeInput.value = matchToUpdate.resultHome;
      updateResultAwayInput.value = matchToUpdate.resultAway;
      updateMatchDateInput.value = matchToUpdate.matchDate;
    } else {
      alert("Match not found!");
      window.location.href = "matches.html";
    }
  }

  function updateMatchInLocalStorage(updatedMatch) {
    let matches = getMatchesFromLocalStorage();
    matches = matches.map((match) => {
      if (match.id === updatedMatch.id) {
        return updatedMatch;
      }
      return match;
    });
    localStorage.setItem("matches", JSON.stringify(matches));
  }

  function getMatchesFromLocalStorage() {
    const matches = localStorage.getItem("matches");
    return JSON.parse(matches);
  }
});
