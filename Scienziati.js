const scienziati = [
  { nome: "Albert Einstein",      vivo: "No", premio_nobel: "Si", lavoro: "Fisico",     nazionalita: "tedesco"   },
  { nome: "Galileo Galilei",      vivo: "No", premio_nobel: "No", lavoro: "Astronomo",  nazionalita: "italiano"  },
  { nome: "Guglielmo Marconi",    vivo: "No", premio_nobel: "Si", lavoro: "Fisico",     nazionalita: "italiano"  },
  { nome: "Alessandro Volta",     vivo: "No", premio_nobel: "No", lavoro: "Fisico",     nazionalita: "italiano"  },
  { nome: "Enrico Fermi",         vivo: "No", premio_nobel: "Si", lavoro: "Fisico",     nazionalita: "italiano"  },
  { nome: "Rita Levi-Montalcini", vivo: "No", premio_nobel: "Si", lavoro: "Medico",     nazionalita: "italiano"  },
  { nome: "Max Planck",           vivo: "No", premio_nobel: "Si", lavoro: "Fisico",     nazionalita: "tedesco"   },
  { nome: "Johannes Kepler",      vivo: "No", premio_nobel: "No", lavoro: "Astronomo",  nazionalita: "tedesco"   },
  { nome: "Emmy Noether",         vivo: "No", premio_nobel: "No", lavoro: "Matematico", nazionalita: "tedesco"   },
  { nome: "Werner Heisenberg",    vivo: "No", premio_nobel: "Si", lavoro: "Fisico",     nazionalita: "tedesco"   },
  { nome: "Isaac Newton",         vivo: "No", premio_nobel: "No", lavoro: "Fisico",     nazionalita: "inglese"   },
  { nome: "Charles Darwin",       vivo: "No", premio_nobel: "No", lavoro: "Biologo",    nazionalita: "inglese"   },
  { nome: "Ada Lovelace",         vivo: "No", premio_nobel: "No", lavoro: "Matematico", nazionalita: "inglese"   },
  { nome: "Michael Faraday",      vivo: "No", premio_nobel: "No", lavoro: "Fisico",     nazionalita: "inglese"   },
  { nome: "Rosalind Franklin",    vivo: "No", premio_nobel: "No", lavoro: "Chimico",    nazionalita: "inglese"   },
  { nome: "Thomas Edison",        vivo: "No", premio_nobel: "No", lavoro: "Ingegnere",  nazionalita: "americano" },
  { nome: "Katherine Johnson",    vivo: "No", premio_nobel: "No", lavoro: "Matematico", nazionalita: "americano" },
  { nome: "Richard Feynman",      vivo: "No", premio_nobel: "Si", lavoro: "Fisico",     nazionalita: "americano" },
  { nome: "Carl Sagan",           vivo: "No", premio_nobel: "No", lavoro: "Astronomo",  nazionalita: "americano" },
  { nome: "Jennifer Doudna",      vivo: "Si", premio_nobel: "Si", lavoro: "Chimico",    nazionalita: "americano" },
];

const domande = [
  { testo: "Il tuo/a scienziato/a è italiano/a?",              chiave: "nazionalita",  valore: "italiano"   },
  { testo: "Il tuo/a scienziato/a è americano/a?",             chiave: "nazionalita",  valore: "americano"  },
  { testo: "Il tuo/a scienziato/a è tedesco/a?",               chiave: "nazionalita",  valore: "tedesco"    },
  { testo: "Il tuo/a scienziato/a è inglese?",                 chiave: "nazionalita",  valore: "inglese"    },
  { testo: "Il tuo/a scienziato/a è un/a Fisico?",             chiave: "lavoro",       valore: "Fisico"     },
  { testo: "Il tuo/a scienziato/a è un/a Astronomo?",          chiave: "lavoro",       valore: "Astronomo"  },
  { testo: "Il tuo/a scienziato/a è un/a Matematico?",         chiave: "lavoro",       valore: "Matematico" },
  { testo: "Il tuo/a scienziato/a è un/a Medico?",             chiave: "lavoro",       valore: "Medico"     },
  { testo: "Il tuo/a scienziato/a è un/a Biologo?",            chiave: "lavoro",       valore: "Biologo"    },
  { testo: "Il tuo/a scienziato/a è un/a Chimico?",            chiave: "lavoro",       valore: "Chimico"    },
  { testo: "Il tuo/a scienziato/a è un/a Ingegnere?",          chiave: "lavoro",       valore: "Ingegnere"  },
  { testo: "Il tuo/a scienziato/a è ancora vivo/a?",           chiave: "vivo",         valore: "Si"         },
  { testo: "Il tuo/a scienziato/a ha vinto il Premio Nobel?",  chiave: "premio_nobel", valore: "Si"         },
];

