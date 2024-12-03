// -------------------------------------------------------------------
let addBtn = document.querySelector('.add');
let addPlayerForm = document.querySelector('.form-container');
let mainContainer = document.querySelector('.container');
let inputs = document.querySelectorAll('input');
let addPlayerBtn = document.getElementById('addPlayerBtn');
let containerOptions = document.getElementById('containerOptions');

addPlayerForm.style.display = 'none';

addBtn.addEventListener('click', ()=>{
  
    addPlayerForm.style.display = 'flex';
})

// ------------------------------------------------- function to appear inputs stats for position selected
// --------------------------------------------------------------------------------------------------------
function formInputPosition(positionSelected){

  positionSelected.addEventListener('change', ()=>{

    if( positionSelected.value === 'GK'){
      containerOptions.innerHTML = 
      `
        <div id="GK">
                <div class="input-container">
                    <input type="number" placeholder="Diving"   id="Diving" required min="1" max="100"/>
                    <input type="number" placeholder="Handling" id="Handling" required min="1" max="100"/>
                    <input type="number" placeholder="Kicking" id="Kicking" required min="1" max="100"/>
                </div>
          
              <div class="input-container">
                    <input type="number" placeholder="Reflexes" id="Reflexes" required min="1" max="100"/>
                    <input type="number" placeholder="Speed" id="Speed" required min="1" max="100"/>
                    <input type="number" placeholder="Positioning" id="Positioning" required min="1" max="100"/>
              </div>
  
       </div>      
      `
    }
    else{
      containerOptions.innerHTML = 
      `
        <div id="PL">
            <div class="input-container">
                <input type="number" placeholder="Pace"   id="Pace" required min="1" max="100"/>
                <input type="number" placeholder="Shooting" id="Shooting" required min="1" max="100" />
                      <input type="number" placeholder="Passing" id="Passing" required min="1" max="100"/>
           </div>

          <div class="input-container">
                <input type="number" placeholder="Dribbling" id="Dribbling" required min="1" max="100" />
                  <input type="number" placeholder="Defense" id="Defense" required min="1" max="100" />
                <input type="number" placeholder="Physical" id="Physical" required min="1" max="100" />
          </div>
       </div>    
  
      `  
    }
})
}
// --------------------------------------------------------------------------------------------------------

// ----------------------------------------------------- pass position choice to our function
let selectPosition = document.getElementById('pos');
formInputPosition(selectPosition);

// ----------------------------------------------------------------------------
function editPlayerInfo(indexPlayer){
  let getData = JSON.parse(localStorage.getItem("playersCards"));

    let Name = document.getElementById('playerName').value.trim();
    let Image = document.getElementById('PlayerImage').value.trim();
    let Flag = document.getElementById('Flag').value.trim();
    let Club = document.getElementById('Club').value.trim();
    let Position = document.getElementById('pos').value;
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
    // -------------------------------------------------------------------
    if (Position === 'GK') {
      
         getData[indexPlayer] = {
            name: Name,
            photo: Image,
            position: Position,
            flag: Flag,
            club: Club,
            rating: Rating,
            stats: {
              DIV: Diving,
              HAN: Handling,
              KIC: Kicking,
              REF: Reflexes,
              SPE: Speed,
              POS: Positioning
            }
        }  
    
    } else {
        getData[indexPlayer] = {
          name: Name,
          photo: Image,
          position: Position,
          flag: Flag,
          club: Club,
          rating: Rating,
          stats: {
            PAC: Pace,
            SHO: Shooting,
            PAS: Passing,
            DRI: Dribbling,
            DEF: Defense,
            PHY: Physical
          }
        }; 
    }
    
    localStorage.setItem('playersCards',JSON.stringify(getData) );
}

