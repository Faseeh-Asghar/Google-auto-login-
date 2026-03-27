const q=x=>document.querySelector(x);
const g_e=q('#g_e'),g_p=q('#g_p'),sv=q('#save'),sts=q('#s');
chrome.storage.local.get(['c'],r=>{if(r.c){g_e.value=r.c.g_e||'';g_p.value=r.c.g_p||'';}});
sv.addEventListener('click',()=>{const c={g_e:g_e.value,g_p:g_p.value};chrome.storage.local.set({c},()=>{sts.style.display='block';setTimeout(()=>sts.style.display='none',2e3);});});
