import React from "react";

const StandingsTable = () => {
  return (
    <div class="standings-container">
      <table class="standings-table">
        <thead>
          <tr>
            <th>#</th>
            <th>Team</th>
            <th>PTS</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Real Madrid</td>
            <td>95</td>
          </tr>
          <tr class="barca-standing">
            <td>2</td>
            <td>Barcelona</td>
            <td>85</td>
          </tr>
          <tr>
            <td>3</td>
            <td>Girona</td>
            <td>81</td>
          </tr>
          <tr>
            <td>4</td>
            <td>Atl. Madrid</td>
            <td>76</td>
          </tr>
          <tr>
            <td>5</td>
            <td>Athletic Club</td>
            <td>68</td>
          </tr>
          <tr>
            <td>6</td>
            <td>Real Sociedad</td>
            <td>60</td>
          </tr>
          <tr>
            <td>7</td>
            <td>Betis</td>
            <td>57</td>
          </tr>
          <tr>
            <td>8</td>
            <td>Villarreal</td>
            <td>53</td>
          </tr>
          <tr>
            <td>9</td>
            <td>Valencia</td>
            <td>49</td>
          </tr>
          <tr>
            <td>10</td>
            <td>Alavés</td>
            <td>46</td>
          </tr>
          <tr>
            <td>11</td>
            <td>Osasuna</td>
            <td>45</td>
          </tr>
          <tr>
            <td>12</td>
            <td>Getafe</td>
            <td>43</td>
          </tr>
          <tr>
            <td>13</td>
            <td>Celta</td>
            <td>41</td>
          </tr>
          <tr>
            <td>14</td>
            <td>Sevilla</td>
            <td>41</td>
          </tr>
          <tr>
            <td>15</td>
            <td>Mallorca</td>
            <td>40</td>
          </tr>
          <tr>
            <td>16</td>
            <td>Las Palmas</td>
            <td>40</td>
          </tr>
          <tr>
            <td>17</td>
            <td>Rayo Vallecano</td>
            <td>38</td>
          </tr>
          <tr>
            <td>18</td>
            <td>Cádiz</td>
            <td>33</td>
          </tr>
          <tr>
            <td>19</td>
            <td>Almería</td>
            <td>21</td>
          </tr>
          <tr>
            <td>20</td>
            <td>Granada</td>
            <td>21</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default StandingsTable;
