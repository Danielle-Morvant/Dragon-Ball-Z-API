console.log("I Am The Answer To All Living Things That Cry Out For Peace. -Goku!")


      //VARIABLES DECLARED HERE
        const bttn = document.getElementById("bttn");
        const dbzCharacter = document.getElementById("dbzCharacter");
        const dragonName = document.getElementById("dragonName");


fecthData();

async function fecthData(){

    try{
       
       
       //CONNECTS TO THE WEBSITE AND STORES THE RESULTS IN RESPONSE
        const response = await fetch("https://dragonball-api.com/api/characters?limit=58");
       

        if(!response.ok){
            throw new Error("can't do that!");
        }

      //CONVERTS THE RESULTS FROM STRING FORM TO OBJECT OR DATA FORM
       const data = await response.json();
       console.log(data.items);
   
    }
    catch(error){
        //IF THERES AN ERROR, RUN THIS CODE
        console.log("SOMETHING IS BUGGIN` DA CODE:",error);
    }

    
}

document.getElementById("bttn").addEventListener("click",fecthData);