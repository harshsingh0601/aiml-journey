const fs = require('fs'), vm = require('vm');
const html = fs.readFileSync('aiml-dashboard.html','utf8');
const m = html.match(/<script>\n([\s\S]*?)<\/script>\s*<\/body>/);
if(!m){console.error('could not extract script');process.exit(1);}
const code = m[1];

const els = {};
function mkEl(id){
  return els[id] = els[id] || {
    id, innerHTML:'', textContent:'', style:{},
    insertAdjacentHTML(p,h){ this.innerHTML += h; },
    querySelector(){ return mkEl(id+' tbody'); }
  };
}
class Chart { constructor(ctx,cfg){ Chart.made.push(cfg.type); } }
Chart.made = [];
const sandbox = {
  document: {
    getElementById: mkEl,
    querySelector: (s)=>mkEl(s),
  },
  Chart, console,
};
try {
  vm.createContext(sandbox);
  vm.runInContext(code, sandbox, {timeout:5000});
} catch(e){ console.error('RUNTIME ERROR:', e.message); process.exit(1); }

const show = id => console.log('  ' + id.padEnd(18) + ' : ' + (els[id] ? (els[id].innerHTML || els[id].textContent || '(empty)').replace(/<[^>]+>/g,'').replace(/\s+/g,' ').trim().slice(0,150) : 'MISSING'));
console.log('--- charts rendered:', Chart.made.join(', '));
['hero-sub','lbl-overall','stat-overall','stat-days','stat-streak','stat-readiness','tl-start','tl-end','today-card','when-m1','when-m2','curriculum-note','integrity'].forEach(show);
console.log('--- timeline marker html ---');
console.log('  ' + (els['tl-track'] ? els['tl-track'].innerHTML.replace(/\s+/g,' ') : 'MISSING'));
console.log('  today left =', els['tl-today'] && els['tl-today'].style.left, '| fill width =', els['tl-fill'] && els['tl-fill'].style.width);
console.log('--- quiz rows ---');
console.log('  ' + (els['#quiz-table tbody'] ? els['#quiz-table tbody'].innerHTML.replace(/<[^>]+>/g,' | ').replace(/\s+/g,' ') : 'MISSING'));
