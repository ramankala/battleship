(()=>{"use strict";const e=e=>{const t=[];return{ship:t,length:e,hit:e=>t[e]="hit",isSunk:()=>{let i=0,r=!1;return t.forEach((function(e){"hit"===e&&(i+=1)})),r=i===e,r}}},t=(t,i=!1)=>{let r=e(5),a=e(4),o=e(3),l=e(3),d=e(2),n={name:t,isActive:i};return{get name(){return n.name},get isActive(){return n.isActive},toggle(){n.isActive=!n.isActive},board:(()=>{let e=[["","","","","","","","","",""],["","","","","","","","","",""],["","","","","","","","","",""],["","","","","","","","","",""],["","","","","","","","","",""],["","","","","","","","","",""],["","","","","","","","","",""],["","","","","","","","","",""],["","","","","","","","","",""],["","","","","","","","","",""]];for(let t=0;t<10;t++)for(let i=0;i<10;i++)e[t][i]={hasShip:!1,isShot:!1,shipLength:0,shipType:"n/a",xPoint:0,yPoint:0};return{gameBoard:e,placeShip:(t,i,r,a)=>{for(let o=0;o<r;o++)e[t][i].hasShip=!0,e[t][i].shipLength=r,e[t][i].shipType=a,e[t][i].xPoint=t,e[t][i].yPoint=i,i+=1;return e},receiveAttack:(t,i)=>!0===e[t][i].hasShip?(e[t][i].isShot=!0,console.log(e),"Hit"):(e[t][i].isShot=!0,console.log(e),e),allShipsSunk:e=>e.filter((e=>e.isSunk())).length===e.length}})(),ships:[r,a,o,l,d],enemyMove:()=>[Math.floor(10*Math.random()),Math.floor(10*Math.random())]}},i=(e,t)=>{let i=document.querySelector(`#container${t}`),r=document.createElement("div");r.setAttribute("id","row1");let a=document.createElement("div");a.setAttribute("id","row2");let o=document.createElement("div");o.setAttribute("id","row3");let l=document.createElement("div");l.setAttribute("id","row4");let d=document.createElement("div");d.setAttribute("id","row5");let n=document.createElement("div");n.setAttribute("id","row6");let h=document.createElement("div");h.setAttribute("id","row7");let s=document.createElement("div");s.setAttribute("id","row8");let p=document.createElement("div");p.setAttribute("id","row9");let c=document.createElement("div");c.setAttribute("id","row10"),e.forEach((function(e,u){e.forEach((function(e,g){let b=document.createElement("div");b.setAttribute("id",`squareDiv${u}${g}`),b.setAttribute("data-y-coord",u),b.setAttribute("data-x-coord",g),b.setAttribute("data-has-ship",e.hasShip),b.setAttribute("data-is-shot",e.isShot),b.classList.add(`atkDiv${t}`),b.textContent=e.hasShip;for(let e=0;e<10;e++)b.getAttribute("id")==`squareDiv0${e}`?r.appendChild(b):b.getAttribute("id")==`squareDiv1${e}`?a.appendChild(b):b.getAttribute("id")==`squareDiv2${e}`?o.appendChild(b):b.getAttribute("id")==`squareDiv3${e}`?l.appendChild(b):b.getAttribute("id")==`squareDiv4${e}`?d.appendChild(b):b.getAttribute("id")==`squareDiv5${e}`?n.appendChild(b):b.getAttribute("id")==`squareDiv6${e}`?h.appendChild(b):b.getAttribute("id")==`squareDiv7${e}`?s.appendChild(b):b.getAttribute("id")==`squareDiv8${e}`?p.appendChild(b):b.getAttribute("id")==`squareDiv9${e}`&&c.appendChild(b);i.appendChild(r),i.appendChild(a),i.appendChild(o),i.appendChild(l),i.appendChild(d),i.appendChild(n),i.appendChild(h),i.appendChild(s),i.appendChild(p),i.appendChild(c)}))}))},r=(e,t,i,r)=>{let a=e.board,o=e.ships,l=a.gameBoard[i][r].isShot,d=a.gameBoard[i][r].hasShip,n=a.gameBoard[i][r].shipLength,h=a.gameBoard[i][r].shipType,s=""+i+r;console.log(s);let p=document.getElementsByClassName("atkDiv2")[s];console.log(p);let c=0,u=0,g=0,b=0,m=0;!0===e.isActive&&!1===l&&(p.style.backgroundColor="true"===d?"red":"grey",a.receiveAttack(i,r),"Carrier"==h?(o.filter((e=>e.length==n))[0].hit(c),c+=1):"Battleship"==h?(o.filter((e=>e.length==n))[0].hit(u),u+=1):"Destroyer"==h?(o.filter((e=>e.length==n))[0].hit(g),g+=1):"Submarine"==h?(o.filter((e=>e.length==n))[1].hit(b),b+=1):"Patrolboat"==h&&(o.filter((e=>e.length==n))[0].hit(m),m+=1),e.toggle(),t.toggle(),console.log(a))};(()=>{const e=[t("player1",!0),t("computer",!1)];e[0].board.placeShip(2,2,5,"Carrier"),e[0].board.placeShip(8,0,4,"Battleship"),e[0].board.placeShip(6,7,3,"Destroyer"),e[0].board.placeShip(5,1,3,"Submarine"),e[0].board.placeShip(1,7,2,"Patrolboat"),console.log(e[0].board.gameBoard),i(e[0].board.gameBoard,1),e[1].board.placeShip(8,1,5,"Carrier"),e[1].board.placeShip(3,5,4,"Battleship"),e[1].board.placeShip(6,3,3,"Destroyer"),e[1].board.placeShip(1,1,3,"Submarine"),e[1].board.placeShip(0,6,2,"Patrolboat"),console.log(e[1].board.gameBoard),i(e[1].board.gameBoard,2),((e,t,i)=>{let a,o,l,d,n,h=e.board,s=e.ships,p=document.getElementsByClassName("atkDiv1"),c=0,u=0,g=0,b=0,m=0;for(let i=0;i<p.length;i++)p[i].addEventListener("click",(function(i){if(!0===e.isActive&&(o=i.target.getAttribute("data-y-coord"),l=i.target.getAttribute("data-y-coord"),a=h.gameBoard[l][o].isShot,console.log(a),d=h.gameBoard[l][o].shipLength,n=h.gameBoard[l][o].shipType,!1===a)){"true"===i.target.getAttribute("data-has-ship")?i.target.style.backgroundColor="red":i.target.style.backgroundColor="grey",h.receiveAttack(l,o),"Carrier"==n?(s.filter((e=>e.length==d))[0].hit(c),c+=1):"Battleship"==n?(s.filter((e=>e.length==d))[0].hit(u),u+=1):"Destroyer"==n?(s.filter((e=>e.length==d))[0].hit(g),g+=1):"Submarine"==n?(s.filter((e=>e.length==d))[1].hit(b),b+=1):"Patrolboat"==n&&(s.filter((e=>e.length==d))[0].hit(m),m+=1),e.toggle(),t.toggle();let a=e.enemyMove();console.log(a),r(t,e,a[0],a[1]),console.log(h.gameBoard[l][o])}}))})(e[0],e[1])})()})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LEVBQVksSUFDdkR0RCxRQUFRQyxJQUFJZCxFQUFVQSxVQUFVTyxHQUFRQyxTQzFHeEQ0RCxDQUFZTixFQUFVLEdBQUlBLEVBQVUsS0MzQnhDTyxJIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9nYW1lQm9hcmRGYWN0b3J5LmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvc2hpcEZhY3RvcnkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9wbGF5ZXJGYWN0b3J5LmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvcmVuZGVyLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvZ2FtZS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHNoaXBGYWN0b3J5IH0gZnJvbSAnLi9zaGlwRmFjdG9yeSc7XG5cbmNvbnN0IGdhbWVCb2FyZEZhY3RvcnkgPSAoKSA9PiB7XG4gICAgbGV0IGdhbWVCb2FyZCA9IFtcbiAgICAgICAgKFtcIlwiLCBcIlwiLCBcIlwiLCBcIlwiLCBcIlwiLCBcIlwiLCBcIlwiLCBcIlwiLCBcIlwiLCBcIlwiXSksXG4gICAgICAgIChbXCJcIiwgXCJcIiwgXCJcIiwgXCJcIiwgXCJcIiwgXCJcIiwgXCJcIiwgXCJcIiwgXCJcIiwgXCJcIl0pLFxuICAgICAgICAoW1wiXCIsIFwiXCIsIFwiXCIsIFwiXCIsIFwiXCIsIFwiXCIsIFwiXCIsIFwiXCIsIFwiXCIsIFwiXCJdKSxcbiAgICAgICAgKFtcIlwiLCBcIlwiLCBcIlwiLCBcIlwiLCBcIlwiLCBcIlwiLCBcIlwiLCBcIlwiLCBcIlwiLCBcIlwiXSksXG4gICAgICAgIChbXCJcIiwgXCJcIiwgXCJcIiwgXCJcIiwgXCJcIiwgXCJcIiwgXCJcIiwgXCJcIiwgXCJcIiwgXCJcIl0pLFxuICAgICAgICAoW1wiXCIsIFwiXCIsIFwiXCIsIFwiXCIsIFwiXCIsIFwiXCIsIFwiXCIsIFwiXCIsIFwiXCIsIFwiXCJdKSxcbiAgICAgICAgKFtcIlwiLCBcIlwiLCBcIlwiLCBcIlwiLCBcIlwiLCBcIlwiLCBcIlwiLCBcIlwiLCBcIlwiLCBcIlwiXSksXG4gICAgICAgIChbXCJcIiwgXCJcIiwgXCJcIiwgXCJcIiwgXCJcIiwgXCJcIiwgXCJcIiwgXCJcIiwgXCJcIiwgXCJcIl0pLFxuICAgICAgICAoW1wiXCIsIFwiXCIsIFwiXCIsIFwiXCIsIFwiXCIsIFwiXCIsIFwiXCIsIFwiXCIsIFwiXCIsIFwiXCJdKSxcbiAgICAgICAgKFtcIlwiLCBcIlwiLCBcIlwiLCBcIlwiLCBcIlwiLCBcIlwiLCBcIlwiLCBcIlwiLCBcIlwiLCBcIlwiXSksXG4gICAgXTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDEwOyBpKyspe1xuICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IDEwOyBqKyspe1xuICAgICAgICAgICAgZ2FtZUJvYXJkW2ldW2pdID0gKHtoYXNTaGlwOiBmYWxzZSwgaXNTaG90OiBmYWxzZSwgc2hpcExlbmd0aDogMCwgc2hpcFR5cGU6ICduL2EnLCB4UG9pbnQ6IDAsIHlQb2ludDogMH0pO1xuICAgICAgICB9O1xuICAgIH07XG5cblxuICAgIGNvbnN0IHBsYWNlU2hpcCA9ICh4LCB5LCBzaGlwTGVuZ3RoLCBzaGlwVHlwZSkgPT4ge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNoaXBMZW5ndGg7IGkrKyl7XG4gICAgICAgICAgICBnYW1lQm9hcmRbeF1beV0uaGFzU2hpcCA9IHRydWU7XG4gICAgICAgICAgICBnYW1lQm9hcmRbeF1beV0uc2hpcExlbmd0aCA9IHNoaXBMZW5ndGg7XG4gICAgICAgICAgICBnYW1lQm9hcmRbeF1beV0uc2hpcFR5cGUgPSBzaGlwVHlwZTtcbiAgICAgICAgICAgIGdhbWVCb2FyZFt4XVt5XS54UG9pbnQgPSB4O1xuICAgICAgICAgICAgZ2FtZUJvYXJkW3hdW3ldLnlQb2ludCA9IHk7XG4gICAgICAgICAgICB5ICs9IDE7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGdhbWVCb2FyZDtcbiAgICB9XG5cbiAgICBjb25zdCByZWNlaXZlQXR0YWNrID0gKHgsIHkpID0+IHtcbiAgICAgICAgaWYgKGdhbWVCb2FyZFt4XVt5XS5oYXNTaGlwID09PSB0cnVlKXtcbiAgICAgICAgICAgIGdhbWVCb2FyZFt4XVt5XS5pc1Nob3QgPSB0cnVlO1xuICAgICAgICAgICAgY29uc29sZS5sb2coZ2FtZUJvYXJkKTtcbiAgICAgICAgICAgIHJldHVybiAnSGl0JztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGdhbWVCb2FyZFt4XVt5XS5pc1Nob3QgPSB0cnVlO1xuICAgICAgICAgICAgY29uc29sZS5sb2coZ2FtZUJvYXJkKTtcbiAgICAgICAgICAgIHJldHVybiBnYW1lQm9hcmQ7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgY29uc3QgYWxsU2hpcHNTdW5rID0gKGFycikgPT4ge1xuICAgICAgICBjb25zdCBzdW5rZW5TaGlwcyA9IGFyci5maWx0ZXIoc2hpcHMgPT4gc2hpcHMuaXNTdW5rKCkpO1xuICAgICAgICBpZiAoc3Vua2VuU2hpcHMubGVuZ3RoID09PSBhcnIubGVuZ3RoKXtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG5cbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgICBnYW1lQm9hcmQsXG4gICAgICAgIHBsYWNlU2hpcCxcbiAgICAgICAgcmVjZWl2ZUF0dGFjayxcbiAgICAgICAgYWxsU2hpcHNTdW5rLFxuICAgIH1cbn07XG5cbmV4cG9ydCB7IGdhbWVCb2FyZEZhY3RvcnkgfTsiLCJcbmNvbnN0IHNoaXBGYWN0b3J5ID0gKGxlbmd0aCkgPT4ge1xuICAgIGNvbnN0IHNoaXAgPSBbXTtcblxuICAgIGNvbnN0IGhpdCA9IChwb3MpID0+IHNoaXBbcG9zXSA9ICdoaXQnO1xuXG4gICAgY29uc3QgaXNTdW5rID0gKCkgPT4ge1xuICAgICAgICBsZXQgY291bnQgPSAwO1xuICAgICAgICBsZXQgc3VuayA9IGZhbHNlO1xuXG4gICAgICAgIHNoaXAuZm9yRWFjaChmdW5jdGlvbihpdGVtKXtcbiAgICAgICAgICAgIGlmIChpdGVtID09PSAnaGl0Jyl7XG4gICAgICAgICAgICAgICAgY291bnQgKz0gMTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIGlmIChjb3VudCA9PT0gbGVuZ3RoKSB7XG4gICAgICAgICAgICBzdW5rID0gdHJ1ZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHN1bmsgPSBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBzdW5rO1xuICAgIH07XG5cbiAgICByZXR1cm4ge1xuICAgICAgICBzaGlwLFxuICAgICAgICBsZW5ndGgsXG4gICAgICAgIGhpdCxcbiAgICAgICAgaXNTdW5rLFxuICAgIH1cbn07XG5cbmV4cG9ydCB7IHNoaXBGYWN0b3J5IH07IiwiaW1wb3J0IHsgZ2FtZUJvYXJkRmFjdG9yeSB9IGZyb20gJy4vZ2FtZUJvYXJkRmFjdG9yeSc7XG5pbXBvcnQgeyBzaGlwRmFjdG9yeSB9IGZyb20gJy4vc2hpcEZhY3RvcnknO1xuXG5jb25zdCBQbGF5ZXIgPSAobmFtZSwgaXNBY3RpdmUgPSBmYWxzZSkgPT4ge1xuXG4gICAgbGV0IGNhcnJpZXIgPSBzaGlwRmFjdG9yeSg1KTtcbiAgICBsZXQgYmF0dGxlc2hpcCA9IHNoaXBGYWN0b3J5KDQpO1xuICAgIGxldCBkZXN0cm95ZXIgPSBzaGlwRmFjdG9yeSgzKTtcbiAgICBsZXQgc3VibWFyaW5lID0gc2hpcEZhY3RvcnkoMyk7XG4gICAgbGV0IHBhdHJvbEJvYXQgPSBzaGlwRmFjdG9yeSgyKTtcbiAgICBcbiAgICBsZXQgc3RhdGUgPSB7XG4gICAgICAgIG5hbWUsXG4gICAgICAgIGlzQWN0aXZlLFxuICAgIH1cblxuICAgIGxldCBib2FyZCA9IGdhbWVCb2FyZEZhY3RvcnkoKTtcblxuICAgIGxldCBzaGlwcyA9IFtjYXJyaWVyLCBiYXR0bGVzaGlwLCBkZXN0cm95ZXIsIHN1Ym1hcmluZSwgcGF0cm9sQm9hdF07XG5cbiAgICBjb25zdCBlbmVteU1vdmUgPSAoKSA9PiB7XG4gICAgICAgIGxldCB4ID0gTWF0aC5mbG9vcigoTWF0aC5yYW5kb20oKSAqIDEwKSk7XG4gICAgICAgIGxldCB5ID0gTWF0aC5mbG9vcigoTWF0aC5yYW5kb20oKSAqIDEwKSk7XG5cbiAgICAgICAgcmV0dXJuIFt4LCB5XTtcbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgICBnZXQgbmFtZSgpe3JldHVybiBzdGF0ZS5uYW1lO30sXG4gICAgICAgIGdldCBpc0FjdGl2ZSgpe3JldHVybiBzdGF0ZS5pc0FjdGl2ZTt9LFxuICAgICAgICB0b2dnbGUoKXsgc3RhdGUuaXNBY3RpdmUgPSAhc3RhdGUuaXNBY3RpdmU7fSxcbiAgICAgICAgYm9hcmQsXG4gICAgICAgIHNoaXBzLFxuICAgICAgICBlbmVteU1vdmUsXG4gICAgfVxufTtcblxuZXhwb3J0IHsgUGxheWVyIH07IiwiY29uc3QgcmVuZGVyR0JvYXJkID0gKGdhbWVCb2FyZCwgbnVtKSA9PiB7XG4gICAgbGV0IGNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCNjb250YWluZXIke251bX1gKTtcbiAgICBsZXQgcm93MSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHJvdzEuc2V0QXR0cmlidXRlKCdpZCcsICdyb3cxJyk7XG4gICAgbGV0IHJvdzIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICByb3cyLnNldEF0dHJpYnV0ZSgnaWQnLCAncm93MicpO1xuICAgIGxldCByb3czID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgcm93My5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3JvdzMnKTtcbiAgICBsZXQgcm93NCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHJvdzQuc2V0QXR0cmlidXRlKCdpZCcsICdyb3c0Jyk7XG4gICAgbGV0IHJvdzUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICByb3c1LnNldEF0dHJpYnV0ZSgnaWQnLCAncm93NScpO1xuICAgIGxldCByb3c2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgcm93Ni5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3JvdzYnKTtcbiAgICBsZXQgcm93NyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHJvdzcuc2V0QXR0cmlidXRlKCdpZCcsICdyb3c3Jyk7XG4gICAgbGV0IHJvdzggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICByb3c4LnNldEF0dHJpYnV0ZSgnaWQnLCAncm93OCcpO1xuICAgIGxldCByb3c5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgcm93OS5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3JvdzknKTtcbiAgICBsZXQgcm93MTAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICByb3cxMC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3JvdzEwJyk7XG5cbiAgICBnYW1lQm9hcmQuZm9yRWFjaChmdW5jdGlvbihpdGVtLCBpbmRleCkge1xuICAgICAgICBpdGVtLmZvckVhY2goZnVuY3Rpb24oc3ViaXRlbSwgc3ViaW5kZXgpIHtcbiAgICAgICAgICAgIGxldCBzcXVhcmVEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIHNxdWFyZURpdi5zZXRBdHRyaWJ1dGUoJ2lkJywgYHNxdWFyZURpdiR7aW5kZXh9JHtzdWJpbmRleH1gKTtcbiAgICAgICAgICAgIHNxdWFyZURpdi5zZXRBdHRyaWJ1dGUoJ2RhdGEteS1jb29yZCcsIGluZGV4KTtcbiAgICAgICAgICAgIHNxdWFyZURpdi5zZXRBdHRyaWJ1dGUoJ2RhdGEteC1jb29yZCcsIHN1YmluZGV4KTtcbiAgICAgICAgICAgIHNxdWFyZURpdi5zZXRBdHRyaWJ1dGUoJ2RhdGEtaGFzLXNoaXAnLCBzdWJpdGVtLmhhc1NoaXApO1xuICAgICAgICAgICAgc3F1YXJlRGl2LnNldEF0dHJpYnV0ZSgnZGF0YS1pcy1zaG90Jywgc3ViaXRlbS5pc1Nob3QpO1xuICAgICAgICAgICAgc3F1YXJlRGl2LmNsYXNzTGlzdC5hZGQoYGF0a0RpdiR7bnVtfWApO1xuICAgICAgICAgICAgc3F1YXJlRGl2LnRleHRDb250ZW50ID0gc3ViaXRlbS5oYXNTaGlwO1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCAxMDsgaSsrKXtcbiAgICAgICAgICAgICAgICBpZiAoc3F1YXJlRGl2LmdldEF0dHJpYnV0ZSgnaWQnKSA9PSBgc3F1YXJlRGl2MCR7aX1gKXtcbiAgICAgICAgICAgICAgICAgICAgcm93MS5hcHBlbmRDaGlsZChzcXVhcmVEaXYpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoc3F1YXJlRGl2LmdldEF0dHJpYnV0ZSgnaWQnKSA9PSBgc3F1YXJlRGl2MSR7aX1gKXtcbiAgICAgICAgICAgICAgICAgICAgcm93Mi5hcHBlbmRDaGlsZChzcXVhcmVEaXYpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoc3F1YXJlRGl2LmdldEF0dHJpYnV0ZSgnaWQnKSA9PSBgc3F1YXJlRGl2MiR7aX1gKXtcbiAgICAgICAgICAgICAgICAgICAgcm93My5hcHBlbmRDaGlsZChzcXVhcmVEaXYpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoc3F1YXJlRGl2LmdldEF0dHJpYnV0ZSgnaWQnKSA9PSBgc3F1YXJlRGl2MyR7aX1gKXtcbiAgICAgICAgICAgICAgICAgICAgcm93NC5hcHBlbmRDaGlsZChzcXVhcmVEaXYpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoc3F1YXJlRGl2LmdldEF0dHJpYnV0ZSgnaWQnKSA9PSBgc3F1YXJlRGl2NCR7aX1gKXtcbiAgICAgICAgICAgICAgICAgICAgcm93NS5hcHBlbmRDaGlsZChzcXVhcmVEaXYpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoc3F1YXJlRGl2LmdldEF0dHJpYnV0ZSgnaWQnKSA9PSBgc3F1YXJlRGl2NSR7aX1gKXtcbiAgICAgICAgICAgICAgICAgICAgcm93Ni5hcHBlbmRDaGlsZChzcXVhcmVEaXYpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoc3F1YXJlRGl2LmdldEF0dHJpYnV0ZSgnaWQnKSA9PSBgc3F1YXJlRGl2NiR7aX1gKXtcbiAgICAgICAgICAgICAgICAgICAgcm93Ny5hcHBlbmRDaGlsZChzcXVhcmVEaXYpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoc3F1YXJlRGl2LmdldEF0dHJpYnV0ZSgnaWQnKSA9PSBgc3F1YXJlRGl2NyR7aX1gKXtcbiAgICAgICAgICAgICAgICAgICAgcm93OC5hcHBlbmRDaGlsZChzcXVhcmVEaXYpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoc3F1YXJlRGl2LmdldEF0dHJpYnV0ZSgnaWQnKSA9PSBgc3F1YXJlRGl2OCR7aX1gKXtcbiAgICAgICAgICAgICAgICAgICAgcm93OS5hcHBlbmRDaGlsZChzcXVhcmVEaXYpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoc3F1YXJlRGl2LmdldEF0dHJpYnV0ZSgnaWQnKSA9PSBgc3F1YXJlRGl2OSR7aX1gKXtcbiAgICAgICAgICAgICAgICAgICAgcm93MTAuYXBwZW5kQ2hpbGQoc3F1YXJlRGl2KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQocm93MSk7XG4gICAgICAgICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQocm93Mik7XG4gICAgICAgICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQocm93Myk7XG4gICAgICAgICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQocm93NCk7XG4gICAgICAgICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQocm93NSk7XG4gICAgICAgICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQocm93Nik7XG4gICAgICAgICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQocm93Nyk7XG4gICAgICAgICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQocm93OCk7XG4gICAgICAgICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQocm93OSk7XG4gICAgICAgICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQocm93MTApO1xuICAgICAgICB9KTtcbiAgICB9KTtcbn07XG5cbmNvbnN0IGF0a0xpc3RlbmVyID0gKHBsYXllciwgZW5lbXksIG51bSkgPT4ge1xuICAgIGxldCBnYW1lQm9hcmQgPSBwbGF5ZXIuYm9hcmQ7XG4gICAgbGV0IHNoaXBzID0gcGxheWVyLnNoaXBzO1xuICAgIGxldCByZXNwb25zZSA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoYGF0a0RpdiR7bnVtfWApO1xuICAgIGxldCBpc1Nob3Q7XG4gICAgbGV0IHlQb2ludDtcbiAgICBsZXQgeFBvaW50O1xuICAgIGxldCBzaGlwTGVuZ3RoO1xuICAgIGxldCBzaGlwVHlwZTtcbiAgICBsZXQgcG9zNSA9IDA7XG4gICAgbGV0IHBvczQgPSAwO1xuICAgIGxldCBwb3MzID0gMDtcbiAgICBsZXQgcG9zMiA9IDA7XG4gICAgbGV0IHBvczEgPSAwO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCByZXNwb25zZS5sZW5ndGg7IGkrKyl7XG4gICAgICAgIHJlc3BvbnNlW2ldLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oZSkge1xuICAgICAgICAgICAgaWYgKHBsYXllci5pc0FjdGl2ZSA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgIHlQb2ludCA9IGUudGFyZ2V0LmdldEF0dHJpYnV0ZSgnZGF0YS15LWNvb3JkJyk7XG4gICAgICAgICAgICAgICAgeFBvaW50ID0gZS50YXJnZXQuZ2V0QXR0cmlidXRlKCdkYXRhLXktY29vcmQnKTtcbiAgICAgICAgICAgICAgICBpc1Nob3QgPSBnYW1lQm9hcmQuZ2FtZUJvYXJkW3hQb2ludF1beVBvaW50XS5pc1Nob3Q7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coaXNTaG90KTtcbiAgICAgICAgICAgICAgICBzaGlwTGVuZ3RoID0gZ2FtZUJvYXJkLmdhbWVCb2FyZFt4UG9pbnRdW3lQb2ludF0uc2hpcExlbmd0aDtcbiAgICAgICAgICAgICAgICBzaGlwVHlwZSA9IGdhbWVCb2FyZC5nYW1lQm9hcmRbeFBvaW50XVt5UG9pbnRdLnNoaXBUeXBlO1xuXG4gICAgICAgICAgICAgICAgaWYgKGlzU2hvdCA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGUudGFyZ2V0LmdldEF0dHJpYnV0ZSgnZGF0YS1oYXMtc2hpcCcpID09PSAndHJ1ZScpe1xuICAgICAgICAgICAgICAgICAgICAgICAgZS50YXJnZXQuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJ3JlZCc7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBlLnRhcmdldC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnZ3JleSc7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZ2FtZUJvYXJkLnJlY2VpdmVBdHRhY2soeFBvaW50LCB5UG9pbnQpO1xuICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgaWYgKHNoaXBUeXBlID09ICdDYXJyaWVyJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgaGl0U2hpcCA9IHNoaXBzLmZpbHRlcihzaGlwID0+IHNoaXAubGVuZ3RoID09IHNoaXBMZW5ndGgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaGl0U2hpcFswXS5oaXQocG9zNSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBwb3M1ICs9IDE7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoc2hpcFR5cGUgPT0gJ0JhdHRsZXNoaXAnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBoaXRTaGlwID0gc2hpcHMuZmlsdGVyKHNoaXAgPT4gc2hpcC5sZW5ndGggPT0gc2hpcExlbmd0aCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBoaXRTaGlwWzBdLmhpdChwb3M0KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvczQgKz0gMTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChzaGlwVHlwZSA9PSAnRGVzdHJveWVyJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgaGl0U2hpcCA9IHNoaXBzLmZpbHRlcihzaGlwID0+IHNoaXAubGVuZ3RoID09IHNoaXBMZW5ndGgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaGl0U2hpcFswXS5oaXQocG9zMyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgcG9zMyArPSAxO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHNoaXBUeXBlID09ICdTdWJtYXJpbmUnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBoaXRTaGlwID0gc2hpcHMuZmlsdGVyKHNoaXAgPT4gc2hpcC5sZW5ndGggPT0gc2hpcExlbmd0aCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBoaXRTaGlwWzFdLmhpdChwb3MyKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvczIgKz0gMTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChzaGlwVHlwZSA9PSAnUGF0cm9sYm9hdCcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGhpdFNoaXAgPSBzaGlwcy5maWx0ZXIoc2hpcCA9PiBzaGlwLmxlbmd0aCA9PSBzaGlwTGVuZ3RoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGhpdFNoaXBbMF0uaGl0KHBvczEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcG9zMSArPSAxO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHBsYXllci50b2dnbGUoKTtcbiAgICAgICAgICAgICAgICAgICAgZW5lbXkudG9nZ2xlKCk7XG4gICAgICAgICAgICAgICAgICAgIGxldCBjb29yZGluYXRlcyA9IHBsYXllci5lbmVteU1vdmUoKTtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coY29vcmRpbmF0ZXMpO1xuICAgICAgICAgICAgICAgICAgICBlbmVteUF0dGFjayhlbmVteSwgcGxheWVyLCBjb29yZGluYXRlc1swXSwgY29vcmRpbmF0ZXNbMV0pO1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhnYW1lQm9hcmQuZ2FtZUJvYXJkW3hQb2ludF1beVBvaW50XSk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gRG8gbm90aGluZ1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgLy8gRG8gbm90aGluZ1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9O1xufTtcblxuY29uc3QgZW5lbXlBdHRhY2sgPSAocGxheWVyLCBlbmVteSwgeCwgeSkgPT4ge1xuICAgIGxldCBnYW1lQm9hcmQgPSBwbGF5ZXIuYm9hcmQ7XG4gICAgbGV0IHNoaXBzID0gcGxheWVyLnNoaXBzO1xuICAgIGxldCBpc1Nob3QgPSBnYW1lQm9hcmQuZ2FtZUJvYXJkW3hdW3ldLmlzU2hvdDs7XG4gICAgbGV0IGhhc1NoaXAgPSBnYW1lQm9hcmQuZ2FtZUJvYXJkW3hdW3ldLmhhc1NoaXA7XG4gICAgbGV0IHNoaXBMZW5ndGggPSBnYW1lQm9hcmQuZ2FtZUJvYXJkW3hdW3ldLnNoaXBMZW5ndGg7XG4gICAgbGV0IHNoaXBUeXBlID0gZ2FtZUJvYXJkLmdhbWVCb2FyZFt4XVt5XS5zaGlwVHlwZTtcbiAgICBsZXQgcGFuZWwgPSAnJyArIHggKyB5O1xuICAgIGNvbnNvbGUubG9nKHBhbmVsKTtcbiAgICAvLyBsZXQgc3F1YXJlRGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYHNxdWFyZURpdiR7eX0ke3h9YCk7XG4gICAgbGV0IHNxdWFyZURpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2F0a0RpdjInKVtwYW5lbF07XG4gICAgY29uc29sZS5sb2coc3F1YXJlRGl2KTtcbiAgICBcbiAgICBsZXQgcG9zNSA9IDA7XG4gICAgbGV0IHBvczQgPSAwO1xuICAgIGxldCBwb3MzID0gMDtcbiAgICBsZXQgcG9zMiA9IDA7XG4gICAgbGV0IHBvczEgPSAwO1xuXG4gICAgaWYgKHBsYXllci5pc0FjdGl2ZSA9PT0gdHJ1ZSkge1xuXG4gICAgICAgIGlmIChpc1Nob3QgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICBpZiAoaGFzU2hpcCA9PT0gJ3RydWUnKXtcbiAgICAgICAgICAgICAgICBzcXVhcmVEaXYuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJ3JlZCc7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHNxdWFyZURpdi5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnZ3JleSc7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBnYW1lQm9hcmQucmVjZWl2ZUF0dGFjayh4LCB5KTtcblxuICAgICAgICAgICAgaWYgKHNoaXBUeXBlID09ICdDYXJyaWVyJykge1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIGxldCBoaXRTaGlwID0gc2hpcHMuZmlsdGVyKHNoaXAgPT4gc2hpcC5sZW5ndGggPT0gc2hpcExlbmd0aCk7XG4gICAgICAgICAgICAgICAgaGl0U2hpcFswXS5oaXQocG9zNSk7XG4gICAgICAgICAgICAgICAgcG9zNSArPSAxO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChzaGlwVHlwZSA9PSAnQmF0dGxlc2hpcCcpIHtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBsZXQgaGl0U2hpcCA9IHNoaXBzLmZpbHRlcihzaGlwID0+IHNoaXAubGVuZ3RoID09IHNoaXBMZW5ndGgpO1xuICAgICAgICAgICAgICAgIGhpdFNoaXBbMF0uaGl0KHBvczQpO1xuICAgICAgICAgICAgICAgIHBvczQgKz0gMTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoc2hpcFR5cGUgPT0gJ0Rlc3Ryb3llcicpIHtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBsZXQgaGl0U2hpcCA9IHNoaXBzLmZpbHRlcihzaGlwID0+IHNoaXAubGVuZ3RoID09IHNoaXBMZW5ndGgpO1xuICAgICAgICAgICAgICAgIGhpdFNoaXBbMF0uaGl0KHBvczMpO1xuICAgICAgICAgICAgICAgICAgICBwb3MzICs9IDE7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHNoaXBUeXBlID09ICdTdWJtYXJpbmUnKSB7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgbGV0IGhpdFNoaXAgPSBzaGlwcy5maWx0ZXIoc2hpcCA9PiBzaGlwLmxlbmd0aCA9PSBzaGlwTGVuZ3RoKTtcbiAgICAgICAgICAgICAgICBoaXRTaGlwWzFdLmhpdChwb3MyKTtcbiAgICAgICAgICAgICAgICBwb3MyICs9IDE7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHNoaXBUeXBlID09ICdQYXRyb2xib2F0Jykge1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIGxldCBoaXRTaGlwID0gc2hpcHMuZmlsdGVyKHNoaXAgPT4gc2hpcC5sZW5ndGggPT0gc2hpcExlbmd0aCk7XG4gICAgICAgICAgICAgICAgaGl0U2hpcFswXS5oaXQocG9zMSk7XG4gICAgICAgICAgICAgICAgcG9zMSArPSAxO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcGxheWVyLnRvZ2dsZSgpO1xuICAgICAgICAgICAgZW5lbXkudG9nZ2xlKCk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhnYW1lQm9hcmQpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy8gRG8gbm90aGluZ1xuICAgICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgICAgLy8gRG8gbm90aGluZ1xuICAgIH1cbn1cblxuZXhwb3J0IHsgXG5cbiAgICByZW5kZXJHQm9hcmQsXG4gICAgYXRrTGlzdGVuZXIsXG4gfTsiLCJpbXBvcnQgeyBQbGF5ZXIgfSBmcm9tICcuL3BsYXllckZhY3RvcnknO1xuaW1wb3J0IHsgcmVuZGVyR0JvYXJkLCBhdGtMaXN0ZW5lciB9IGZyb20gJy4vcmVuZGVyJztcblxuY29uc3QgZ2FtZSA9ICgpID0+IHtcblxuICAgIC8vY3JlYXRlIHBsYXllciBhbmQgY29tcHV0ZXIgcGxheWVyXG4gICAgLy9wb3B1bGF0ZSBnYW1lYm9hcmRzIGZvciBib3RoIHBsYXllcnNcblxuICAgIGNvbnN0IHBsYXllckFyciA9IFtcbiAgICAgICAgUGxheWVyKFwicGxheWVyMVwiLCB0cnVlKSxcbiAgICAgICAgUGxheWVyKFwiY29tcHV0ZXJcIiwgZmFsc2UpXG4gICAgXTtcblxuICAgIHBsYXllckFyclswXS5ib2FyZC5wbGFjZVNoaXAoMiwgMiwgNSwgJ0NhcnJpZXInKTtcbiAgICBwbGF5ZXJBcnJbMF0uYm9hcmQucGxhY2VTaGlwKDgsIDAsIDQsICdCYXR0bGVzaGlwJyk7XG4gICAgcGxheWVyQXJyWzBdLmJvYXJkLnBsYWNlU2hpcCg2LCA3LCAzLCAnRGVzdHJveWVyJyk7XG4gICAgcGxheWVyQXJyWzBdLmJvYXJkLnBsYWNlU2hpcCg1LCAxLCAzLCAnU3VibWFyaW5lJyk7XG4gICAgcGxheWVyQXJyWzBdLmJvYXJkLnBsYWNlU2hpcCgxLCA3LCAyLCAnUGF0cm9sYm9hdCcpO1xuICAgIGNvbnNvbGUubG9nKHBsYXllckFyclswXS5ib2FyZC5nYW1lQm9hcmQpO1xuICAgIHJlbmRlckdCb2FyZChwbGF5ZXJBcnJbMF0uYm9hcmQuZ2FtZUJvYXJkLCAxKTtcblxuICAgIHBsYXllckFyclsxXS5ib2FyZC5wbGFjZVNoaXAoOCwgMSwgNSwgJ0NhcnJpZXInKTtcbiAgICBwbGF5ZXJBcnJbMV0uYm9hcmQucGxhY2VTaGlwKDMsIDUsIDQsICdCYXR0bGVzaGlwJyk7XG4gICAgcGxheWVyQXJyWzFdLmJvYXJkLnBsYWNlU2hpcCg2LCAzLCAzLCAnRGVzdHJveWVyJyk7XG4gICAgcGxheWVyQXJyWzFdLmJvYXJkLnBsYWNlU2hpcCgxLCAxLCAzLCAnU3VibWFyaW5lJyk7XG4gICAgcGxheWVyQXJyWzFdLmJvYXJkLnBsYWNlU2hpcCgwLCA2LCAyLCAnUGF0cm9sYm9hdCcpO1xuICAgIGNvbnNvbGUubG9nKHBsYXllckFyclsxXS5ib2FyZC5nYW1lQm9hcmQpO1xuICAgIHJlbmRlckdCb2FyZChwbGF5ZXJBcnJbMV0uYm9hcmQuZ2FtZUJvYXJkLCAyKTtcblxuICAgIGF0a0xpc3RlbmVyKHBsYXllckFyclswXSwgcGxheWVyQXJyWzFdLCAxKTtcbiAgICAvLyBhdGtMaXN0ZW5lcihwbGF5ZXJBcnJbMV0sIHBsYXllckFyclswXSwgMik7XG5cbiAgICAvL05lZWQgdG8gaW1wbGVtZW50IGxvZ2ljIHdoaWNoIGRvZXNuJ3QgYWxsb3cgYSBwbGF5ZXIgdG8gcmVzZWxlY3QgYSBzcXVhcmUgdGhleSBoYXZlIGFscmVhZHkgY2xpY2tlZCBvblxuXG59O1xuXG5leHBvcnQgeyBnYW1lIH07IiwiaW1wb3J0IHsgZ2FtZSB9IGZyb20gJy4vZ2FtZSc7XG5cbmdhbWUoKTsiXSwibmFtZXMiOlsic2hpcEZhY3RvcnkiLCJsZW5ndGgiLCJzaGlwIiwiaGl0IiwicG9zIiwiaXNTdW5rIiwiY291bnQiLCJzdW5rIiwiZm9yRWFjaCIsIml0ZW0iLCJQbGF5ZXIiLCJuYW1lIiwiaXNBY3RpdmUiLCJjYXJyaWVyIiwiYmF0dGxlc2hpcCIsImRlc3Ryb3llciIsInN1Ym1hcmluZSIsInBhdHJvbEJvYXQiLCJzdGF0ZSIsInRvZ2dsZSIsImJvYXJkIiwiZ2FtZUJvYXJkIiwiaSIsImoiLCJoYXNTaGlwIiwiaXNTaG90Iiwic2hpcExlbmd0aCIsInNoaXBUeXBlIiwieFBvaW50IiwieVBvaW50IiwicGxhY2VTaGlwIiwieCIsInkiLCJyZWNlaXZlQXR0YWNrIiwiY29uc29sZSIsImxvZyIsImFsbFNoaXBzU3VuayIsImFyciIsImZpbHRlciIsInNoaXBzIiwiZ2FtZUJvYXJkRmFjdG9yeSIsImVuZW15TW92ZSIsIk1hdGgiLCJmbG9vciIsInJhbmRvbSIsInJlbmRlckdCb2FyZCIsIm51bSIsImNvbnRhaW5lciIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsInJvdzEiLCJjcmVhdGVFbGVtZW50Iiwic2V0QXR0cmlidXRlIiwicm93MiIsInJvdzMiLCJyb3c0Iiwicm93NSIsInJvdzYiLCJyb3c3Iiwicm93OCIsInJvdzkiLCJyb3cxMCIsImluZGV4Iiwic3ViaXRlbSIsInN1YmluZGV4Iiwic3F1YXJlRGl2IiwiY2xhc3NMaXN0IiwiYWRkIiwidGV4dENvbnRlbnQiLCJnZXRBdHRyaWJ1dGUiLCJhcHBlbmRDaGlsZCIsImVuZW15QXR0YWNrIiwicGxheWVyIiwiZW5lbXkiLCJwYW5lbCIsImdldEVsZW1lbnRzQnlDbGFzc05hbWUiLCJwb3M1IiwicG9zNCIsInBvczMiLCJwb3MyIiwicG9zMSIsInN0eWxlIiwiYmFja2dyb3VuZENvbG9yIiwicGxheWVyQXJyIiwicmVzcG9uc2UiLCJhZGRFdmVudExpc3RlbmVyIiwiZSIsInRhcmdldCIsImNvb3JkaW5hdGVzIiwiYXRrTGlzdGVuZXIiLCJnYW1lIl0sInNvdXJjZVJvb3QiOiIifQ==