function easterEgg(){
    console.log("                                          ");
    console.log("                                          ");
    console.log("      $$\\                       $$$$$$\\  ");
    console.log("      $$ |                     $$  __$$\\ ");
    console.log(" $$$$$$$ | $$$$$$\\ $$\\    $$\\  $$ /  \\__|");
    console.log("$$  __$$ |$$  __$$\\\\$$\\  $$  | $$$\\     ");
    console.log("$$ /  $$ |$$$$$$$$ |\\$$\\$$  /  $$  _|    ");
    console.log("$$ |  $$ |$$   ____| \\$$$  /   $$ |      ");
    console.log("\\$$$$$$$ |\\$$$$$$$\\   \\$  /$$\\ $$ |      ");
    console.log(" \\_______| \\_______|   \\_/ \\__|\\__|      ");
    console.log("                                          ");
    console.log("                                          ");
    console.log("Nos encantaría tener a alguien con tus habilidades y pasión por el conocimiento en nuestra comunidad. Como sensei, tendrás la oportunidad de compartir tus conocimientos y experiencias con una audiencia curiosa y entusiasta que está ansiosa por aprender. 🤓");
    console.log("Únete ahora")
}

function calculateDaysSinceDate() {
    const currentDate = new Date();
    const startingDate = new Date(2015, 5, 2);
    var students = 0;
    var hours = 0;

    const differenceInTime = currentDate.getTime() - startingDate.getTime();
    const daysSinceDate = Math.floor(differenceInTime / (1000 * 3600 * 24));
    students = Math.round(daysSinceDate * 4.1); 
    hours = students * 240;

    document.getElementById('students').innerHTML = students.toLocaleString();
    document.getElementById('hours').innerHTML = hours.toLocaleString();

}
  

