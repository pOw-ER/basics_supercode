// LEVEL 1_1

let name = "Enes"
let nachname = "Yilmaz"
let alter = 30
let geburtsOrt = "Istanbul"
let größe = 1.74
let gewicht = 76
let hobbys = "reisen, lesen"
let computerSpiele = "Fortnite"
let lieblingsEssen = "icli köfte"
let lieblingsSport = "fußball"
let lieblingsModeMarke = "adidas"
let lieblingsJahresZeit = "sommer"
let lieblingsUrlaubOrt = "Mallorca-Alcudia"

let myMessage = `Ich bin ${name} ${nachname} und ${alter} Jahre alt. ich bin in ${geburtsOrt} geboren. Ich bin ${größe} lang und wiege ${gewicht}kg. Meine Hobbys sind ${hobbys} ${lieblingsSport} und ${computerSpiele} spielen. Mein Lieblingsessen ist ${lieblingsEssen}, mein LieblingsjahresZeit ist natürlich ${lieblingsJahresZeit}. Ich reise immer gerne nach ${lieblingsUrlaubOrt} um Urlaub zu machen. ich trage immer mein ${lieblingsModeMarke} T-Shirts.`

console.log(myMessage);

// LEVEL 1_2

let lunatic = "The lunatic is on the grass";
let darkSide = "I'll see you on the dark side of the moon";
let hall = "The lunatic is in the hall";
let head = "The lunatic is in my head";
let door = "You lock the door";
let paperboy = "paperboy";
let and = "And";
let the = "The";
let you = "You";
let ifs = "if";

let song = `Brain Damage Songtext

${lunatic}
${lunatic}
Remembering games and daisy chains and laughs
Got to keep the loonies on the path

${hall}
${hall}
The paper holds their folded faces to the floor
${and} every day the ${paperboy} brings more


${and} ${ifs} the dam breaks open many years too soon
${and} ${ifs} there is no room upon the hill
${and} ${ifs} your head explodes with dark forebodings too
${darkSide}

${head}
${head}
${you} raise the blade, you make the change
${you} rearrange me 'til I'm sane
${you} lock the door
${and} throw away the key
There's someone in my head but it's not me

${and} ${ifs} the cloud bursts, thunder in your ear
${you} shout and no one seems to hear
${and} ${ifs} the band you're in starts playing different tunes
${darkSide}
`

document.getElementById('song-p').innerHTML = song;
