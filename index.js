// name, team, matches, runs, avg, strike rate, 100s, 50s
const ODI = [
  ["Sachin Tendulkar","IND",463,18426,44.8,86.2,49,96],
  ["Virat Kohli","IND",295,14181,58.2,93.5,51,74],
  ["Kumar Sangakkara","SL",404,14234,42.0,78.9,25,93],
  ["Ricky Ponting","AUS",375,13704,42.0,80.4,30,82],
  ["Sanath Jayasuriya","SL",445,13430,32.4,91.2,28,68],
  ["Mahela Jayawardene","SL",448,12650,33.4,78.9,19,77],
  ["Inzamam-ul-Haq","PAK",378,11739,39.5,74.2,10,83],
  ["Jacques Kallis","SA",328,11579,44.4,72.9,17,86],
  ["Sourav Ganguly","IND",311,11363,41.0,73.7,22,72],
  ["Rohit Sharma","IND",273,11168,48.8,92.8,32,58],
  ["Rahul Dravid","IND",344,10889,39.2,71.2,12,83],
  ["MS Dhoni","IND",350,10773,50.6,87.6,10,73],
  ["Chris Gayle","WI",301,10480,37.8,87.2,25,54],
  ["Brian Lara","WI",299,10405,40.5,79.5,19,63],
  ["Tillakaratne Dilshan","SL",330,10290,39.3,86.2,22,47],
  ["Mohammad Yousuf","PAK",288,9720,41.7,75.1,15,64],
  ["Adam Gilchrist","AUS",287,9619,35.9,96.9,16,55],
  ["AB de Villiers","SA",228,9577,53.5,101.1,25,53],
  ["Saeed Anwar","PAK",247,8824,39.2,80.7,20,43],
  ["Shivnarine Chanderpaul","WI",268,8778,41.6,70.7,11,59],
  ["Yuvraj Singh","IND",304,8701,36.6,87.7,14,52],
  ["Desmond Haynes","WI",238,8648,41.4,63.1,17,57],
  ["Ross Taylor","NZ",236,8607,47.5,83.3,21,51],
  ["Tamim Iqbal","BAN",243,8357,36.6,78.5,14,56],
  ["Hashim Amla","SA",181,8113,49.5,88.4,27,39],
  ["Stephen Fleming","NZ",280,8037,32.4,71.5,8,49],
  ["Eoin Morgan","ENG",248,7701,39.3,91.2,14,42],
  ["Shakib Al Hasan","BAN",247,7570,37.3,82.5,9,56],
  ["Martin Guptill","NZ",198,7346,41.7,87.6,18,39],
  ["Kane Williamson","NZ",170,7000,48.4,81.4,15,45],
  ["David Warner","AUS",161,6932,45.0,97.3,22,33],
  ["Joe Root","ENG",171,6800,50.2,87.0,16,40],
  ["Shikhar Dhawan","IND",167,6793,44.1,91.4,17,39],
  ["Quinton de Kock","SA",155,6770,45.7,96.1,21,30],
  ["Viv Richards","WI",187,6721,47.0,90.2,11,45],
  ["Matthew Hayden","AUS",161,6133,43.8,78.9,10,36],
  ["Babar Azam","PAK",128,5957,56.7,88.9,19,35],
  ["Steve Smith","AUS",170,5800,43.3,87.2,12,35],
  ["Faf du Plessis","SA",143,5507,47.5,88.6,12,35],
  ["Michael Hussey","AUS",185,5442,48.2,87.2,3,39],
  ["Shai Hope","WI",128,5177,50.3,78.2,16,25],
  ["Jos Buttler","ENG",181,5022,40.1,118.0,11,26],
  ["Glenn Maxwell","AUS",142,3934,35.4,126.9,4,23],
  ["Ben Stokes","ENG",114,3463,41.2,96.3,5,24],
  ["KL Rahul","IND",77,2851,49.2,87.6,7,18],
  ["Shubman Gill","IND",55,2775,59.0,99.0,8,15]
];

