  // ------------------------------------------------------- data 
  const playersInfo = [
    {
      position: "GK",
      rate: 185,
      name: "Mohamed Bk",
      photo: "./src/assets/img/GK.jpg",
      stats: {
        DIV: 85,
        HAN: 88,
        KIC: 77,
        REF: 90,
        SPD: 60,
        POS: 86
      }
    },
    {
      position: "CB",
      rate: 188,
      name: "Mohamed Bk",
      photo: "./src/assets/img/DF.jpg",
      stats: {
        PAC: 88,
        SHO: 92,
        PAS: 85,
        DRI: 89,
        DEF: 60,
        PHY: 78
      }
    },
    {
      position: "CB",
      rate: 181,
      name: "Mohamed Bk",
      photo: "./src/assets/img/DF.jpg",
      stats: {
        PAC: 84,
        SHO: 82,
        PAS: 81,
        DRI: 80,
        DEF: 79,
        PHY: 88
      }
    },
    {
      position: "LB",
      rate: 183,
      name: "Salah Dine",
      photo: "./src/assets/img/DF.jpg",
      stats: {
        PAC: 84,
        SHO: 82,
        PAS: 91,
        DRI: 82,
        DEF: 79,
        PHY: 90
      }
    },
    {
      position: "RB",
      rate: 183,
      name: "Salah Dine",
      photo: "./src/assets/img/DF.jpg",
      stats: {
        PAC: 84,
        SHO: 82,
        PAS: 91,
        DRI: 82,
        DEF: 79,
        PHY: 90
      }
    },
    {
      position: "CM",
      rate: 172,
      name: "Souhail",
      photo: "./src/assets/img/AT.jpg",
      stats: {
        PAC: 74,
        SHO: 82,
        PAS: 81,
        DRI: 72,
        DEF: 79,
        PHY: 80
      }
    },
    {
      position: "CM",
      rate: 172,
      name: "Souhail",
      photo: "./src/assets/img/AT.jpg",
      stats: {
        PAC: 74,
        SHO: 82,
        PAS: 81,
        DRI: 72,
        DEF: 79,
        PHY: 80
      }
    },
    {
      position: "CM",
      rate: 172,
      name: "Souhail",
      photo: "./src/assets/img/AT.jpg",
      stats: {
        PAC: 74,
        SHO: 82,
        PAS: 81,
        DRI: 72,
        DEF: 79,
        PHY: 80
      }
    },
    {
      position: "LW",
      rate: 172,
      name: "Abdo",
      photo: "./src/assets/img/AT.jpg",
      stats: {
        PAC: 74,
        SHO: 82,
        PAS: 81,
        DRI: 72,
        DEF: 79,
        PHY: 80
      }
    },
    {
      position: "RW",
      rate: 184,
      name: "Abdo",
      photo: "./src/assets/img/AT.jpg",
      stats: {
        PAC: 74,
        SHO: 82,
        PAS: 81,
        DRI: 72,
        DEF: 79,
        PHY: 80
      }
    },
    {
      position: "ST",
      rate: 188,
      name: "Adil",
      photo: "./src/assets/img/AT.jpg",
      stats: {
        PAC: 84,
        SHO: 82,
        PAS: 91,
        DRI: 82,
        DEF: 89,
        PHY: 80
      }
    }
  ];

localStorage.setItem("playersCards", JSON.stringify(playersInfo));
// -------------------------------------------------------------------
let addBtn = document.querySelector('.add');
let addPlayerForm = document.querySelector('.form-container');
let mainContainer = document.querySelector('.container');
let inputs = document.querySelectorAll('input');
let addPlayerBtn = document.getElementById('addPlayerBtn');
let containerOptions = document.getElementById('containerOptions');
let dataPlayer;
addPlayerForm.style.display = 'none';

