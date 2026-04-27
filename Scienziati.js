const scienziati=[
   {nome: "Albert Einstein",
    vivo: "No",
    premio_nobel: "Si",
    lavoro: "Fisico",
    nazionalita: "tedesco"
   },
    {nome: "Galielo Galilei",
    vivo: "No",
    premio_nobel: "Si",
    lavoro: "Astronomo",
    nazionalita: "italiano"
   },
   {nome: "Guglielmo Marconi",
    vivo: "No",
    premio_nobel: "Si" ,
    lavoro: "Fisico",
    nazionalità: "italiano"
   },
    {nome: "Alessandro Volta",
    vivo: "No" ,
    premio_nobel: "No" ,
    lavoro: "Fisico",
    nazionalita: "italiano"
   },
    {nome: "Enrico Fermi",
    vivo: "No",
    premio_nobel:"Si" ,
    lavoro: "Fisico",
    nazionalita: "italiano"
   },
    {nome: "Rita Levi Montalcini",
    vivo: "No",
    premio_nobel:"Si" ,
    lavoro: "Medico",
    nazionalita: "italiano"
   },
    {nome: "Max Planck",
    vivo: "No",
    premio_nobel:"Si" ,
    lavoro: "Fisico",
    nazionalita: "tedesco"
   },
    {nome: "Jahannes Kepler",
    vivo: "No",
    premio_nobel:"No" ,
    lavoro: "Astronomo",
    nazionalita: "tedesco"
   },
    {nome: "Emmy Noether",
    vivo: "No",
    premio_nobel:"No" ,
    lavoro: "Matematico",
    nazionalita: "tedesca"
   },
    {nome: "Werner Heisenberg",
    vivo: "No" ,
    premio_nobel: "Si" ,
    lavoro: "Fisico",
    nazionalita: "tedesco"
   },
    {nome: "Isaac Newton",
    vivo: "No",
    premio_nobel:"No" ,
    lavoro: "Fisico",
    nazionalita: "inglese"
   },
    {nome: "Charles Darwin",
    vivo: "No",
    premio_nobel: "No",
    lavoro: "Biologo",
    nazionalita: "inglese"
   },
    {nome: "Ada Lovelace",
    vivo: "No",
    premio_nobel: "No",
    lavoro: "Biologo",
    nazionalita: "inglese"
   },
    {nome: "Michael Faraday",
    vivo: "No" ,
    premio_nobel: "No" ,
    lavoro: "Fisico",
    nazionalita: "inglese"
   },
    {nome: "Rosalind Franklin",
    vivo: "No",
    premio_nobel:"No" ,
    lavoro: "Chimico",
    nazionalita: "inglese"
   },
    {nome: "Thomas Edison",
    vivo: "No",
    premio_nobel:"No" ,
    lavoro: "Ingegnere",
    nazionalita: "americano"
   },
    {nome: "Katherine Johnson",
    vivo: "No",
    premio_nobel: "No",
    lavoro: "Matematico",
    nazionalita: "americano"
   },
    {nome: "Richard Feynman",
    vivo: "No",
    premio_nobel: "Si",
    lavoro: "Fisico",
    nazionalita: "americano"
   },
    {nome: "Carl Sagan",
    vivo: "No",
    premio_nobel: "No" ,
    lavoro: "Astronomo",
    nazionalita: "americano"
   },
    {nome: "Jennifer Doudna",
    vivo: "Si",
    premio_nobel: "Si" ,
    lavoro: "Chimico",
    nazionalita: "americano"
   },
]
const domande=[
{a: "Il tuo/a scienziato/a è americano/a?", chiave: "nazionalita"},
{b: "Il tuo/a scienziato/a è tedesco/a?", chiave: "nazionalita"},
{c: "Il tuo/a scienziato/a è italiano/a?", chiave: "nazionalita"},
{d: "Il tuo/a scienziato/a è inglese?", chiave: "nazionalita"},
{e: "Il tuo/a scienziato/a è un Fisico?", chiave: "lavoro", valore: "Fisico"},
{f: "Il tuo/a scienziato/a è un Matematico?", chiave: "lavoro",valore: "Matematico"},
{g: "Il tuo/a scienziato/a è un Astronomo?", chiave: "lavoro",valore: "Astronomo"},
{h: "Il tuo/a scienziato/a è un Medico?", chiave: "Medico"},
{j: "Il tuo/a scienziato/a è un Biologo?", chiave: "Biologo"},
{k: "Il tuo/a scienziato/a è un Chimico?", chiave: "Chimico"},
{l: "Il tuo/a scienziato/a è un Ingegnere?", chiave: "Ingegnere"},
{m: "Il tuo/a scienziato/a è vivo?", chiave: "vivo"},
{n: "Il tuo/a scienziato/a ha vinto il premio nobel?", chiave: "premio_nobel"},
]
let candidati = [...scienziati];


function gioca() {
   alert("Pensa a uno scienziato della lista. Ti farò delle domande per indovinare!");
   for (let d of domande) {
       if (candidati.length === 1) break;
       let risposta = prompt(`${d.testo} (Scrivi 'Si' o 'No')`);
       candidati = candidati.filter(s => {
           if (d.chiave === "nazionalita") {
               return risposta === "Si" ? s.nazionalita === d.valore : s.nazionalita !== d.valore;
           }
           if (d.chiave === "lavoro") {
               return risposta === "Si" ? s.lavoro === d.valore : s.lavoro !== d.valore;
           }
           return s[d.chiave] === risposta;
       });


    console.log(`Candidati rimasti: ${candidati.length}`);
   }
   if (candidati.length === 1) {
       alert("Lo scienziato a cui pensavi è: " + candidati[0].nome + "!");
   } else if (candidati.length > 1) {
       let nomi = candidati.map(s => s.nome).join(", ");
       alert("Sono indeciso tra questi: " + nomi);
   } else {
       alert("Non ho trovato nessuno scienziato con queste caratteristiche...");
   }
}