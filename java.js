console.log("I Am The Answer To All Living Things That Cry Out For Peace. -Goku!")

fecthData();

async function fecthData(){

    try{

        const bttn = document.getElementById("bttn");
        const dbzCharacter = document.getElementById("dbzCharacter");
        const dragonName = document.getElementById("dragonName");
        const response = await fetch("https://dragonball-api.com/api/characters?limit=58");

        if(!response.ok){
            throw new Error("can't do that!");
        }


       const data = await response.json();
       console.log(data.items);
   
    }
    catch(error){
        console.log(error);
    }

    bttn.addEventListener.fecthData()
    

}