const TEST = [
  ["Sachin Tendulkar","IND",200,15921,53.8,54.0,51,68],
  ["Ricky Ponting","AUS",168,13378,51.9,58.7,41,62],
  ["Jacques Kallis","SA",166,13289,55.4,45.0,45,58],
  ["Rahul Dravid","IND",164,13288,52.3,42.5,36,63],
  ["Joe Root","ENG",150,12972,50.9,56.5,36,65],
  ["Alastair Cook","ENG",161,12472,45.4,46.9,33,57],
  ["Kumar Sangakkara","SL",134,12400,57.4,53.9,38,52],
  ["Brian Lara","WI",131,11953,52.9,60.5,34,48],
  ["Shivnarine Chanderpaul","WI",164,11867,51.4,43.3,30,66],
  ["Mahela Jayawardene","SL",149,11814,49.8,51.4,34,50],
  ["Allan Border","AUS",156,11174,50.6,56.0,27,63],
  ["Steve Waugh","AUS",168,10927,51.1,48.6,32,50],
  ["Steve Smith","AUS",109,10271,56.0,54.0,36,41],
  ["Sunil Gavaskar","IND",125,10122,51.1,66.0,34,45],
  ["Younis Khan","PAK",118,10099,52.1,52.1,34,33],
  ["Hashim Amla","SA",124,9282,46.6,50.0,28,41],
  ["Kane Williamson","NZ",105,9276,54.9,51.0,33,37],
  ["Graeme Smith","SA",117,9265,48.3,59.7,27,38],
  ["Virat Kohli","IND",123,9230,46.9,55.6,30,31],
  ["Javed Miandad","PAK",124,8832,52.6,53.0,23,43],
  ["Inzamam-ul-Haq","PAK",120,8830,49.6,54.0,25,46],
  ["David Warner","AUS",112,8786,44.6,70.2,26,37],
  ["VVS Laxman","IND",134,8781,46.0,49.3,17,56],
  ["AB de Villiers","SA",114,8765,50.7,54.5,22,46],
  ["Matthew Hayden","AUS",103,8625,50.7,60.1,30,29],
  ["Viv Richards","WI",121,8540,50.2,86.1,24,45],
  ["Virender Sehwag","IND",104,8586,49.3,82.2,23,32],
  ["Michael Clarke","AUS",115,8643,49.1,55.9,28,27],
  ["Gary Sobers","WI",93,8032,57.8,65.0,26,30],
  ["Ross Taylor","NZ",112,7683,44.7,59.2,19,35],
  ["Cheteshwar Pujara","IND",103,7195,43.6,44.4,19,35],
  ["Don Bradman","AUS",52,6996,99.9,71.4,29,13],
  ["Ben Stokes","ENG",105,6508,35.8,59.2,13,31],
  ["Rohit Sharma","IND",64,4276,42.8,56.4,12,18],
  ["Babar Azam","PAK",55,3998,44.4,55.0,9,26]
];

const T20 = [
  ["Rohit Sharma","IND",159,4231,32.1,140.9,5,32],
  ["Babar Azam","PAK",128,4223,39.8,129.2,3,36],
  ["Virat Kohli","IND",125,4188,48.7,137.0,1,38],
  ["Paul Stirling","IRE",145,3601,27.7,135.2,1,23],
  ["Martin Guptill","NZ",122,3531,31.6,135.7,2,20],
  ["Mohammad Rizwan","PAK",102,3313,48.7,126.5,1,29],
  ["David Warner","AUS",110,3277,33.4,142.5,1,28],
  ["Jos Buttler","ENG",124,3200,34.0,144.0,1,25],
  ["Aaron Finch","AUS",103,3120,34.3,142.5,2,19],
  ["Suryakumar Yadav","IND",80,2600,37.5,167.0,4,21],
  ["Quinton de Kock","SA",92,2584,31.5,138.1,1,16],
  ["Kane Williamson","NZ",93,2575,33.4,123.1,0,18],
  ["Shakib Al Hasan","BAN",129,2551,23.2,122.4,0,13],
  ["Glenn Maxwell","AUS",115,2500,29.0,155.0,5,14],
  ["Eoin Morgan","ENG",115,2458,28.6,136.2,0,14],
  ["David Miller","SA",125,2437,33.8,140.5,2,7],
  ["KL Rahul","IND",72,2265,37.8,139.1,2,22],
  ["Mohammad Nabi","AFG",129,2165,22.8,136.5,0,6],
  ["Brendon McCullum","NZ",71,2140,35.7,136.2,2,13],
  ["Nicholas Pooran","WI",98,2079,26.3,136.4,0,13],
  ["Alex Hales","ENG",75,2074,31.0,138.4,1,12],
  ["Chris Gayle","WI",79,1899,27.9,137.5,2,14],
  ["Glenn Phillips","NZ",78,1875,32.9,143.2,2,10],
  ["Colin Munro","NZ",65,1724,31.3,156.4,3,11],
  ["Rahmanullah Gurbaz","AFG",63,1657,26.3,134.8,1,10],
  ["Hardik Pandya","IND",104,1641,26.9,140.9,0,4],
  ["Kieron Pollard","WI",101,1569,25.3,135.1,0,6],
  ["Mitchell Marsh","AUS",60,1563,33.3,135.5,0,9],
  ["Faf du Plessis","SA",50,1528,35.5,134.4,1,10],
  ["Travis Head","AUS",38,1092,34.1,159.2,0,6],
  ["Andre Russell","WI",82,1033,21.5,163.7,0,3],
  ["Heinrich Klaasen","SA",58,1000,24.4,142.8,0,5],
  ["Rinku Singh","IND",26,499,55.4,175.1,0,3]
];