let candidati = [];
let dIdx = 0;

// Utility

function show(id) {
  document.querySelectorAll(".screen").forEach(s => s.classList.remove("active"));
  document.getElementById(id).classList.add("active");
}

function buildGrid(containerId, tutti, evidenziati) {
  const el = document.getElementById(containerId);
  el.innerHTML = "";
  tutti.forEach(s => {
    const div = document.createElement("div");
    const isCandidate = evidenziati ? evidenziati.some(c => c.nome === s.nome) : true;
    div.className = "scientist-btn" + (evidenziati && !isCandidate ? " eliminated" : "") +
                    (evidenziati && isCandidate && evidenziati.length < tutti.length ? " active-candidate" : "");
    div.textContent = s.nome;
    el.appendChild(div);
  });
}

// Gioco

function startGame() {
  candidati = [...scienziati];
  dIdx = 0;
  buildGrid("game-grid", scienziati, scienziati);
  show("screen-game");
  showQuestion();
}

function showQuestion() {
  if (candidati.length === 1 || dIdx >= domande.length || candidati.length === 0) {
    showResult();
    return;
  }

  const d = domande[dIdx];
  document.getElementById("question-text").textContent = d.testo;
  document.getElementById("q-num").textContent  = dIdx + 1;
  document.getElementById("q-tot").textContent  = domande.length;
  document.getElementById("cand-count").textContent = candidati.length;
  document.getElementById("prog-fill").style.width = Math.round((dIdx / domande.length) * 100) + "%";
  buildGrid("game-grid", scienziati, candidati);
}

function answer(risposta) {
  const d = domande[dIdx];
  candidati = candidati.filter(s => {
    const valoreS = s[d.chiave];
    if (risposta === "Si") return valoreS === d.valore;
    else                   return valoreS !== d.valore;
  });
  dIdx++;
  showQuestion();
}

function skipQuestion() {
  dIdx++;
  if (dIdx >= domande.length) { showResult(); return; }
  showQuestion();
}

function showResult() {
  show("screen-result");
  const box = document.getElementById("result-content");

  if (candidati.length === 1) {
    const s = candidati[0];
    box.innerHTML = `
      <div class="result-emoji">🔬</div>
      <p class="result-label">Il tuo/a scienziato/a è</p>
      <div class="result-name">${s.nome}</div>
      <div class="badge-row">
        <span class="badge badge-blue">${s.lavoro}</span>
        <span class="badge badge-blue">${s.nazionalita}</span>
        ${s.premio_nobel === "Si" ? '<span class="badge badge-green">Premio Nobel</span>' : ""}
        ${s.vivo === "Si" ? '<span class="badge badge-green">In vita</span>' : ""}
      </div>`;
  } else if (candidati.length > 1 && candidati.length <= 5) {
    const nomi = candidati.map(s => `<li>${s.nome}</li>`).join("");
    box.innerHTML = `
      <div class="result-emoji">🤔</div>
      <p class="result-label" style="font-weight:600;">Sono indeciso tra questi ${candidati.length}:</p>
      <ul class="multiple-list">${nomi}</ul>`;
  } else {
    box.innerHTML = `
      <div class="result-emoji">❓</div>
      <p class="result-label" style="font-weight:600;">Non sono riuscito a indovinare</p>
      <p class="result-sub">Rimasti ${candidati.length} candidati — prova a rispondere con più precisione!</p>`;
  }
}

function resetGame() {
  candidati = [...scienziati];
  dIdx = 0;
  buildGrid("start-grid", scienziati, null);
  show("screen-start");
}

// Inizializzazione
window.addEventListener("DOMContentLoaded", () => {
  buildGrid("start-grid", scienziati, null);
});