addBtn.addEventListener('click', ()=>{
    console.log("cliked");
    addPlayerForm.style.display = 'flex';
     mainContainer.style.display = 'none';  
})
// ------------------------------------------------------- change form input
let selectPosition = document.getElementById('pos');
selectPosition.addEventListener('change', ()=>{

    if( selectPosition.value === 'GK'){
      containerOptions.innerHTML = 
      `
        <div id="GK">
                <div class="input-container">
                    <input type="number" placeholder="Diving"   id="Diving"/>
                    <input type="number" placeholder="Handling" id="Handling" />
              </div>
          
              <div class="input-container">
                    <input type="number" placeholder="Kicking" id="Kicking" />
                    <input type="number" placeholder="Reflexes" id="Reflexes"/>
              </div>
              <div class="input-container">
                  <input type="number" placeholder="Speed" id="Speed" />
                  <input type="number" placeholder="Positioning" id="Positioning" />
            </div>
      `
    }
    else{
      containerOptions.innerHTML = 
      `
        <div id="PL">
            <div class="input-container">
                <input type="number" placeholder="Pace"   id="Pace"/>
                <input type="number" placeholder="Shooting" id="Shooting" />
          </div>

          <div class="input-container">
                <input type="number" placeholder="Passing" id="Passing"/>
                <input type="number" placeholder="Dribbling" id="Dribbling" />
          </div>

          <div class="input-container">
                <input type="number" placeholder="Defense" id="Defense" />
                <input type="number" placeholder="Physical" id="Physical" />
          </div>
      `  
    }
})
// -------------------------------------------------------------------------
addPlayerBtn.addEventListener('click', ()=>{
  let playerName = document.getElementById('playerName').value.trim();
  // ----------------------------------------------- GoalKeaper
  let Diving = document.getElementById('Diving')?.value || '';
  let Handling = document.getElementById('Handling')?.value || '';
  let Kicking = document.getElementById('Kicking')?.value || '';
  let Reflexes = document.getElementById('Reflexes')?.value || '';
  let Speed = document.getElementById('Speed')?.value || '';
  let Positioning = document.getElementById('Positioning')?.value || '';
  // ------------------------------------------------ Players
  let Pace = document.getElementById('Pace')?.value || '';
  let Shooting = document.getElementById('Shooting')?.value || '';
  let Passing = document.getElementById('Passing')?.value || '';
  let Dribbling = document.getElementById('Dribbling')?.value || '';
  let Defense = document.getElementById('Defense')?.value || '';
  let Physical = document.getElementById('Physical')?.value || '';
  // ----------------------------------------------------------
  let Rating = document.getElementById('Rating').value;
  let playerImage = document.getElementById('playerImage').value.trim();
  let position = document.getElementById('pos').value;
  console.log(position);
  // -------------------------------------------------------------------

  let  getData = JSON.parse(localStorage.getItem("playersCards")) || [];
  if (position === 'GK') {
      let newData = {
          position: position,
          rate: Rating,
          photo: playerImage,
          name: playerName,
          stats: {
            DIV: Diving,
            HAN: Handling,
            KIC: Kicking,
            REF: Reflexes,
            SPD: Speed,
            POS: Positioning
          }
      }
      getData.push(newData);

  } else {
      let newData = {
        position: position,
        rate: Rating,
        photo: playerImage,
        name: playerName,
        stats: {
          PAC: Pace,
          SHO: Shooting,
          PAS: Passing,
          DRI: Dribbling,
          DEF: Defense,
          PHY: Physical
        }
      };
      getData.push(newData);
  }
  localStorage.setItem("playersCards", JSON.stringify(getData));
});

// ------------------------------------------------------- 
let playersCard = document.querySelectorAll('.player-card');
// -------------------------------------------------------

let getData = JSON.parse(localStorage.getItem("playersCards"));

playersCard.forEach((card , index) => {

    if( getData[index].position === 'GK') {

      card.innerHTML = `
  
      <div class="rate">${getData[index].rate}</div>
      <div class="position">${getData[index].position}</div>
      <div class="player-photo">
        <img src="${getData[index].photo}" alt="" />
      </div>
      <div class="player-name">${getData[index].name}</div>
      <div class="statistique">
        <div class="stat">${getData[index].stats.DIV} <span>DIV</span></div>
        <div class="stat">${getData[index].stats.HAN} <span>HAN</span></div>
        <div class="stat">${getData[index].stats.KIC} <span>KIC</span></div>
        <div class="stat">${getData[index].stats.REF} <span>REF</span></div>
        <div class="stat">${getData[index].stats.SPD} <span>SPD</span></div>
        <div class="stat">${getData[index].stats.POS} <span>POS</span></div>
      </div>

  `;
    } 
    else{
      
      card.innerHTML = `

      <div class="rate">${getData[index].rate}</div>
      <div class="position">${getData[index].position}</div>
      <div class="player-photo">
        <img src="${getData[index].photo}" alt="" />
      </div>
      <div class="player-name">${getData[index].name}</div>
      <div class="statistique">
        <div class="stat">${getData[index].stats.PAC} <span>PAC</span></div>
        <div class="stat">${getData[index].stats.SHO} <span>SHO</span></div>
        <div class="stat">${getData[index].stats.PAS} <span>PAS</span></div>
        <div class="stat">${getData[index].stats.DRI} <span>DRI</span></div>
        <div class="stat">${getData[index].stats.DEF} <span>DEF</span></div>
        <div class="stat">${getData[index].stats.PHY} <span>PHY</span></div>
      </div>

  `;

}  
  });


localStorage.setItem("playersCards", JSON.stringify(getData));

console.log(localStorage.setItem("playersCards", JSON.stringify(getData)));