const mkD = a => a.map(r => ({
  name: r[0],
  team: r[1],
  m: r[2],
  runs: r[3],
  avg: r[4],
  sr: r[5],
  c: r[6],
  f: r[7],
  balls: Math.round(r[3] / ((r[5] || 100) / 100)) || r[3],
  outs: Math.max(1, Math.round(r[3] / (r[4] || 40))) || 1,
  matchRuns: 0
}));

const SETS = {ODI: mkD(ODI), Test: mkD(TEST), T20I: mkD(T20)};
let D = SETS.ODI, FMT = "ODI";
const COLS = [["name","Player"],["team","Team"],["m","Mat"],["runs","Runs"],["avg","Avg"],["sr","SR"],["c","100s"],["f","50s"]];
const M = [["runs","Runs"],["avg","Average"],["sr","Strike rate"],["c","Hundreds"],["f","Fifties"],["m","Matches"]];
const $ = id => document.getElementById(id);
let A = D[0].name, B = D[1].name, sk = "runs", sd = -1, charts = {};
const get = n => D.find(p => p.name === n);
const fmt = (k, v) => k === "runs" || k === "m" ? v.toLocaleString("en-IN") : (k === "avg" || k === "sr") ? v.toFixed(1) : v;
const col = n => getComputedStyle(document.documentElement).getPropertyValue(n).trim();

try {
  const s = localStorage.getItem("crease-theme");
  if (s) document.documentElement.dataset.theme = s;
} catch (e) {}

$("theme").onclick = () => {
  const d = document.documentElement;
  const dark = getComputedStyle(d).getPropertyValue("--bg").trim() === "#0d1a14";
  d.dataset.theme = dark ? "light" : "dark";
  try { localStorage.setItem("crease-theme", d.dataset.theme); } catch (e) {}
  draw();
};

function fill() {
  ["pa","pb"].forEach(i => {
    $(i).innerHTML = "";
    D.forEach(p => {
      const o = document.createElement("option");
      o.value = o.textContent = p.name;
      $(i).append(o);
    });
  });
  $("team").innerHTML = '<option value="">All teams</option>';
  [...new Set(D.map(p => p.team))].sort().forEach(t => {
    const o = document.createElement("option");
    o.value = o.textContent = t;
    $("team").append(o);
  });
}
fill();

$("pa").onchange = e => { A = e.target.value; draw(); };
$("pb").onchange = e => { B = e.target.value; draw(); };
["q","team","avg","h"].forEach(i => $(i).oninput = () => draw());
$("reset").onclick = () => {
  $("q").value = "";
  $("team").value = "";
  $("avg").value = 0;
  $("h").value = 0;
  draw();
};

$("th").innerHTML = COLS.map(c => `<th data-k="${c[0]}">${c[1]}</th>`).join("");
$("th").onclick = e => {
  const k = e.target.dataset.k;
  if (!k) return;
  sd = sk === k ? -sd : (k === "name" || k === "team" ? 1 : -1);
  sk = k;
  draw();
};

function filtered() {
  const q = $("q").value.toLowerCase();
  const t = $("team").value;
  const a = +$("avg").value;
  const h = +$("h").value;
  return D.filter(p => p.name.toLowerCase().includes(q) && (!t || p.team === t) && p.avg >= a && p.c >= h)
    .sort((x, y) => (x[sk] > y[sk] ? 1 : -1) * sd);
}

function mk(id, cfg, isLiveTick) {
  if (charts[id] && charts[id].config && charts[id].config.type === cfg.type) {
    charts[id].data = cfg.data;
    charts[id].options = cfg.options;
    charts[id].update(isLiveTick ? 'none' : 'default');
  } else {
    if (charts[id]) charts[id].destroy();
    charts[id] = new Chart($(id), cfg);
  }
}

// Live simulation active player tracking
const ACTIVE_POOL = {
  ODI: ["Virat Kohli", "Rohit Sharma", "Babar Azam", "Shubman Gill", "Joe Root", "Steve Smith", "Shai Hope", "KL Rahul"],
  Test: ["Joe Root", "Steve Smith", "Virat Kohli", "Kane Williamson", "Babar Azam", "Rohit Sharma", "Ben Stokes"],
  T20I: ["Suryakumar Yadav", "Travis Head", "Heinrich Klaasen", "Nicholas Pooran", "Jos Buttler", "Hardik Pandya", "Rinku Singh"]
};
let livePlayerName = null;