// --------------------------------------------------- function add player info
// ----------------------------------------------------------------------------
function addPlayerInfo(){
  let Name = document.getElementById('playerName').value.trim();
    let Image = document.getElementById('PlayerImage').value.trim();
    let Flag = document.getElementById('Flag').value.trim();
    let Club = document.getElementById('Club').value.trim();
    let Position = document.getElementById('pos').value;
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
    // -------------------------------------------------------------------
    let  getData = JSON.parse(localStorage.getItem("playersCards")) || [];

    if (Position === 'GK') {
      
        let newData = {
            name: Name,
            photo: Image,
            position: Position,
            flag: Flag,
            club: Club,
            rating: Rating,
            stats: {
              DIV: Diving,
              HAN: Handling,
              KIC: Kicking,
              REF: Reflexes,
              SPE: Speed,
              POS: Positioning
            }
        }  
        getData.push(newData);
    } 
    else {
        let newData = {
          name: Name,
          photo: Image,
          position: Position,
          flag: Flag,
          club: Club,
          rating: Rating,
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
    localStorage.setItem('playersCards',JSON.stringify(getData) );
}


let Edit = false;
  addPlayerBtn.addEventListener('click', ()=>{
    if(!Edit){
        addPlayerInfo();
    }
    else{
      editPlayerInfo(indexPlayer);
      Edit = false;
      addPlayerBtn.textContent = "Add Player"; 
    }
      
  });

// -------------------------------------------------------- list card players in studium
let playersCard = document.querySelectorAll('.player-card');

// -------------------------------------------------------

//  ---------------------------------------------------------------------------------------

let aside = document.querySelector('aside');
let popUp = document.querySelector('.popUp');
let back = document.querySelector('.back');
// ------------------------------------------------- get players change
let GK_Array =[];
let CB_Array =[];
let RB_Array =[];
let LB_Array =[];
let CM_Array =[];
let RM_Array =[];
let LM_Array =[];
let ST_Array =[];

playersCard.forEach((card,indexSelected) => {

  card.addEventListener('click', () => {
    console.log(card);

    aside.style.display = 'none'; 
    popUp.style.display = 'flex'; 
    back.style.display = 'flex';
    back.addEventListener('click',()=>{
      aside.style.display = 'flex'; 
      popUp.style.display = 'none';
      back.style.display = 'none';
    })
    if (card.getAttribute('data-pos') === 'GK') {
      GK_Array = getData.filter((element) => element.position === 'GK');
      localStorage.setItem('GK_Array',JSON.stringify(GK_Array));
      let LS_GK_Array = JSON.parse(localStorage.getItem('GK_Array'));

      popUp.innerHTML= '';
      LS_GK_Array.forEach((player,index) => {
    
        let newCard = document.createElement('div'); 
        newCard.classList.add('player-card'); 
        newCard.innerHTML = `
          <div class="player">
            <div class="info">
                  <div class="rating">${LS_GK_Array[index].rating}</div>
                  <div class="flag">
                    <img src="${LS_GK_Array[index].flag}" alt="" class="flag">
                  </div>
                  <div class="club">
                    <img src="${LS_GK_Array[index].club}" alt="" class="club-logo">
                  </div>
              </div>
                <div class="player-photo">
                  <img src="${LS_GK_Array[index].photo}" alt="">
                </div>
          </div>

          <div class="player-name">${LS_GK_Array[index].name}</div>
          <div class="stats">
              <div>${LS_GK_Array[index].stats.DIV} <span>DIV</span></div>
              <div>${LS_GK_Array[index].stats.DIV} <span>DIV</span></div>
              <div>${LS_GK_Array[index].stats.KIC} <span>KIC</span></div>
              <div>${LS_GK_Array[index].stats.REF} <span>REF</span></div>
              <div>${LS_GK_Array[index].stats.SPE} <span>SPE</span></div>
              <div>${LS_GK_Array[index].stats.POS} <span>POS</span></div>
          </div>
        <div class="position">${LS_GK_Array[index].position}</div>
        `;
        popUp.appendChild(newCard);
        newCard.addEventListener('click', ()=>{
    
          let copie = newCard.innerHTML;
          let playercardCopie = playersCard[indexSelected].innerHTML;
          newCard.innerHTML = playercardCopie;
          playersCard[indexSelected].innerHTML = copie;
          })
      
      });
    }
    else if (card.getAttribute('data-pos') === 'CB'){
     popUp.innerHTML = '';
     CB_Array = getData.filter((element) => element.position === 'CB');
     localStorage.setItem('CB_Array',JSON.stringify(CB_Array));
     let LS_CB_Array = JSON.parse(localStorage.getItem('CB_Array'));
     LS_CB_Array.forEach((player,index) => {

        let newCard = document.createElement('div'); 
        newCard.classList.add('player-card'); 
        console.log(newCard);
  
        newCard.innerHTML = `
            <div class="player-card">
          <div class="player">
              <div class="info">
                  <div class="rating">${LS_CB_Array[index].rating}</div>
                
                  <div class="flag">
                    <img src="${LS_CB_Array[index].flag}" alt="Flag" class="flag">
                  </div>
                  <div class="club">
                    <img src="${LS_CB_Array[index].club}" alt="Club Logo" class="club-logo">
                  </div>
              </div>
                <div class="player-photo">
                  <img src="${LS_CB_Array[index].photo}" alt="">
                </div>
          </div>

          <div class="player-name">${LS_CB_Array[index].name}</div>
          <div class="stats">
              <div>${LS_CB_Array[index].stats.PAC} <span>PAC</span></div>
              <div>${LS_CB_Array[index].stats.SHO} <span>SHO</span></div>
              <div>${LS_CB_Array[index].stats.PAS} <span>PAS</span></div>
              <div>${LS_CB_Array[index].stats.DRI} <span>DRI</span></div>
              <div>${LS_CB_Array[index].stats.DEF} <span>DEF</span></div>
              <div>${LS_CB_Array[index].stats.PHY} <span>PHY</span></div>
          </div>
            <div class="position">${LS_CB_Array[index].position}</div>
    </div>
        `;
        popUp.appendChild(newCard);
        newCard.addEventListener('click', ()=>{  
          let copie = newCard.innerHTML;
          let playercardCopie = playersCard[indexSelected].innerHTML;
          newCard.innerHTML = playercardCopie;
          playersCard[indexSelected].innerHTML = copie;
          })
     }) 
    }
    else if (card.getAttribute('data-pos') === 'LB'){
      popUp.innerHTML = '';
      LB_Array = getData.filter((element) => element.position === 'LB');
      localStorage.setItem('LB_Array',JSON.stringify(LB_Array));
      let LS_LB_Array = JSON.parse(localStorage.getItem('LB_Array'));
      LS_LB_Array.forEach((player,index) => {
            
         let newCard = document.createElement('div'); 
         newCard.classList.add('player-card'); 
   
         newCard.innerHTML = `
            <div class="player-card">
          <div class="player">
              <div class="info">
                  <div class="rating">${LS_LB_Array[index].rating}</div>
                
                  <div class="flag">
                    <img src="${LS_LB_Array[index].flag}" alt="Flag" class="flag">
                  </div>
                  <div class="club">
                    <img src="${LS_LB_Array[index].club}" alt="Club Logo" class="club-logo">
                  </div>
              </div>
                <div class="player-photo">
                  <img src="${LS_LB_Array[index].photo}" alt="">
                </div>
          </div>

          <div class="player-name">${LS_LB_Array[index].name}</div>
          <div class="stats">
              <div>${LS_LB_Array[index].stats.PAC} <span>PAC</span></div>
              <div>${LS_LB_Array[index].stats.SHO} <span>SHO</span></div>
              <div>${LS_LB_Array[index].stats.PAS} <span>PAS</span></div>
              <div>${LS_LB_Array[index].stats.DRI} <span>DRI</span></div>
              <div>${LS_LB_Array[index].stats.DEF} <span>DEF</span></div>
              <div>${LS_LB_Array[index].stats.PHY} <span>PHY</span></div>
          </div>
            <div class="position">${LS_LB_Array[index].position}</div>
    </div>
         `;
         popUp.appendChild(newCard);
         newCard.addEventListener('click', ()=>{
    
          let copie = newCard.innerHTML;
          let playercardCopie = playersCard[indexSelected].innerHTML;
          newCard.innerHTML = playercardCopie;
          playersCard[indexSelected].innerHTML = copie;
          })
        
      }) 
     }
     else if (card.getAttribute('data-pos') === 'RB'){
      popUp.innerHTML = '';
      RB_Array = getData.filter((element) => element.position === 'RB');
      localStorage.setItem('RB_Array',JSON.stringify(RB_Array));
      let LS_RB_Array = JSON.parse(localStorage.getItem('RB_Array'));
      LS_RB_Array.forEach((player,index) => {
            
         let newCard = document.createElement('div'); 
         newCard.classList.add('player-card'); 
   
         newCard.innerHTML = `
            <div class="player-card">
          <div class="player">
              <div class="info">
                  <div class="rating">${LS_RB_Array[index].rating}</div>
                
                  <div class="flag">
                    <img src="${LS_RB_Array[index].flag}" alt="" class="flag">
                  </div>
                  <div class="club">
                    <img src="${LS_RB_Array[index].club}" alt="" class="club-logo">
                  </div>
              </div>
                <div class="player-photo">
                  <img src="${LS_RB_Array[index].photo}" alt="">
                </div>
          </div>

          <div class="player-name">${LS_RB_Array[index].name}</div>
          <div class="stats">
              <div>${LS_RB_Array[index].stats.PAC} <span>PAC</span></div>
              <div>${LS_RB_Array[index].stats.SHO} <span>SHO</span></div>
              <div>${LS_RB_Array[index].stats.PAS} <span>PAS</span></div>
              <div>${LS_RB_Array[index].stats.DRI} <span>DRI</span></div>
              <div>${LS_RB_Array[index].stats.DEF} <span>DEF</span></div>
              <div>${LS_RB_Array[index].stats.PHY} <span>PHY</span></div>
          </div>
            <div class="position">${LS_RB_Array[index].position}</div>
    </div>
         `;
         popUp.appendChild(newCard);
         newCard.addEventListener('click', ()=>{
          
          let copie = newCard.innerHTML;
          let playercardCopie = playersCard[indexSelected].innerHTML;
          newCard.innerHTML = playercardCopie;
          playersCard[indexSelected].innerHTML = copie;
          })
      }) 
     }
     else if (card.getAttribute('data-pos') === 'CM'){
      popUp.innerHTML = '';
      CM_Array = getData.filter((element) => element.position === 'CM');
      localStorage.setItem('CM_Array',JSON.stringify(CM_Array));
      let LS_CM_Array = JSON.parse(localStorage.getItem('CM_Array'));
      LS_CM_Array.forEach((player,index ) => {
            
         let newCard = document.createElement('div'); 
         newCard.classList.add('player-card'); 
         

         newCard.innerHTML = `
            <div class="player-card">
          <div class="player">
              <div class="info">
                  <div class="rating">${LS_CM_Array[index].rating}</div>
                
                  <div class="flag">
                    <img src="${LS_CM_Array[index].flag}" alt="" class="flag">
                  </div>
                  <div class="club">
                    <img src="${LS_CM_Array[index].club}" alt="" class="club-logo">
                  </div>
              </div>
                <div class="player-photo">
                  <img src="${LS_CM_Array[index].photo}" alt="">
                </div>
          </div>

          <div class="player-name">${LS_CM_Array[index].name}</div>
          <div class="stats">
              <div>${LS_CM_Array[index].stats.PAC} <span>PAC</span></div>
              <div>${LS_CM_Array[index].stats.SHO} <span>SHO</span></div>
              <div>${LS_CM_Array[index].stats.PAS} <span>PAS</span></div>
              <div>${LS_CM_Array[index].stats.DRI} <span>DRI</span></div>
              <div>${LS_CM_Array[index].stats.DEF} <span>DEF</span></div>
              <div>${LS_CM_Array[index].stats.PHY} <span>PHY</span></div>
          </div>
            <div class="position">${LS_CM_Array[index].position}</div>
    </div>
         `;
        
         popUp.appendChild(newCard);
         newCard.addEventListener('click', ()=>{

          let copie = newCard.innerHTML;
          let playercardCopie = playersCard[indexSelected].innerHTML;
          newCard.innerHTML = playercardCopie;
          playersCard[indexSelected].innerHTML = copie;
          })
      }) 
     }
     else if (card.getAttribute('data-pos') === 'LW'){
      popUp.innerHTML = '';
      LW_Array = getData.filter((element) => element.position === 'LW');
      localStorage.setItem('LW_Array',JSON.stringify(LW_Array));
      let LS_LW_Array = JSON.parse(localStorage.getItem('LW_Array'));
      LS_LW_Array.forEach((player,index )=> {
            
         let newCard = document.createElement('div'); 
         newCard.classList.add('player-card'); 
   
         newCard.innerHTML = `
            <div class="player-card">
          <div class="player">
              <div class="info">
                  <div class="rating">${LS_LW_Array[index].rating}</div>
                  <div class="flag">
                    <img src="${LS_LW_Array[index].flag}" alt="" class="flag">
                  </div>
                  <div class="club">
                    <img src="${LS_LW_Array[index].club}" alt="" class="club-logo">
                  </div>
              </div>
                <div class="player-photo">
                  <img src="${LS_LW_Array[index].photo}" alt="">
                </div>
          </div>

          <div class="player-name">${LS_LW_Array[index].name}</div>
          <div class="stats">
              <div>${LS_LW_Array[index].stats.PAC} <span>PAC</span></div>
              <div>${LS_LW_Array[index].stats.SHO} <span>SHO</span></div>
              <div>${LS_LW_Array[index].stats.PAS} <span>PAS</span></div>
              <div>${LS_LW_Array[index].stats.DRI} <span>DRI</span></div>
              <div>${LS_LW_Array[index].stats.DEF} <span>DEF</span></div>
              <div>${LS_LW_Array[index].stats.PHY} <span>PHY</span></div>
          </div>
            <div class="position">${LS_LW_Array[index].position}</div>
    </div>
         `;
         popUp.appendChild(newCard);
         newCard.addEventListener('click', ()=>{
    
          let copie = newCard.innerHTML;
          let playercardCopie = playersCard[indexSelected].innerHTML;
          newCard.innerHTML = playercardCopie;
          playersCard[indexSelected].innerHTML = copie;
          })
      }) 
     }
     else if (card.getAttribute('data-pos') === 'RW'){
      popUp.innerHTML = '';
      RW_Array = getData.filter((element) => element.position === 'RW');
      localStorage.setItem('RW_Array',JSON.stringify(RW_Array));
      let LS_RW_Array = JSON.parse(localStorage.getItem('RW_Array'));
      LS_RW_Array.forEach((player,index) => {
             
         let newCard = document.createElement('div'); 
         newCard.classList.add('player-card'); 
   
         newCard.innerHTML = `
          <div class="player-card">
          <div class="player">
              <div class="info">
                  <div class="rating">${LS_RW_Array[index].rating}</div>
            
                  <div class="flag">
                    <img src="${LS_RW_Array[index].flag}" alt="" class="flag">
                  </div>
                  <div class="club">
                    <img src="${LS_RW_Array[index].club}" alt="" class="club-logo">
                  </div>
              </div>
                <div class="player-photo">
                  <img src="${LS_RW_Array[index].photo}" alt="">
                </div>
          </div>

          <div class="player-name">${LS_RW_Array[index].name}</div>
          <div class="stats">
              <div>${LS_RW_Array[index].stats.PAC} <span>PAC</span></div>
              <div>${LS_RW_Array[index].stats.SHO} <span>SHO</span></div>
              <div>${LS_RW_Array[index].stats.PAS} <span>PAS</span></div>
              <div>${LS_RW_Array[index].stats.DRI} <span>DRI</span></div>
              <div>${LS_RW_Array[index].stats.DEF} <span>DEF</span></div>
              <div>${LS_RW_Array[index].stats.PHY} <span>PHY</span></div>
          </div>
                <div class="position">${LS_RW_Array[index].position}</div>
    </div>
         `;
         popUp.appendChild(newCard);
         newCard.addEventListener('click', ()=>{
            
          let copie = newCard.innerHTML;
          let playercardCopie = playersCard[indexSelected].innerHTML;
          newCard.innerHTML = playercardCopie;
          playersCard[indexSelected].innerHTML = copie;
          })

      }) 
     }
     else if (card.getAttribute('data-pos') === 'ST'){
      popUp.innerHTML = '';
      ST_Array = getData.filter((element) => element.position === 'ST');
      localStorage.setItem('ST_Array',JSON.stringify(ST_Array));
      let LS_ST_Array = JSON.parse(localStorage.getItem('ST_Array'));
      LS_ST_Array.forEach((player,index) => {
            
         let newCard = document.createElement('div'); 
         newCard.classList.add('player-card'); 
   
         newCard.innerHTML = `
            <div class="player-card">
          <div class="player">
              <div class="info">
                  <div class="rating">${LS_ST_Array[index].rating}</div>
            
                  <div class="flag">
                    <img src="${LS_ST_Array[index].flag}" alt="" class="flag">
                  </div>
                  <div class="club">
                    <img src="${LS_ST_Array[index].club}" alt="" class="club-logo">
                  </div>
              </div>
                <div class="player-photo">
                  <img src="${LS_ST_Array[index].photo}" alt="">
                </div>
          </div>

          <div class="player-name">${LS_ST_Array[index].name}</div>
          <div class="stats">
              <div>${LS_ST_Array[index].stats.PAC} <span>PAC</span></div>
              <div>${LS_ST_Array[index].stats.SHO} <span>SHO</span></div>
              <div>${LS_ST_Array[index].stats.PAS} <span>PAS</span></div>
              <div>${LS_ST_Array[index].stats.DRI} <span>DRI</span></div>
              <div>${LS_ST_Array[index].stats.DEF} <span>DEF</span></div>
              <div>${LS_ST_Array[index].stats.PHY} <span>PHY</span></div>
          </div>
                <div class="position">${LS_ST_Array[index].position}</div>
    </div>
         `;
         popUp.appendChild(newCard);
         newCard.addEventListener('click', ()=>{

          let copie = newCard.innerHTML;
          let playercardCopie = playersCard[indexSelected].innerHTML;
          newCard.innerHTML = playercardCopie;
          playersCard[indexSelected].innerHTML = copie;
              
          })

      }) 
     }
  });
   

});


let getData = JSON.parse(localStorage.getItem("playersCards"));

playersCard.forEach((card , index) => {
  
    if( getData[index].position === 'GK') {
    
      card.innerHTML = `
          <div class="player">
            <div class="info">
                  <div class="rating">${getData[index].rating}</div>
                  <div class="flag">
                    <img src="${getData[index].flag}" alt="" class="flag">
                  </div>
                  <div class="club">
                    <img src="${getData[index].club}" alt="" class="club-logo">
                  </div>
              </div>
                <div class="player-photo">
                  <img src="${getData[index].photo}" alt="">
                </div>
          </div>

          <div class="player-name">${getData[index].name}</div>
          <div class="stats">
              <div>${getData[index].stats.DIV} <span>DIV</span></div>
              <div>${getData[index].stats.DIV} <span>DIV</span></div>
              <div>${getData[index].stats.KIC} <span>KIC</span></div>
              <div>${getData[index].stats.REF} <span>REF</span></div>
              <div>${getData[index].stats.SPE} <span>SPE</span></div>
              <div>${getData[index].stats.POS} <span>POS</span></div>
          </div>
      <div class="position">${getData[index].position}</div>
  `;
    } 
    else{      
      card.innerHTML = `
  
          <div class="player">
              <div class="info">
                  <div class="rating">${getData[index].rating}</div>
                  <div class="flag">
                    <img src="${getData[index].flag}" alt="" class="flag">
                  </div>
                  <div class="club">
                    <img src="${getData[index].club}" alt="" class="club-logo">
                  </div>
              </div>
                <div class="player-photo">
                  <img src="${getData[index].photo}" alt="">
                </div>
          </div>

          <div class="player-name">${getData[index].name}</div>
          <div class="stats">
              <div>${getData[index].stats.PAC} <span>PAC</span></div>
              <div>${getData[index].stats.SHO} <span>SHO</span></div>
              <div>${getData[index].stats.PAS} <span>PAS</span></div>
              <div>${getData[index].stats.DRI} <span>DRI</span></div>
              <div>${getData[index].stats.DEF} <span>DEF</span></div>
              <div>${getData[index].stats.PHY} <span>PHY</span></div>
          </div>
          <div class="position">${getData[index].position}</div>
  `;
}  
  });
  

let listPlayers = document.querySelector('.listPlayers');
let listPlayersPage = document.querySelector('.listPlayersPage');

    listPlayers.addEventListener('click', ()=>{
      listPlayersPage.classList.toggle('display');
    })

let allPlayers = JSON.parse(localStorage.getItem("playersCards")) || [];
let listPlayerContainer = document.querySelector('.listPlayers-container');
    
for (let i = 0; i < allPlayers.length; i++) {
  
  if( allPlayers[i].position === 'GK'){
    
    let playerCard = document.createElement('div');
    playerCard.classList.add('player-card');
    playerCard.classList.add('playerList');
    playerCard.style.transform = 'scale(1.4)';
  
    playerCard.innerHTML = 
`     <i class="fa-solid fa-trash  iconRemove "></i>
      <i class="fa-solid fa-pen-to-square iconEdit"></i>
      <div class="player">
            <div class="info">
                  <div class="rating">${allPlayers[i].rating}</div>
                  <div class="flag">
                    <img src="${allPlayers[i].flag}" alt="" class="flag">
                  </div>
                  <div class="club">
                    <img src="${allPlayers[i].club}" alt="" class="club-logo">
                  </div>
              </div>
                <div class="player-photo">
                  <img src="${allPlayers[i].photo}" alt="">
                </div>
          </div>

          <div class="player-name">${allPlayers[i].name}</div>
          <div class="stats">
              <div>${allPlayers[i].stats.DIV} <span>DIV</span></div>
              <div>${allPlayers[i].stats.DIV} <span>DIV</span></div>
              <div>${allPlayers[i].stats.KIC} <span>KIC</span></div>
              <div>${allPlayers[i].stats.REF} <span>REF</span></div>
              <div>${allPlayers[i].stats.SPE} <span>SPE</span></div>
              <div>${allPlayers[i].stats.POS} <span>POS</span></div>
          </div>
      <div class="position">${allPlayers[i].position}</div>
`
listPlayerContainer.appendChild(playerCard);

  }
  else{
    let playerCard = document.createElement('div');
    playerCard.classList.add('player-card');
    playerCard.classList.add('playerList');
    playerCard.style.transform = 'scale(1.4)';

    
    playerCard.innerHTML = 
    
    `  
            <i class="fa-solid fa-trash  iconRemove "></i>
           <i class="fa-solid fa-pen-to-square iconEdit "></i>
          <div class="player">
              <div class="info">
                  <div class="rating">${allPlayers[i].rating}</div>
                  <div class="flag">
                    <img src="${allPlayers[i].flag}" alt="" class="flag">
                  </div>
                  <div class="club">
                    <img src="${allPlayers[i].club}" alt="" class="club-logo">
                  </div>
              </div>
                <div class="player-photo">
                  <img src="${allPlayers[i].photo}" alt="">
                </div>
          </div>

          <div class="player-name">${allPlayers[i].name}</div>
          <div class="stats">
              <div>${allPlayers[i].stats.PAC} <span>PAC</span></div>
              <div>${allPlayers[i].stats.SHO} <span>SHO</span></div>
              <div>${allPlayers[i].stats.PAS} <span>PAS</span></div>
              <div>${allPlayers[i].stats.DRI} <span>DRI</span></div>
              <div>${allPlayers[i].stats.DEF} <span>DEF</span></div>
              <div>${allPlayers[i].stats.PHY} <span>PHY</span></div>
          </div>
            <div class="position">${allPlayers[i].position}</div>

    `
    listPlayerContainer.appendChild(playerCard);

  }
}

let selectTactic = document.querySelector('.selectTactic');
let mid2 = document.querySelector('.enter-mid2');
let right = document.querySelector('.right-wing');
let atq = document.querySelector('.striker');
let mid1 = document.querySelector('.enter-mid1');
let mid3 = document.querySelector('.enter-mid3');
selectTactic.addEventListener('change', ()=>{
  if( selectTactic.value === 'seconde'){
  
    mid2.style.gridColumn = '2';
    right.style.gridRow = '2';
    mid2.style.top = '20px';
    mid2.style.left = '40px';
    right.style.right = '40px';
    atq.style.gridColumn = '4';
    atq.style.top = '20px';
  }
  else if( selectTactic.value === 'first'){
    
    mid2.style.gridColumn = '3';
    mid2.style.left = '0';
    mid2.style.top = '50px';
    right.style.gridRow = '1';
    right.style.top = '20px';
    right.style.right = '0';
    atq.style.gridColumn = '3';
    atq.style.top = '0';
  }
});

let card = document.querySelector('.player-card'); 
let removeIcon = document.querySelectorAll('.iconRemove'); 
let editIcon = document.querySelectorAll('.iconEdit')
  removeIcon.forEach((icon, index) => {
    icon.addEventListener('click', () => {
      getData.splice(index, 1); 
      localStorage.setItem("playersCards", JSON.stringify(getData));
      window.location.reload();
    }) 
  })
// -------------------------- function to appear data of player in form to edit it 
// --------------------------------------------------------------------------------
  function appearData(index) {
    let getData = JSON.parse(localStorage.getItem("playersCards"));
    let indexPlayer = getData[index];
  
    document.getElementById('playerName').value = indexPlayer.name;
    document.getElementById('PlayerImage').value = indexPlayer.photo;
    document.getElementById('Flag').value = indexPlayer.flag;
    document.getElementById('Club').value = indexPlayer.club;
    document.getElementById('pos').value = indexPlayer.position;
    document.getElementById('Rating').value = indexPlayer.rating;
  
    if (indexPlayer.position === 'GK') {
      containerOptions.innerHTML = `
        <div class="input-container">
          <input type="number" placeholder="Diving" id="Diving" value="${indexPlayer.stats.DIV}" />
          <input type="number" placeholder="Handling" id="Handling" value="${indexPlayer.stats.HAN}" />
          <input type="number" placeholder="Kicking" id="Kicking" value="${indexPlayer.stats.KIC}" />
        </div>
        <div class="input-container">
          <input type="number" placeholder="Reflexes" id="Reflexes" value="${indexPlayer.stats.REF}" />
          <input type="number" placeholder="Speed" id="Speed" value="${indexPlayer.stats.SPE}" />
          <input type="number" placeholder="Positioning" id="Positioning" value="${indexPlayer.stats.POS}" />
        </div>
      `;
    } else {
      containerOptions.innerHTML = `
        <div class="input-container">
          <input type="number" placeholder="Pace" id="Pace" value="${indexPlayer.stats.PAC}" />
          <input type="number" placeholder="Shooting" id="Shooting" value="${indexPlayer.stats.SHO}" />
          <input type="number" placeholder="Passing" id="Passing" value="${indexPlayer.stats.PAS}" />
        </div>
        <div class="input-container">
          <input type="number" placeholder="Dribbling" id="Dribbling" value="${indexPlayer.stats.DRI}" />
          <input type="number" placeholder="Defense" id="Defense" value="${indexPlayer.stats.DEF}" />
          <input type="number" placeholder="Physical" id="Physical" value="${indexPlayer.stats.PHY}" />
        </div>
      `;
    }
    
  }
// --------------------------------------------------------------------------------
  editIcon.forEach((icon, index) => {
    icon.addEventListener('click', ()=>{
      Edit = true;
      indexPlayer = index;
      appearData(indexPlayer);
      addPlayerForm.style.display = 'flex';
      addPlayerBtn.textContent = "Edit Player"
      window.scrollTo({
        top: 0,     
        behavior: 'smooth'  
      });
    })
})




























let AllCart = document.querySelectorAll('.player-card');
let rate = document.querySelectorAll('.rating');


AllCart.forEach((card, index )=>{
    console.log(rate[index].textContent);
    
    
})












