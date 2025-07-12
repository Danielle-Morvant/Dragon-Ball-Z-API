console.log(
  "I Am The Answer To All Living Things That Cry Out For Peace. -Goku!"
);

//VARIABLES DECLARED HERE

//BUTTON ID = bttn
const bttn = document.getElementById("bttn");
//IMG CONTAINER ID = dbzCharacter
const dbzCharacter = document.getElementById("dbzCharacter");
//TEXT INPUT ID =  dragonName
const dragonName = document.getElementById("dragonName");
//EMPTY DIV ID
const characterInfo = document.getElementById("characterInfo");

//pagination ids
const pageOne = document.getElementById('pageOne');





async function fetchData(name) {
  try {
    //CONNECTS TO THE WEBSITE AND STORES THE RESULTS IN RESPONSE
    const response = await fetch(
      `https://dragonball-api.com/api/characters?name=${name}`
    );

    if (!response.ok) {
      throw new Error("can't do fetchData!");
    }

    //CONVERTS THE RESULTS FROM STRING FORM TO OBJECT OR DATA
    const data = await response.json();
    console.log(data);
    document.textContent(data);
   // document.addEventListener("click",data);
   
  return data;
  } catch (error) {
    //IF THERES AN ERROR, RUN THIS CODE
    console.log("SOMETHING IS BUGGIN` DA CODE: fetchData", error);
  }
}

function renderData (data){
  document.characterInfo.fetchData.innerHTML(data);
  console.log(data)
}

bttn.addEventListener("click", () => showCharacters());
fetchData("");

//function that randomnly picks one character with image when name is typed and button is clicked
async function randomCharacter() {
  try {
    const response = await fetch(
      "https://dragonball-api.com/api/characters?limit1"
    );

    if (!response.ok) {
      throw new Error("NO CHARACTER CALLED!");
    }

    const data = await response.json();
    console.log(data.items);
  } catch (error) {
    //IF THERES AN ERROR, RUN THIS CODE
    console.log("SOMETHING IS WRONG WITH YA CODE:", error);
  }
}
//ACTIVATE FUNCTIONS

async function showCharacters() {
  const data = await fetchData(dragonName.value);

  //CALL FUNCTION TO RENDER DATA
  renderRandomDragon(data);
}

function renderRandomDragon(characterData) {


  //WRITE LOGIC TO RENDER DATA FROM CHARACTER
 // document.addEventListener("click",data);
}

//BELOW IS JUST AN ATTEMPT TO ATTACH EACH PAGE TO PAGE NUMBER IN HTML AND HOPEFULLY HAVE IT RENDERED(TIME PERMITTING)

async function page1(items) {
  try {
    const response = await fetch(
      `https://dragonball-api.com/api/characters?limit=10`
    );

    if (!response.ok) {
      throw new Error("can't do page1!");
    }

    const data = await response.json();

    pageOne.innerHTML = data
    .map((items) => {
      return "" + items;
    }
  )

  } catch (error) {
    //IF THERES AN ERROR, RUN THIS CODE
    console.log("SOMETHING IS BUGGIN` DA CODE: page1", error);
  } 
}