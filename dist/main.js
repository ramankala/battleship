(()=>{"use strict";const e=e=>{const t=[];return{length:e,hit:e=>t[e]="hit",isSunk:()=>{let a=0,r=!1;return t.forEach((function(e){"hit"===e&&(a+=1)})),r=a===e,r}}},t=(t,a=!1)=>{let r=e(5),i=e(4),o=e(3),l=e(3),p=e(2),c={name:t,isActive:a};return{get name(){return c.name},get isActive(){return c.isActive},toggle(){c.isActive=!c.isActive},board:(()=>{let e=[["","","","","","","","","",""],["","","","","","","","","",""],["","","","","","","","","",""],["","","","","","","","","",""],["","","","","","","","","",""],["","","","","","","","","",""],["","","","","","","","","",""],["","","","","","","","","",""],["","","","","","","","","",""],["","","","","","","","","",""]];for(let t=0;t<10;t++)for(let a=0;a<10;a++)e[t][a]={hasShip:!1,isShot:!1};const t=(t,a,r)=>{for(let i=0;i<r;i++)e[t][a].hasShip=!0,a+=1;return e};return{gameBoard:e,placeShip:t,receiveAttack:(a,r)=>(t(2,2,4),!0===e[a][r].hasShip?"Hit":(e[a][r].isShot=!0,e)),allShipsSunk:e=>e.filter((e=>e.isSunk())).length===e.length}})(),ships:[r,i,o,l,p]}};(()=>{const e=[t("player1",!0),t("computer",!1)];e[0].board.placeShip(2,2,5),e[0].board.placeShip(8,0,4),e[0].board.placeShip(6,7,3),e[0].board.placeShip(5,1,3),e[0].board.placeShip(1,7,2),console.log(e[0].board.gameBoard),e[1].board.placeShip(8,1,5),e[1].board.placeShip(3,5,4),e[1].board.placeShip(6,3,3),e[1].board.placeShip(1,1,3),e[1].board.placeShip(0,6,2),console.log(e[1].board.gameBoard)})()})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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VSxHQUFHaEIsTUFBTU0sVUFBVSxFQUFHLEVBQUcsR0FDbkNVLEVBQVUsR0FBR2hCLE1BQU1NLFVBQVUsRUFBRyxFQUFHLEdBQ25DVyxRQUFRQyxJQUFJRixFQUFVLEdBQUdoQixNQUFNQyxXQUUvQmUsRUFBVSxHQUFHaEIsTUFBTU0sVUFBVSxFQUFHLEVBQUcsR0FDbkNVLEVBQVUsR0FBR2hCLE1BQU1NLFVBQVUsRUFBRyxFQUFHLEdBQ25DVSxFQUFVLEdBQUdoQixNQUFNTSxVQUFVLEVBQUcsRUFBRyxHQUNuQ1UsRUFBVSxHQUFHaEIsTUFBTU0sVUFBVSxFQUFHLEVBQUcsR0FDbkNVLEVBQVUsR0FBR2hCLE1BQU1NLFVBQVUsRUFBRyxFQUFHLEdBQ25DVyxRQUFRQyxJQUFJRixFQUFVLEdBQUdoQixNQUFNQyxZQ3RCbkNrQixJIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9nYW1lQm9hcmRGYWN0b3J5LmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvc2hpcEZhY3RvcnkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9wbGF5ZXJGYWN0b3J5LmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvZ2FtZS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHNoaXBGYWN0b3J5IH0gZnJvbSAnLi9zaGlwRmFjdG9yeSc7XG5cbmNvbnN0IGdhbWVCb2FyZEZhY3RvcnkgPSAoKSA9PiB7XG4gICAgbGV0IGdhbWVCb2FyZCA9IFtcbiAgICAgICAgKFtcIlwiLCBcIlwiLCBcIlwiLCBcIlwiLCBcIlwiLCBcIlwiLCBcIlwiLCBcIlwiLCBcIlwiLCBcIlwiXSksXG4gICAgICAgIChbXCJcIiwgXCJcIiwgXCJcIiwgXCJcIiwgXCJcIiwgXCJcIiwgXCJcIiwgXCJcIiwgXCJcIiwgXCJcIl0pLFxuICAgICAgICAoW1wiXCIsIFwiXCIsIFwiXCIsIFwiXCIsIFwiXCIsIFwiXCIsIFwiXCIsIFwiXCIsIFwiXCIsIFwiXCJdKSxcbiAgICAgICAgKFtcIlwiLCBcIlwiLCBcIlwiLCBcIlwiLCBcIlwiLCBcIlwiLCBcIlwiLCBcIlwiLCBcIlwiLCBcIlwiXSksXG4gICAgICAgIChbXCJcIiwgXCJcIiwgXCJcIiwgXCJcIiwgXCJcIiwgXCJcIiwgXCJcIiwgXCJcIiwgXCJcIiwgXCJcIl0pLFxuICAgICAgICAoW1wiXCIsIFwiXCIsIFwiXCIsIFwiXCIsIFwiXCIsIFwiXCIsIFwiXCIsIFwiXCIsIFwiXCIsIFwiXCJdKSxcbiAgICAgICAgKFtcIlwiLCBcIlwiLCBcIlwiLCBcIlwiLCBcIlwiLCBcIlwiLCBcIlwiLCBcIlwiLCBcIlwiLCBcIlwiXSksXG4gICAgICAgIChbXCJcIiwgXCJcIiwgXCJcIiwgXCJcIiwgXCJcIiwgXCJcIiwgXCJcIiwgXCJcIiwgXCJcIiwgXCJcIl0pLFxuICAgICAgICAoW1wiXCIsIFwiXCIsIFwiXCIsIFwiXCIsIFwiXCIsIFwiXCIsIFwiXCIsIFwiXCIsIFwiXCIsIFwiXCJdKSxcbiAgICAgICAgKFtcIlwiLCBcIlwiLCBcIlwiLCBcIlwiLCBcIlwiLCBcIlwiLCBcIlwiLCBcIlwiLCBcIlwiLCBcIlwiXSksXG4gICAgXTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDEwOyBpKyspe1xuICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IDEwOyBqKyspe1xuICAgICAgICAgICAgZ2FtZUJvYXJkW2ldW2pdID0gKHtoYXNTaGlwOiBmYWxzZSwgaXNTaG90OiBmYWxzZX0pO1xuICAgICAgICB9O1xuICAgIH07XG5cblxuICAgIGNvbnN0IHBsYWNlU2hpcCA9ICh4LCB5LCBzaGlwTGVuZ3RoKSA9PiB7XG4gICAgICAgIC8vIHNob3VsZCBiZSBjYWxsaW5nIHNoaXAgZmFjdG9yeSBoZXJlXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2hpcExlbmd0aDsgaSsrKXtcbiAgICAgICAgICAgIGdhbWVCb2FyZFt4XVt5XS5oYXNTaGlwID0gdHJ1ZTtcbiAgICAgICAgICAgIHkgKz0gMTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZ2FtZUJvYXJkO1xuICAgIH1cblxuICAgIGNvbnN0IHJlY2VpdmVBdHRhY2sgPSAoeCwgeSkgPT4ge1xuICAgICAgICBwbGFjZVNoaXAoMiwgMiwgNCk7XG4gICAgICAgIGlmIChnYW1lQm9hcmRbeF1beV0uaGFzU2hpcCA9PT0gdHJ1ZSl7XG4gICAgICAgICAgICByZXR1cm4gJ0hpdCc7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBnYW1lQm9hcmRbeF1beV0uaXNTaG90ID0gdHJ1ZTtcbiAgICAgICAgICAgIHJldHVybiBnYW1lQm9hcmQ7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgY29uc3QgYWxsU2hpcHNTdW5rID0gKGFycikgPT4ge1xuICAgICAgICBjb25zdCBzdW5rZW5TaGlwcyA9IGFyci5maWx0ZXIoc2hpcHMgPT4gc2hpcHMuaXNTdW5rKCkpO1xuICAgICAgICBpZiAoc3Vua2VuU2hpcHMubGVuZ3RoID09PSBhcnIubGVuZ3RoKXtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG5cbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgICBnYW1lQm9hcmQsXG4gICAgICAgIHBsYWNlU2hpcCxcbiAgICAgICAgcmVjZWl2ZUF0dGFjayxcbiAgICAgICAgYWxsU2hpcHNTdW5rLFxuICAgIH1cbn07XG5cbmV4cG9ydCB7IGdhbWVCb2FyZEZhY3RvcnkgfTsiLCJcbmNvbnN0IHNoaXBGYWN0b3J5ID0gKGxlbmd0aCkgPT4ge1xuICAgIGNvbnN0IHNoaXAgPSBbXTtcblxuICAgIGNvbnN0IGhpdCA9IChwb3MpID0+IHNoaXBbcG9zXSA9ICdoaXQnO1xuXG4gICAgY29uc3QgaXNTdW5rID0gKCkgPT4ge1xuICAgICAgICBsZXQgY291bnQgPSAwO1xuICAgICAgICBsZXQgc3VuayA9IGZhbHNlO1xuXG4gICAgICAgIHNoaXAuZm9yRWFjaChmdW5jdGlvbihpdGVtKXtcbiAgICAgICAgICAgIGlmIChpdGVtID09PSAnaGl0Jyl7XG4gICAgICAgICAgICAgICAgY291bnQgKz0gMTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIGlmIChjb3VudCA9PT0gbGVuZ3RoKSB7XG4gICAgICAgICAgICBzdW5rID0gdHJ1ZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHN1bmsgPSBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBzdW5rO1xuICAgIH07XG5cbiAgICByZXR1cm4ge1xuICAgICAgICBsZW5ndGgsXG4gICAgICAgIGhpdCxcbiAgICAgICAgaXNTdW5rLFxuICAgIH1cbn07XG5cbmV4cG9ydCB7IHNoaXBGYWN0b3J5IH07IiwiaW1wb3J0IHsgZ2FtZUJvYXJkRmFjdG9yeSB9IGZyb20gJy4vZ2FtZUJvYXJkRmFjdG9yeSc7XG5pbXBvcnQgeyBzaGlwRmFjdG9yeSB9IGZyb20gJy4vc2hpcEZhY3RvcnknO1xuXG5jb25zdCBQbGF5ZXIgPSAobmFtZSwgaXNBY3RpdmUgPSBmYWxzZSkgPT4ge1xuXG4gICAgbGV0IGNhcnJpZXIgPSBzaGlwRmFjdG9yeSg1KTtcbiAgICBsZXQgYmF0dGxlc2hpcCA9IHNoaXBGYWN0b3J5KDQpO1xuICAgIGxldCBkZXN0cm95ZXIgPSBzaGlwRmFjdG9yeSgzKTtcbiAgICBsZXQgc3VibWFyaW5lID0gc2hpcEZhY3RvcnkoMyk7XG4gICAgbGV0IHBhdHJvbEJvYXQgPSBzaGlwRmFjdG9yeSgyKTtcbiAgICBcbiAgICBsZXQgc3RhdGUgPSB7XG4gICAgICAgIG5hbWUsXG4gICAgICAgIGlzQWN0aXZlLFxuICAgIH1cblxuICAgIGxldCBib2FyZCA9IGdhbWVCb2FyZEZhY3RvcnkoKTtcblxuICAgIGxldCBzaGlwcyA9IFtjYXJyaWVyLCBiYXR0bGVzaGlwLCBkZXN0cm95ZXIsIHN1Ym1hcmluZSwgcGF0cm9sQm9hdF07XG5cbiAgICByZXR1cm4ge1xuICAgICAgICBnZXQgbmFtZSgpe3JldHVybiBzdGF0ZS5uYW1lO30sXG4gICAgICAgIGdldCBpc0FjdGl2ZSgpe3JldHVybiBzdGF0ZS5pc0FjdGl2ZTt9LFxuICAgICAgICB0b2dnbGUoKXsgc3RhdGUuaXNBY3RpdmUgPSAhc3RhdGUuaXNBY3RpdmU7fSxcbiAgICAgICAgYm9hcmQsXG4gICAgICAgIHNoaXBzLFxuICAgIH1cbn07XG5cbmV4cG9ydCB7IFBsYXllciB9OyIsImltcG9ydCB7IFBsYXllciB9IGZyb20gJy4vcGxheWVyRmFjdG9yeSc7XG5cbmNvbnN0IGdhbWUgPSAoKSA9PiB7XG5cbiAgICAvL2NyZWF0ZSBwbGF5ZXIgYW5kIGNvbXB1dGVyIHBsYXllclxuICAgIC8vcG9wdWxhdGUgZ2FtZWJvYXJkcyBmb3IgYm90aCBwbGF5ZXJzXG5cbiAgICBjb25zdCBwbGF5ZXJBcnIgPSBbXG4gICAgICAgIFBsYXllcihcInBsYXllcjFcIiwgdHJ1ZSksXG4gICAgICAgIFBsYXllcihcImNvbXB1dGVyXCIsIGZhbHNlKVxuICAgIF07XG5cbiAgICBwbGF5ZXJBcnJbMF0uYm9hcmQucGxhY2VTaGlwKDIsIDIsIDUpO1xuICAgIHBsYXllckFyclswXS5ib2FyZC5wbGFjZVNoaXAoOCwgMCwgNCk7XG4gICAgcGxheWVyQXJyWzBdLmJvYXJkLnBsYWNlU2hpcCg2LCA3LCAzKTtcbiAgICBwbGF5ZXJBcnJbMF0uYm9hcmQucGxhY2VTaGlwKDUsIDEsIDMpO1xuICAgIHBsYXllckFyclswXS5ib2FyZC5wbGFjZVNoaXAoMSwgNywgMik7XG4gICAgY29uc29sZS5sb2cocGxheWVyQXJyWzBdLmJvYXJkLmdhbWVCb2FyZCk7XG5cbiAgICBwbGF5ZXJBcnJbMV0uYm9hcmQucGxhY2VTaGlwKDgsIDEsIDUpO1xuICAgIHBsYXllckFyclsxXS5ib2FyZC5wbGFjZVNoaXAoMywgNSwgNCk7XG4gICAgcGxheWVyQXJyWzFdLmJvYXJkLnBsYWNlU2hpcCg2LCAzLCAzKTtcbiAgICBwbGF5ZXJBcnJbMV0uYm9hcmQucGxhY2VTaGlwKDEsIDEsIDMpO1xuICAgIHBsYXllckFyclsxXS5ib2FyZC5wbGFjZVNoaXAoMCwgNiwgMik7XG4gICAgY29uc29sZS5sb2cocGxheWVyQXJyWzFdLmJvYXJkLmdhbWVCb2FyZCk7XG5cblxuXG5cbn07XG5cbmV4cG9ydCB7IGdhbWUgfTsiLCJpbXBvcnQgeyBnYW1lIH0gZnJvbSAnLi9nYW1lJztcblxuZ2FtZSgpOyJdLCJuYW1lcyI6WyJzaGlwRmFjdG9yeSIsImxlbmd0aCIsInNoaXAiLCJoaXQiLCJwb3MiLCJpc1N1bmsiLCJjb3VudCIsInN1bmsiLCJmb3JFYWNoIiwiaXRlbSIsIlBsYXllciIsIm5hbWUiLCJpc0FjdGl2ZSIsImNhcnJpZXIiLCJiYXR0bGVzaGlwIiwiZGVzdHJveWVyIiwic3VibWFyaW5lIiwicGF0cm9sQm9hdCIsInN0YXRlIiwidG9nZ2xlIiwiYm9hcmQiLCJnYW1lQm9hcmQiLCJpIiwiaiIsImhhc1NoaXAiLCJpc1Nob3QiLCJwbGFjZVNoaXAiLCJ4IiwieSIsInNoaXBMZW5ndGgiLCJyZWNlaXZlQXR0YWNrIiwiYWxsU2hpcHNTdW5rIiwiYXJyIiwiZmlsdGVyIiwic2hpcHMiLCJnYW1lQm9hcmRGYWN0b3J5IiwicGxheWVyQXJyIiwiY29uc29sZSIsImxvZyIsImdhbWUiXSwic291cmNlUm9vdCI6IiJ9