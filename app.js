// name, team, matches, runs, avg, strike rate, 100s, 50s
const ODI=[["Virat Kohli","IND",295,14181,58.2,93.5,51,74],["Rohit Sharma","IND",273,11168,48.8,92.8,32,58],["MS Dhoni","IND",350,10773,50.6,87.6,10,73],["Sachin Tendulkar","IND",463,18426,44.8,86.2,49,96],["Babar Azam","PAK",128,5957,56.7,88.9,19,35],["Steve Smith","AUS",170,5800,43.3,87.2,12,35],["Ricky Ponting","AUS",375,13704,42.0,80.4,30,82],["Kane Williamson","NZ",170,7000,48.4,81.4,15,45],["Joe Root","ENG",171,6800,50.2,87.0,16,40],["AB de Villiers","SA",228,9577,53.5,101.1,25,53],["Kumar Sangakkara","SL",404,14234,42.0,78.9,25,93],["Jacques Kallis","SA",328,11579,44.4,72.9,17,86]];
ODI.push(["Shikhar Dhawan","IND",167,6793,44.1,91.4,17,39],["David Warner","AUS",161,6932,45.0,97.3,22,33],["Quinton de Kock","SA",155,6770,45.7,96.1,21,30],["Jos Buttler","ENG",181,5022,40.1,118.0,11,26],["Shubman Gill","IND",55,2775,59.0,99.0,8,15]);
const TEST=[["Sachin Tendulkar","IND",200,15921,53.8,54.0,51,68],["Virat Kohli","IND",123,9230,46.9,55.6,30,31],["Rahul Dravid","IND",164,13288,52.3,42.5,36,63],["Joe Root","ENG",150,12972,50.9,56.5,36,65],["Alastair Cook","ENG",161,12472,45.4,46.9,33,57],["Steve Smith","AUS",109,10271,56.0,54.0,36,41],["Ricky Ponting","AUS",168,13378,51.9,58.7,41,62],["Kane Williamson","NZ",105,9276,54.9,51.0,33,37],["Jacques Kallis","SA",166,13289,55.4,45.0,45,58],["Kumar Sangakkara","SL",134,12400,57.4,53.9,38,52],["Brian Lara","WI",131,11953,52.9,60.5,34,48]];
const T20=[["Virat Kohli","IND",125,4188,48.7,137.0,1,38],["Rohit Sharma","IND",159,4231,32.1,140.9,5,32],["Suryakumar Yadav","IND",80,2600,37.5,167.0,4,21],["Babar Azam","PAK",128,4223,39.8,129.2,3,36],["Jos Buttler","ENG",124,3200,34.0,144.0,1,25],["David Warner","AUS",110,3277,33.4,142.5,1,28],["Glenn Maxwell","AUS",115,2500,29.0,155.0,5,14],["Martin Guptill","NZ",122,3531,31.6,135.7,2,20]];
const mkD=a=>a.map(r=>({name:r[0],team:r[1],m:r[2],runs:r[3],avg:r[4],sr:r[5],c:r[6],f:r[7]}));
const SETS={ODI:mkD(ODI),Test:mkD(TEST),T20I:mkD(T20)};
let D=SETS.ODI,FMT="ODI";
const COLS=[["name","Player"],["team","Team"],["m","Mat"],["runs","Runs"],["avg","Avg"],["sr","SR"],["c","100s"],["f","50s"]];
const M=[["runs","Runs"],["avg","Average"],["sr","Strike rate"],["c","Hundreds"],["f","Fifties"],["m","Matches"]];
const $=id=>document.getElementById(id);
let A=D[0].name,B=D[3].name,sk="runs",sd=-1,charts={};
const get=n=>D.find(p=>p.name===n);
const fmt=(k,v)=>k==="runs"||k==="m"?v.toLocaleString("en-IN"):(k==="avg"||k==="sr")?v.toFixed(1):v;
const col=n=>getComputedStyle(document.documentElement).getPropertyValue(n).trim();
try{const s=localStorage.getItem("crease-theme");if(s)document.documentElement.dataset.theme=s}catch(e){}
$("theme").onclick=()=>{const d=document.documentElement,dark=getComputedStyle(d).getPropertyValue("--bg").trim()==="#0d1a14";d.dataset.theme=dark?"light":"dark";try{localStorage.setItem("crease-theme",d.dataset.theme)}catch(e){}draw()};
// selects
function fill(){["pa","pb"].forEach(i=>{$(i).innerHTML="";D.forEach(p=>{const o=document.createElement("option");o.value=o.textContent=p.name;$(i).append(o)})});$("team").innerHTML='<option value="">All teams</option>';[...new Set(D.map(p=>p.team))].sort().forEach(t=>{const o=document.createElement("option");o.value=o.textContent=t;$("team").append(o)})}
fill();
$("pa").onchange=e=>{A=e.target.value;draw()};$("pb").onchange=e=>{B=e.target.value;draw()};
["q","team","avg","h"].forEach(i=>$(i).oninput=draw);
$("reset").onclick=()=>{$("q").value="";$("team").value="";$("avg").value=0;$("h").value=0;draw()};
$("th").innerHTML=COLS.map(c=>`<th data-k="${c[0]}">${c[1]}</th>`).join("");
$("th").onclick=e=>{const k=e.target.dataset.k;if(!k)return;sd=sk===k?-sd:(k==="name"||k==="team"?1:-1);sk=k;draw()};
function filtered(){const q=$("q").value.toLowerCase(),t=$("team").value,a=+$("avg").value,h=+$("h").value;
return D.filter(p=>p.name.toLowerCase().includes(q)&&(!t||p.team===t)&&p.avg>=a&&p.c>=h).sort((x,y)=>(x[sk]>y[sk]?1:-1)*sd)}
function mk(id,cfg){if(charts[id])charts[id].destroy();charts[id]=new Chart($(id),cfg)}
function draw(){
 $("pa").value=A;$("pb").value=B;$("avgv").textContent=$("avg").value;$("hv").textContent=$("h").value;
 const a=get(A),b=get(B),ca=col("--a"),cb=col("--b"),ink=col("--ink"),grid="rgba(128,128,128,.25)";
 Chart.defaults.color=ink;Chart.defaults.font.family="'DM Sans',sans-serif";
 // head to head
 let wa=0,wb=0;
 $("cmp").innerHTML=M.map(([k,l])=>{const mx=Math.max(a[k],b[k]),w=a[k]>b[k]?"a":a[k]<b[k]?"b":"";if(w==="a")wa++;if(w==="b")wb++;
  return `<div class="row"><div class="side l ${w==="a"?"win":""}"><div class="bar" style="width:${a[k]/mx*100}%;max-width:calc(100% - 60px)"></div><b>${fmt(k,a[k])}</b></div><div class="lab">${l}</div><div class="side r ${w==="b"?"win":""}"><div class="bar" style="width:${b[k]/mx*100}%;max-width:calc(100% - 60px)"></div><b>${fmt(k,b[k])}</b></div></div>`}).join("");
 $("verdict").innerHTML=A===B?"Pick two different players.":wa===wb?`${a.name} and ${b.name} are level.<small>${wa} categories each.</small>`:`${wa>wb?a.name:b.name} takes it, ${Math.max(wa,wb)}–${Math.min(wa,wb)}.<small>Wins are counted across ${M.length} categories. Strike rate and average say more about quality than raw runs.</small>`;
 const mxs=M.map(([k])=>Math.max(...D.map(p=>p[k])));
 const rd=p=>M.map(([k],i)=>+(p[k]/mxs[i]*100).toFixed(1));
 mk("radar",{type:"radar",data:{labels:M.map(m=>m[1]),datasets:[{label:a.name,data:rd(a),borderColor:ca,backgroundColor:ca+"33"},{label:b.name,data:rd(b),borderColor:cb,backgroundColor:cb+"33"}]},options:{maintainAspectRatio:false,scales:{r:{min:0,max:100,ticks:{display:false},grid:{color:grid},angleLines:{color:grid},pointLabels:{color:ink}}},plugins:{title:{display:true,text:"Profile (100 = best in dataset)",color:ink}}}});
 const f=filtered();
 mk("bar",{type:"bar",data:{labels:f.slice(0,8).map(p=>p.name.split(" ").slice(-1)[0]),datasets:[{label:"Runs",data:f.slice(0,8).map(p=>p.runs),backgroundColor:f.slice(0,8).map(p=>p.name===A?ca:p.name===B?cb:"#8aa097")}]},options:{maintainAspectRatio:false,indexAxis:"y",plugins:{legend:{display:false},title:{display:true,text:"Career runs (filtered, A and B highlighted)",color:ink}},scales:{x:{grid:{color:grid}},y:{grid:{display:false}}}}});
 mk("scatter",{type:"bubble",data:{datasets:[{label:"Players",data:f.map(p=>({x:p.avg,y:p.sr,r:4+p.c/4,n:p.name})),backgroundColor:f.map(p=>p.name===A?ca:p.name===B?cb:"#8aa097aa")}]},options:{maintainAspectRatio:false,plugins:{legend:{display:false},tooltip:{callbacks:{label:c=>`${c.raw.n}: avg ${c.raw.x}, SR ${c.raw.y}`}}},scales:{x:{title:{display:true,text:"Batting average"},min:Math.floor(Math.min(...f.map(p=>p.avg),99)-3),grid:{color:grid}},y:{title:{display:true,text:"Strike rate"},min:Math.floor(Math.min(...f.map(p=>p.sr),999)-5),grid:{color:grid}}}}});
 // table
 document.querySelectorAll("#th th").forEach(t=>{t.classList.toggle("s",t.dataset.k===sk);t.textContent=COLS.find(c=>c[0]===t.dataset.k)[1]+(t.dataset.k===sk?(sd>0?" ▲":" ▼"):"")});
 $("tb").innerHTML=f.length?f.map(p=>`<tr data-n="${p.name}" class="${p.name===A?"pa":p.name===B?"pb":""}" tabindex="0"><td>${p.name}</td><td><span class="tag">${p.team}</span></td><td>${p.m}</td><td>${fmt("runs",p.runs)}</td><td>${p.avg.toFixed(1)}</td><td>${p.sr.toFixed(1)}</td><td>${p.c}</td><td>${p.f}</td></tr>`).join(""):`<tr><td colspan="8" class="empty">No players match. Lower the minimum average or hundreds, or reset the filters.</td></tr>`;
}
let flip=false;
$("tb").onclick=e=>{const r=e.target.closest("tr");if(!r||!r.dataset.n)return;if(flip)B=r.dataset.n;else A=r.dataset.n;flip=!flip;draw()};
$("csv").onclick=()=>{const f=filtered(),t=[COLS.map(c=>c[1]).join(",")].concat(f.map(p=>COLS.map(c=>p[c[0]]).join(","))).join("\n");const u=URL.createObjectURL(new Blob([t],{type:"text/csv"})),a=document.createElement("a");a.href=u;a.download="players.csv";a.click()};
function setFmt(f){FMT=f;D=SETS[f];fill();const ok=n=>D.some(p=>p.name===n);if(!ok(A)||!ok(B)||A===B){A=D[0].name;B=D[1].name}sk="runs";sd=-1;document.querySelectorAll("#fmt button").forEach(b=>b.setAttribute("aria-pressed",b.dataset.f===f));$("reset").click()}
$("fmt").onclick=e=>{const f=e.target.dataset.f;if(f)setFmt(f)};
draw();
