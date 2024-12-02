  // ------------------------------------------------------- data 
  if (!localStorage.getItem("playersCards")) {
    const playersInfo = [
    
      {
        name: "Yassine Bounou",
        photo: "https://cdn.sofifa.net/players/209/981/25_120.png",
        position: "GK",
        flag: "https://cdn.sofifa.net/flags/ma.png",
        club: "https://cdn.sofifa.net/meta/team/7011/120.png",
        rating: 84,
        stats: {
          DIV: 81,
          HAN: 82,
          KIC: 77,
          REF: 86,
          SPE: 38,
          POS: 83
        }
      },
      {
        name: "Virgil van Dijk",
        photo: "https://cdn.sofifa.net/players/203/376/25_120.png",
        position: "CB",
        flag: "https://cdn.sofifa.net/flags/nl.png",
        club: "https://cdn.sofifa.net/meta/team/8/120.png",
        rating: 90,
        stats: {
          PAC: 75,
          SHO: 60,
          PAS: 70,
          DRI: 72,
          DEF: 92,
          PHY: 86
        }
      },
      {
        name: "Antonio Rudiger",
        photo: "https://cdn.sofifa.net/players/205/452/25_120.png",
        position: "CB",
        flag: "https://cdn.sofifa.net/flags/de.png",
        club: "https://cdn.sofifa.net/meta/team/3468/120.png",
        rating: 88,
        stats: {
          PAC: 82,
          SHO: 55,
          PAS: 73,
          DRI: 70,
          DEF: 86,
          PHY: 86
        }
      },
      {
        name: "Noussair Mazraoui",
        photo: "https://cdn.sofifa.net/players/236/401/25_120.png",
        position: "LB",
        flag: "https://cdn.sofifa.net/flags/ma.png",
        club: "https://cdn.sofifa.net/meta/team/14/120.png",
        rating: 81,
        stats: {
          PAC: 78,
          SHO: 66,
          PAS: 77,
          DRI: 83,
          DEF: 77,
          PHY: 71
        }
      },
      {
        name: "Trent Alexander-Arnold",
        photo: "https://cdn.sofifa.net/players/231/281/25_120.png",
        position: "RB",
        nationality: "England",
        flag: "https://cdn.sofifa.net/flags/gb-eng.png",
        club: "https://cdn.sofifa.net/meta/team/8/120.png",
        rating: 87,
        stats: {
          PAC: 76,
          SHO: 66,
          PAS: 89,
          DRI: 80,
          DEF: 79,
          PHY: 71
        }
      },
    
      {
        name: "Joshua Kimmich",
        photo: "https://cdn.sofifa.net/players/212/622/25_120.png",
        position: "CM",
        flag: "https://cdn.sofifa.net/flags/de.png",
        club: "https://cdn.sofifa.net/meta/team/503/120.png",
        rating: 89,
        stats: {
          PAC: 70,
          SHO: 75,
          PAS: 88,
          DRI: 84,
          DEF: 84,
          PHY: 81
        }
      },
      
      {
        name: "Kevin De Bruyne",
        photo: "https://cdn.sofifa.net/players/192/985/25_120.png",
        position: "CM",
        flag: "https://cdn.sofifa.net/flags/be.png",
        club: "https://cdn.sofifa.net/meta/team/10/120.png",
        rating: 91,
        stats: {
          PAC: 74,
          SHO: 86,
          PAS: 93,
          DRI: 88,
          DEF: 64,
          PHY: 78
        }
      },
      {
        name: "Philippe Coutinho",
        photo: "https://cdn.sofifa.net/players/214/021/25_120.png",
        position: "CM",
        flag: "https://cdn.sofifa.net/flags/br.png",
        club: "https://cdn.sofifa.net/meta/team/79/120.png",
        rating: 86,
        stats: {
          PAC: 82,
          SHO: 79,
          PAS: 85,
          DRI: 87,
          DEF: 35,
          PHY: 65
        }
      },
    
      {
        name: "Brahim Diáz",
        photo: "https://cdn.sofifa.net/players/231/410/25_120.png",
        position: "LW",
        flag: "https://cdn.sofifa.net/flags/ma.png",
        club: "https://cdn.sofifa.net/meta/team/3468/120.png",
        rating: 82,
        stats: {
          PAC: 85,
          SHO: 74,
          PAS: 78,
          DRI: 85,
          DEF: 31,
          PHY: 56
        }
      },
      
      {
        name: "Mohamed Salah",
        photo: "https://cdn.sofifa.net/players/209/331/25_120.png",
        position: "RW",
        flag: "https://cdn.sofifa.net/flags/eg.png",
        club: "https://cdn.sofifa.net/meta/team/8/120.png",
        rating: 89,
        stats: {
          PAC: 93,
          SHO: 87,
          PAS: 81,
          DRI: 90,
          DEF: 45,
          PHY: 75
        }
      },
    
      {
        name: "Kylian Mbappé",
        photo: "https://cdn.sofifa.net/players/231/747/25_120.png",
        position: "ST",
        flag: "https://cdn.sofifa.net/flags/fr.png",
        club: "https://cdn.sofifa.net/meta/team/3468/120.png",
        rating: 92,
        stats: {
          PAC: 97,
          SHO: 89,
          PAS: 80,
          DRI: 92,
          DEF: 39,
          PHY: 77
        }
      },
    
  
    
      {
        name: "Lionel Messi",
        photo: "https://cdn.sofifa.net/players/158/023/25_120.png",
        position: "RW",
        flag: "https://cdn.sofifa.net/flags/ar.png",
        club: "https://cdn.sofifa.net/meta/team/239235/120.png",
        rating: 93,
        stats: {
          PAC: 85,
          SHO: 92,
          PAS: 91,
          DRI: 95,
          DEF: 35,
          PHY: 65
        }
      },
      {
        name: "Cristiano Ronaldo",
        photo: "https://cdn.sofifa.net/players/020/801/25_120.png",
        position: "ST",
        flag: "https://cdn.sofifa.net/flags/pt.png",
        club: "https://cdn.sofifa.net/meta/team/2506/120.png",
        rating: 91,
        stats: {
          PAC: 84,
          SHO: 94,
          PAS: 82,
          DRI: 87,
          DEF: 34,
          PHY: 77
        }
      },
    
      {
        name: "Neymar Jr",
        photo: "https://cdn.sofifa.net/players/190/871/25_120.png",
        position: "LW",
        flag: "https://cdn.sofifa.net/flags/br.png",
        club: "https://cdn.sofifa.net/meta/team/7011/120.png",
        rating: 90,
        stats: {
          PAC: 91,
          SHO: 83,
          PAS: 86,
          DRI: 94,
          DEF: 37,
          PHY: 61
        }
      },
    
  
      {
        name: "Vinicius Junior",
        photo: "https://cdn.sofifa.net/players/238/794/25_120.png",
        position: "LW",
        flag: "https://cdn.sofifa.net/flags/br.png",
        club: "https://cdn.sofifa.net/meta/team/3468/120.png",
        rating: 89,
        stats: {
          PAC: 91,
          SHO: 88,
          PAS: 85,
          DRI: 94,
          DEF: 39,
          PHY: 61
        }
      },
    

      {
        name: "N'Golo Kanté",
        photo: "https://cdn.sofifa.net/players/215/914/25_120.png",
        position: "CM",
        flag: "https://cdn.sofifa.net/flags/fr.png",
        club: "https://cdn.sofifa.net/meta/team/476/120.png",
        rating: 87,
        stats: {
          PAC: 77,
          SHO: 66,
          PAS: 75,
          DRI: 82,
          DEF: 88,
          PHY: 82
        }
      },
      {
        name: "Alphonso Davies",
        photo: "https://cdn.sofifa.net/players/234/396/25_120.png",
        position: "LB",
        flag: "https://cdn.sofifa.net/flags/ca.png",
        club: "https://cdn.sofifa.net/meta/team/503/120.png",
        rating: 84,
        stats: {
          PAC: 96,
          SHO: 68,
          PAS: 77,
          DRI: 82,
          DEF: 76,
          PHY: 77
        }
      },
    
      {
        name: "Jan Oblak",
        photo: "https://cdn.sofifa.net/players/200/389/25_120.png",
        position: "GK",
        flag:  "https://cdn.sofifa.net/flags/si.png",
        club: "https://cdn.sofifa.net/meta/team/7980/120.png",
        rating: 91,
        stats: {
          DIV: 89,
          HAN: 90,
          KIC: 78,
          REF: 92,
          SPE: 50,
          POS: 88
        }
      },  
    
      {
        name: "Achraf Hakimi",
        photo: "https://cdn.sofifa.net/players/235/212/25_120.png",
        position: "RB",
        flag: "https://cdn.sofifa.net/flags/ma.png",
        club: "https://cdn.sofifa.net/meta/team/591/120.png",
        rating: 84,
        stats: {
          PAC: 91,
          SHO: 76,
          PAS: 80,
          DRI: 80,
          DEF: 75,
          PHY: 78
        }
      }
      
    ];
    
  localStorage.setItem("playersCards", JSON.stringify(playersInfo));
  }