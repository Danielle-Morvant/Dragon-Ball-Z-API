console.log("I Am The Answer To All Living Things That Cry Out For Peace. -Goku!")


      //VARIABLES DECLARED HERE

        //BUTTON ID = bttn
        const bttn = document.getElementById("bttn");
        //IMG CONTAINER ID = dbzCharacter
        const dbzCharacter = document.getElementById("dbzCharacter");
        //TEXT INPUT ID =  dragonName
        const dragonName = document.getElementById("dragonName");


fecthData();

async function fecthData(){

    try{
       
       
       //CONNECTS TO THE WEBSITE AND STORES THE RESULTS IN RESPONSE
        const response = await fetch("https://dragonball-api.com/api/characters?limit=58");
      

        if(!response.ok){
            throw new Error("can't do that!");
        }

       //CONVERTS THE RESULTS FROM STRING FORM TO OBJECT OR DATA 
       const data = await response.json();
       console.log(data.items);
   
    }
    catch(error){
        //IF THERES AN ERROR, RUN THIS CODE
        console.log("SOMETHING IS BUGGIN` DA CODE:",error);
    }

    
};


//function that randomnly picks one character with image when name is typed and button is clicked
async function randomCharacter(){

    try{ 

    const response = await fetcch("https://dragonball-api.com/api");

     if(!response.ok){
            throw new Error("NO CHARACTER CALLED!");
        }

        const data = await response.json();
        console.log();
    }

    catch(error){
        //IF THERES AN ERROR, RUN THIS CODE
        console.log("SOMETHING IS WRONG WITH DA CODE:",error);
    }

    
}
       //ACTIVATE FUNCTIONS
       document.getElementById("bttn").addEventListener("click",fecthData);