function getLivePlayer() {
  const pool = ACTIVE_POOL[FMT] || [];
  if (pool.includes(A)) return A;
  if (pool.includes(B)) return B;
  if (!livePlayerName || !pool.includes(livePlayerName)) {
    livePlayerName = pool[0];
  }
  return livePlayerName;
}

function draw(isLiveTick = false, liveTarget = null) {
  $("pa").value = A;
  $("pb").value = B;
  $("avgv").textContent = $("avg").value;
  $("hv").textContent = $("h").value;

  const a = get(A) || D[0];
  const b = get(B) || D[1];
  const ca = col("--a"), cb = col("--b"), ink = col("--ink"), grid = "rgba(128,128,128,.25)";
  Chart.defaults.color = ink;
  Chart.defaults.font.family = "'DM Sans',sans-serif";

  // Head to Head
  let wa = 0, wb = 0;
  $("cmp").innerHTML = M.map(([k, l]) => {
    const mx = Math.max(a[k], b[k]) || 1;
    const w = a[k] > b[k] ? "a" : a[k] < b[k] ? "b" : "";
    if (w === "a") wa++;
    if (w === "b") wb++;
    return `<div class="row"><div class="side l ${w==="a"?"win":""}"><div class="bar" style="width:${a[k]/mx*100}%;max-width:calc(100% - 60px)"></div><b>${fmt(k,a[k])}</b></div><div class="lab">${l}</div><div class="side r ${w==="b"?"win":""}"><div class="bar" style="width:${b[k]/mx*100}%;max-width:calc(100% - 60px)"></div><b>${fmt(k,b[k])}</b></div></div>`;
  }).join("");

  $("verdict").innerHTML = A === B
    ? "Pick two different players."
    : wa === wb
      ? `${a.name} and ${b.name} are level.<small>${wa} categories each.</small>`
      : `${wa > wb ? a.name : b.name} takes it, ${Math.max(wa,wb)}–${Math.min(wa,wb)}.<small>Wins are counted across ${M.length} categories. Strike rate and average say more about quality than raw runs.</small>`;

  const mxs = M.map(([k]) => Math.max(...D.map(p => p[k])) || 1);
  const rd = p => M.map(([k], i) => +(p[k] / mxs[i] * 100).toFixed(1));

  mk("radar", {
    type: "radar",
    data: {
      labels: M.map(m => m[1]),
      datasets: [
        {label: a.name, data: rd(a), borderColor: ca, backgroundColor: ca + "33"},
        {label: b.name, data: rd(b), borderColor: cb, backgroundColor: cb + "33"}
      ]
    },
    options: {
      maintainAspectRatio: false,
      scales: {
        r: {min: 0, max: 100, ticks: {display: false}, grid: {color: grid}, angleLines: {color: grid}, pointLabels: {color: ink}}
      },
      plugins: {title: {display: true, text: "Profile (100 = best in dataset)", color: ink}}
    }
  }, isLiveTick);

  const f = filtered();
  mk("bar", {
    type: "bar",
    data: {
      labels: f.slice(0, 8).map(p => p.name.split(" ").slice(-1)[0]),
      datasets: [{
        label: "Runs",
        data: f.slice(0, 8).map(p => p.runs),
        backgroundColor: f.slice(0, 8).map(p => p.name === A ? ca : p.name === B ? cb : "#8aa097")
      }]
    },
    options: {
      maintainAspectRatio: false,
      indexAxis: "y",
      plugins: {
        legend: {display: false},
        title: {display: true, text: "Career runs (filtered, A and B highlighted)", color: ink}
      },
      scales: {x: {grid: {color: grid}}, y: {grid: {display: false}}}
    }
  }, isLiveTick);

  mk("scatter", {
    type: "bubble",
    data: {
      datasets: [{
        label: "Players",
        data: f.map(p => ({x: p.avg, y: p.sr, r: Math.max(3, 4 + p.c / 4), n: p.name})),
        backgroundColor: f.map(p => p.name === A ? ca : p.name === B ? cb : "#8aa097aa")
      }]
    },
    options: {
      maintainAspectRatio: false,
      plugins: {
        legend: {display: false},
        tooltip: {callbacks: {label: c => `${c.raw.n}: avg ${c.raw.x}, SR ${c.raw.y}`}}
      },
      scales: {
        x: {
          title: {display: true, text: "Batting average"},
          min: Math.floor(Math.min(...f.map(p => p.avg), 99) - 3),
          grid: {color: grid}
        },
        y: {
          title: {display: true, text: "Strike rate"},
          min: Math.floor(Math.min(...f.map(p => p.sr), 999) - 5),
          grid: {color: grid}
        }
      }
    }
  }, isLiveTick);

  // Table
  document.querySelectorAll("#th th").forEach(t => {
    t.classList.toggle("s", t.dataset.k === sk);
    t.textContent = COLS.find(c => c[0] === t.dataset.k)[1] + (t.dataset.k === sk ? (sd > 0 ? " ▲" : " ▼") : "");
  });

  const currentLive = getLivePlayer();
  $("tb").innerHTML = f.length
    ? f.map(p => {
        const isLive = p.name === currentLive;
        const flashClass = (isLiveTick && p.name === liveTarget) ? " live-flash" : "";
        return `<tr data-n="${p.name}" class="${p.name === A ? "pa" : p.name === B ? "pb" : ""}${flashClass}" tabindex="0">
          <td>${p.name}${isLive ? '<span class="live-dot" title="Live match simulation in progress"></span><span class="live-badge">LIVE</span>' : ''}</td>
          <td><span class="tag">${p.team}</span></td>
          <td>${p.m}</td>
          <td class="${flashClass}">${fmt("runs", p.runs)}</td>
          <td>${p.avg.toFixed(1)}</td>
          <td>${p.sr.toFixed(1)}</td>
          <td>${p.c}</td>
          <td>${p.f}</td>
        </tr>`;
      }).join("")
    : `<tr><td colspan="8" class="empty">No players match. Lower the minimum average or hundreds, or reset the filters.</td></tr>`;
}

