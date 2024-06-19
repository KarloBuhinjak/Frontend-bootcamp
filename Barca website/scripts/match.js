document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("form");
  const matchesList = document.querySelector(".matches-list");

  loadMatches();

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const matchType = document.getElementById("match-type").value;
    const opponent = document.getElementById("opponent").value;
    const resultHome = document.getElementById("result-home").value;
    const resultAway = document.getElementById("result-away").value;
    const matchDate = document.getElementById("match-date").value;

    const match = {
      id: Date.now(),
      matchType,
      opponent,
      resultHome,
      resultAway,
      matchDate,
    };

    addMatchToLocalStorage(match);
    addMatchToList(match);
    form.reset();
  });

  function addMatchToLocalStorage(match) {
    const matches = getMatchesFromLocalStorage();
    matches.push(match);
    localStorage.setItem("matches", JSON.stringify(matches));
  }

  function getMatchesFromLocalStorage() {
    const matches = localStorage.getItem("matches");
    return matches ? JSON.parse(matches) : [];
  }

  function loadMatches() {
    const matches = getMatchesFromLocalStorage();
    matches.forEach((match) => addMatchToList(match));
  }

  function addMatchToList(match) {
    const matchElement = document.createElement("div");
    matchElement.classList.add("match");

    matchElement.innerHTML = `
      <img src="images/barca_logo.png" alt="Barcelona" />
      <div class="match-info">
        <h3>FC Barcelona vs ${match.opponent}</h3>
        <p>Date: ${match.matchDate}</p>
        <p>Result: ${match.resultHome} - ${match.resultAway}</p>
        <p>Match Type: ${match.matchType}</p>
        <button class="btn-update" data-id="${match.id}">Update</button>
        <button class="btn-delete" data-id="${match.id}">Delete</button>
      </div>
    `;

    matchesList.appendChild(matchElement);

    matchElement
      .querySelector(".btn-delete")
      .addEventListener("click", function () {
        deleteMatch(match.id);
      });

    matchElement
      .querySelector(".btn-update")
      .addEventListener("click", function () {
        window.location.href = `update-match.html?id=${match.id}`;
      });
  }

  function deleteMatch(matchId) {
    let matches = getMatchesFromLocalStorage();
    matches = matches.filter((match) => match.id !== matchId);
    localStorage.setItem("matches", JSON.stringify(matches));
    location.reload();
  }
});
