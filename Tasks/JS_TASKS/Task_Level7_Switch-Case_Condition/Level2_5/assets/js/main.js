let bundeslandInfo = document.getElementById('bundeslandInfo')
let ergebnis = document.getElementById('bundeslandInfoErgebnis')

function check(){
  switch (bundeslandInfo.value){
    case "berlin":
    case "Berlin" :
      ergebnis.innerHTML = "Berlin hat 3,520 Mio Einwohner und Berlin ist die Hauptstadt"
      break;
    case "Baden Wüttenberg":
    case "baden wüttenberg" :
      ergebnis.innerHTML = "Baden-Württemberg hat 10,880 Mio Einwohner und Stuttgart ist die Hauptstadt"
      break;
    case "Bayern":
    case "bayern" :
      ergebnis.innerHTML = "Bayern hat 12,844 Mio Einwohner und München ist die Hauptstadt"
      break;
    case "Brandenburg":
    case "brandenburg" :
      ergebnis.innerHTML = "Brandenburg hat 2,485 Mio Einwohner und Potsdam ist die Hauptstadt"
      break;
    case "Bremen":
    case "bremen" :
      ergebnis.innerHTML = "Bremen hat 0,671 Mio Einwohner und Bremen ist die Hauptstadt"
      break;
    case "Hamburg":
    case "hamburg" :
      ergebnis.innerHTML = "Hamburg hat 1,787 Mio Einwohner und Hamburg ist die Hauptstadt"
      break;
    case "Hessen":
    case "hessen" :
      ergebnis.innerHTML = "Hessen hat 6,176 Mio Einwohner und Wiesbaden ist die Hauptstadt"
      break;
    case "Mecklenburg Vorpommern":
    case "mecklenburg vorpommern" :
      ergebnis.innerHTML = "Mecklenburg-Vorpommern hat 1,612 Mio Einwohner und Schwerin ist die Hauptstadt"
      break;
    case "Niedersachsen":
    case "niedersachsen" :
      ergebnis.innerHTML = "Niedersachsen hat 7,927 Mio Einwohner und Hannover ist die Hauptstadt"
      break;
    case "Nordrhein Westfalen":
    case "nordrhein westfalen" :
      ergebnis.innerHTML = "Nordrhein-Westfalen hat 17,865 Mio Einwohner und Düsseldorf ist die Hauptstadt"
      break;
    case "Rheinland Pfalz":
    case "rheinland pfalz" :
      ergebnis.innerHTML = "Rheinland-Pfalz hat 4,053 Mio Einwohner und Mainz ist die Hauptstadt"
      break;
    case "Saarland":
    case "saarland" :
      ergebnis.innerHTML = "Saarland hat 0,996 Mio Einwohner und Saarbrücken ist die Hauptstadt"
      break;
    case "Sachsen":
    case "sachsen" :
      ergebnis.innerHTML = "Sachsen hat 4,085 Mio Einwohner und Dresden ist die Hauptstadt"
      break;
    case "Sachsen Anhalt":
    case "sachsen anhalt" :
      ergebnis.innerHTML = "Sachsen-Anhalt hat 2,245 Mio Einwohner und Magdeburg ist die Hauptstadt"
      break;
    case "Schleswig Holstein":
    case "schleswig holstein" :
      ergebnis.innerHTML = "Schleswig-Holstein hat 2,859 Mio Einwohner und Kiel ist die Hauptstadt"
      break;
    case "Thüringen":
    case "thüringen" :
      ergebnis.innerHTML = "Thüringen hat 2,171 Mio Einwohner und Erfurt ist die Hauptstadt"
      break;
    default :
    ergebnis.innerHTML = "Ein solches Bundesland gibt es in Deutschland nicht."
  }
}