let flip = false;
$("tb").onclick = e => {
  const r = e.target.closest("tr");
  if (!r || !r.dataset.n) return;
  if (flip) B = r.dataset.n;
  else A = r.dataset.n;
  flip = !flip;
  draw();
};

$("csv").onclick = () => {
  const f = filtered();
  const t = [COLS.map(c => c[1]).join(",")].concat(f.map(p => COLS.map(c => p[c[0]]).join(","))).join("\n");
  const u = URL.createObjectURL(new Blob([t], {type: "text/csv"}));
  const a = document.createElement("a");
  a.href = u;
  a.download = "players.csv";
  a.click();
};

function setFmt(f) {
  FMT = f;
  D = SETS[f];
  fill();
  const ok = n => D.some(p => p.name === n);
  if (!ok(A) || !ok(B) || A === B) {
    A = D[0].name;
    B = D[1].name;
  }
  sk = "runs";
  sd = -1;
  document.querySelectorAll("#fmt button").forEach(b => b.setAttribute("aria-pressed", b.dataset.f === f));
  $("reset").click();
}
$("fmt").onclick = e => {
  const f = e.target.dataset.f;
  if (f) setFmt(f);
};

// Real-time live match simulation engine
function simulateLiveBall() {
  if (document.hidden) return;
  const targetName = getLivePlayer();
  const p = D.find(x => x.name === targetName);
  if (!p) return;

  const roll = Math.random();
  let dr = 0;
  if (roll < 0.32) {
    dr = 0;
  } else if (roll < 0.64) {
    dr = 1;
  } else if (roll < 0.78) {
    dr = 2;
  } else if (roll < 0.92) {
    dr = 4;
  } else if (roll < 0.98) {
    dr = 6;
  } else {
    // Dismissal
    p.outs = (p.outs || 1) + 1;
    p.matchRuns = 0;
    p.avg = +(p.runs / p.outs).toFixed(1);
    const pool = ACTIVE_POOL[FMT] || [];
    const nextIdx = (pool.indexOf(targetName) + 1) % pool.length;
    livePlayerName = pool[nextIdx];
    draw(true, targetName);
    return;
  }

  p.runs += dr;
  p.balls = (p.balls || p.runs) + 1;
  p.matchRuns = (p.matchRuns || 0) + dr;
  p.avg = +(p.runs / (p.outs || 1)).toFixed(1);
  p.sr = +(p.runs / p.balls * 100).toFixed(1);

  if (p.matchRuns >= 100 && !p.got100) {
    p.c += 1;
    p.got100 = true;
  } else if (p.matchRuns >= 50 && !p.got50) {
    p.f += 1;
    p.got50 = true;
  }

  draw(true, targetName);
}

// Start real-time simulation updates every 3.5 seconds
setInterval(simulateLiveBall, 3500);

draw();
