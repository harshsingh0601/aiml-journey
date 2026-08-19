const fs=require('fs'),vm=require('vm');
const html=fs.readFileSync('aiml-dashboard.html','utf8');
const code=html.match(/<script>\n([\s\S]*?)<\/script>\s*<\/body>/)[1];

function run(mutate,label){
  const els={};
  const mkEl=id=>els[id]=els[id]||{id,innerHTML:'',textContent:'',style:{},insertAdjacentHTML(p,h){this.innerHTML+=h;},querySelector(){return mkEl(id+' tbody');}};
  class Chart{constructor(){}} Chart.made=[];
  // inject a mutation of STATE right after it is declared
  const patched=code.replace(/^};/m,'};\n('+mutate.toString()+')(STATE);');
  const sb={document:{getElementById:mkEl,querySelector:s=>mkEl(s)},Chart,console};
  try{vm.createContext(sb);vm.runInContext(patched,sb,{timeout:5000});}
  catch(e){console.log(label+' -> RUNTIME ERROR: '+e.message);return;}
  const t=els['integrity']?els['integrity'].innerHTML.replace(/<[^>]+>/g,' ').replace(/\s+/g,' ').trim():'(no banner)';
  console.log(label+' ->\n   '+t+'\n');
}

run(s=>{}, 'A. clean state (expect no banner)');
run(s=>{s.skillAxes.python.current=95;}, 'B. axis above target');
run(s=>{s.quizHistory[0].score=60;}, 'C. score above max');
run(s=>{s.streak.current=99;}, 'D. streak > longest');
run(s=>{s.phases[0].progress=150;}, 'E. progress > 100');
run(s=>{s.meta.lastUpdated='2026-08-01';}, 'F. stale state');
run(s=>{delete s.quizHistory[0].max;}, 'G. missing max field');
