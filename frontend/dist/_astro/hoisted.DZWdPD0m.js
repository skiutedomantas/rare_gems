import"./hoisted.DTApEplV.js";const n=document.querySelector(".navigation-buttons"),e=document.getElementById("previous-button"),o=document.getElementById("next-button"),t=parseInt(n.dataset.currentId),d=parseInt(n.dataset.minId),a=parseInt(n.dataset.maxId);e.addEventListener("click",()=>{t>d&&(window.location.href=`/detailed/${t-1}`)});o.addEventListener("click",()=>{t<a&&(window.location.href=`/detailed/${t+1}`)});