var content  = document.getElementById('content');
console.log(content);
function Project(id,title,link,image="",description="",){
    this.id  = id;
    this.ttile = title;
    this.link = link;
    this.description = description;
    this.image = image; 
}


var index = {};
var projects = [];

projects.push( new Project("sort","Sorting Algorithms Animated","https://scraul.github.io/SortingProject/","sort.png"));
projects.push( new Project("connect","Connect","https://github.com/scRaul/Connect","connect.png"));
projects.push( new Project("cg","About 3D Computer Graphics","https://hw2-computer-graphics-1.raulramirez7.repl.co/","cg.png"));
projects.push( new Project("pong","Pong","https://gamedev-pong.raulramirez7.repl.co/","pong.png"));
projects.push( new Project("solar","Solar System","https://scraul.github.io/SolarSystem/","solarsystem.png"));
projects.push( new Project("poke","Pokedex","https://pokemon-api.raulramirez7.repl.co/","Pokedex.png"));
projects.push( new Project("points","Point Distribution","https://scraul.github.io/PointDistributions/","points.png"));
projects.push( new Project("rest","Resturant","https://replit.com/@RaulRamirez7/RestuarantProject#index.js","rest.png"));
projects.push( new Project("tut","Game Dev. Tutorials","https://tutorialgamedev.raulramirez7.repl.co/","tut.png"));

for(let i = 0; i < projects.length;i++)
    index[(projects[i].id)] = i;

projects[index.sort].description = "A visual representation of how quicksort and insertion sort differ";
projects[index.connect].description ="C++ terminal game, goal to connect user specified slots in a row.";
projects[index.cg].description = "A very breif overview on making 3D graphics using webgl";
projects[index.pong].description = "Recreation of pong using HTML5, CSS and JS";
projects[index.solar].description = "Final Project for Computer Graphics Course";
projects[index.poke].description = "Web app for seaching up pokemon by name, fetches data fromu pokeapi.co";
projects[index.points].description = "Visualize how to points are distributed on a plane using various functions";
projects[index.rest].description = "This was a final group project,using node,express, and mySql stack";

projects[index.tut].description = "Tutorials on how to implement video game concepts, from getting started";
projects[index.tut].description += " to implementing path finding algorithms. ";

projects.forEach( proj =>{
    let newProj = document.createElement('div'); 
    newProj.className = "card";
    newProj.id = proj.id;
    newProj.innerHTML = `
    <div class='note'>\n
        <img class='image' src=img/${proj.image}>\n
        <h4> ${proj.ttile} </h4> \n
        <p> ${proj.description} </p>\n
    </div>
    `;
    content.appendChild(newProj);
    
});
    
