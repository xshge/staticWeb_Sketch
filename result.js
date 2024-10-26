const zodiacs = {
    "zodiac":["Aries","Tauraus","Gemini","Cancer","Leo","Virgo","Libra"],
    "birthMonths":["March 21 – April 19","April 20 – May 20","May 21 – June 20 ","June 21 – July 22","July 23 – August 22 ","August 23 – September 22","September 23 – October 22"],
    "traits":["No filter,Easily bored,Will do anything on a dare","Homebody,Hates big changes,All or nothing","Charismatic,Uses humor as a crutch,Could talk to a brick wall","Sensitive,Seeks comfort,Forgives but never forgets","Big personality,A little bit vain,Exudes warmth and creativity","Exceptional spatial awareness,Needs to feel useful,A million ideas per second","Prone to fantasy,Can't make decisions,Sees every side"],
    "celebrities":["Mariah Carey,Jackie Chan,Leonardo DaVinci", "Karl Marx,Audrey Hepburn,William Shakespeare","Kendrick Lamar,Prince,Laverne Cox","Ariana Grande,Franz Kafka,Frida Kahlo","Usain Bolt,Coco Chanel,Charli XCX","Bernie Sanders,Marsha P. Johnson,Agatha Christie","Donald Glover,Neil DeGrasse Tyson,Gwyneth Paltrow"]

}
function grabInfo(value){
    let title = document.getElementById("zodiac");
    let birthMonth = document.getElementById("mths");
    const traits = document.getElementById("z_traits");
    const celebs = document.getElementById("z_celebs");

    let index = Number(value);
    let charac = zodiacs["traits"][index].split(",");
    let clb = zodiacs["celebrities"][index].split(",");


    title.innerText = zodiacs["zodiac"][index];
    birthMonth.innerText = zodiacs["birthMonths"][index];

    traits.innerHTML = " "; 
    for(let i = 0; i < charac.length; i++){
        traits.innerHTML += `<p>${charac[i]} </p>`;
        console.log(`${charac[i]}`)
    }

    celebs.innerHTML = " ";
    for(let i = 0; i < clb.length; i++){
        celebs.innerHTML += `<p>${clb[i]} </p>`;
        
    }

}
document.addEventListener("DOMContentLoaded",function(){
    let i = localStorage.getItem("selectedZodiacIndex");
    grabInfo(i);

});