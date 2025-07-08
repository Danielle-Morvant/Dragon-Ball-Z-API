console.log("I Am The Answer To All Living Things That Cry Out For Peace. -Goku!")

fetch("https://dragonball-api.com/api/characters")
   .then(response => console.log(response))
   .catch(error => console.error(error));