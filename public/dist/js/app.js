"use strict";var _createClass=function(){function r(e,a){for(var n=0;n<a.length;n++){var r=a[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(e,a,n){return a&&r(e.prototype,a),n&&r(e,n),e}}();function _classCallCheck(e,a){if(!(e instanceof a))throw new TypeError("Cannot call a class as a function")}var Person=function(){function r(e,a,n){_classCallCheck(this,r),this.name=e,this.yeasrOfBirth=a,this.cityOfBirth=n}return _createClass(r,[{key:"calcaAge",value:function(){return(new Date).getFullYear()-this.yeasrOfBirth}}],[{key:"lembrance",value:function(){console.log("This is the prototype")}}]),r}(),maria=new Person("Maria Clorde",1986,"Michigan");console.log(maria),console.log(maria.calcaAge()),Person.lembrance();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyJdLCJuYW1lcyI6WyJQZXJzb24iLCJuYW1lIiwieWVhc3JPZkJpcnRoIiwiY2l0eU9mQmlydGgiLCJfY2xhc3NDYWxsQ2hlY2siLCJ0aGlzIiwiRGF0ZSIsImdldEZ1bGxZZWFyIiwiY29uc29sZSIsImxvZyIsIm1hcmlhIl0sIm1hcHBpbmdzIjoiaVlBK1NNQSxrQkFDRixTQUFBQSxFQUFZQyxFQUFNQyxFQUFjQyxHQUFZQyxnQkFBQUMsS0FBQUwsR0FDeENLLEtBQUtKLEtBQU9BLEVBS1pJLEtBQUFILGFBQWNJLEVBQ2RELEtBQUFGLFlBQWFBLDBEQUFiLE9BRFUsSUFBSUcsTUFBT0MsY0FDUkYsS0FBS0gsbURBR2xCTSxRQUFRQyxJQUFJLGtDQUdkQyxNQUFRLElBQUlWLE9BQU8sZUFBZ0IsS0FBTSxZQUMvQ1EsUUFBUUMsSUFBSUMsT0FEWkYsUUFBTUUsSUFBUUEsTUFBSVYsWUFDbEJRLE9BQUFBIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGxldCByZXN1bHQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucmVzdWx0Jyk7XG4vLyBsZXQgc3RyTWV0aG9kcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc3RyaW5nczJcIik7XG4vLyBjb25zdCB0aGlzV29yZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudGhpc1dvcmRcIik7XG4vLyBjb25zdCBhcnJheTEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmFycmF5MVwiKTtcbi8vIGxldCBmaXNydG5hbWUgPSBcIkNhcmxvc1wiO1xuLy8gbGV0IGxhc3RuYW1lID0gXCJNYXJ4XCI7XG4vLyBjb25zdCB5ZWFyT2ZCaXJ0aCA9IDE5Nzg7XG5cbi8vICBbICsgXSBbICsgXSBbICsgXSBbICsgXSBUZW1wbGF0ZSBzdHJpbmdzXG4vLyBmdW5jdGlvbiBjYWxjQWdlKHllYXIpIHtcbi8vICAgICByZXR1cm4gMjAxNiAtIHllYXI7XG4vLyB9XG4vLyByZXN1bHQuaW5uZXJIVE1MID0gYCR7Y2FsY0FnZSh5ZWFyT2ZCaXJ0aCl9YDtcblxuLy8gLy8gU3RyaW5nIG1ldGhvZHNcblxuLy8gY29uc3QgbiA9IGAke2Zpc3J0bmFtZX0gJHtsYXN0bmFtZX1gO1xuLy8gc3RyTWV0aG9kcy5pbm5lckhUTUwgPSBuLnN0YXJ0c1dpdGgoJ3dlJyk7XG4vLyBzdHJNZXRob2RzLmlubmVySFRNTCArPSBuLmVuZHNXaXRoKCdDYXInKTtcbi8vIHN0ck1ldGhvZHMuaW5uZXJIVE1MICs9IG4uaW5jbHVkZXMoJ2EnKTtcblxuXG4vLyAgWyArIF0gWyArIF0gWyArIF0gWyArIF0gXG4vLyBUaGlzIHdvcmRcbi8qIGNvbnN0IGJveCA9IHtcbiAgICBjb2xvcjogJ3JlZCcsXG4gICAgY29sb3IyOiAnYmx1ZScsXG4gICAgY2xpY2tNZTogKCkgPT4ge1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmJ0bi1kYW5nZXJcIikuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICB0aGlzV29yZC5pbm5lckhUTUwgPSAnJ2Ake3RoaXMuY29sb3J9IGFuZCAke3RoaXMuY29sb3IyfWAnJztcbiAgICAgICAgICAgIHRoaXNXb3JkLmlubmVySFRNTCA9IHRoaXMuY29sb3I7IC8vZG9lc24ndCBzaG93IHNob3cgdGhlIGJveC5jb2xvciBwcm9wZXJ0eSBidWNvdXNlIFRoaXMgaW5zaWRlIGFyb29ydyBmdW5jdGlvbnMgcG9pbnQgdG8gdGhlIEdsb2JhbCBvYnNcbiAgICAgICAgfSk7XG4gICAgfVxufTtcbmJveC5jbGlja01lKCk7ICovXG5cblxuLy8gIFsgKyBdIFsgKyBdIFsgKyBdIFsgKyBdICBBcnJheSBleGVtcGxlXG4vLyBjbGFzcyBQZXJzb24ge1xuLy8gICAgIGNvbnN0cnVjdG9yKG5hbWUpIHtcbi8vICAgICAgICAgdGhpcy5uYW1lID0gbmFtZTtcbi8vICAgICB9XG4vLyB9XG5cblxuLy8gJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkIFNlY3Rpb24gMDcgLSAxMDkgLSBEZXN0cnVjdHVyaW5nIEFycmF5XG4vLyBjb25zdCBbIG15bmFtZSwgbXlhZ2VdID0gWydqb3PDqSBDYXJsb3MgRGVzdHInLCAxMl07XG4vLyBjb25zb2xlLmxvZyhteW5hbWUpO1xuXG5cblxuLy8gJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkIFNlY3Rpb24gMDcgLSAxMDkgLSBEZXN0cnVjdHVyaW5nIE9ialxuLy8gY29uc3QgYmVsb25naW5nPXtcbi8vICAgICBob3VzZTogJ01pY2hpZ2FuJyxcbi8vICAgICBjYXI6ICdCZW50bGV5J1xuLy8gfTtcbi8vIGNvbnN0IHsgaG91c2UsIGNhciB9ID0gYmVsb25naW5nO1xuLy8gY29uc29sZS5sb2coaG91c2UgKyAgJyAgJyArIGNhciApO1xuXG5cblxuLy8gJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkIFNlY3Rpb24gMDcgLSAxMDkgLSBEZXN0cnVjdHVyaW5nIGZ1bmN0aW9uXG4vLyBmdW5jdGlvbiBteUFnZWFuZHJldGlyZW1lbnQoeWVhcnMpe1xuLy8gICAgIGxldCBub3cgPSBuZXcgRGF0ZSgpLmdldEZ1bGxZZWFyKCk7XG4vLyAgICAgbGV0IGFnZSA9IG5vdyAtIHllYXJzO1xuLy8gICAgIHJldHVybiBbYWdlLCA5MCAtIGFnZSBdOyBcbi8vIH1cbi8vIGNvbnN0IFsgYWdlLCByZXRpcmVtZW50IF0gPSBteUFnZWFuZHJldGlyZW1lbnQoMTk3OCk7XG5cbi8vIGNvbnNvbGUubG9nKGBNeSBhZ2UgaXMgJHthZ2V9IGFuZCBpIGhhdmUgJHtyZXRpcmVtZW50fSB5ZWFycyB0byByZXRpcmUuYCk7XG5cblxuLy8gJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkIC0gTm9kZSBMaXN0IHRvIGFycmF5IEVTNVxuLy8gY29uc3QgbGluZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucC0zJyk7XG4vLyBjb25zdCBsaW5lc0FyciA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGxpbmVzKTtcbi8vIGNvbnNvbGUubG9nKGxpbmVzQXJyKTtcbi8vIGxpbmVzQXJyLmZvckVhY2goY3Vycj0+e1xuLy8gICAgIGN1cnIuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJ3JlZCc7XG4vLyB9KTtcblxuXG4vLyAkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQgLSBOb2RlIExpc3QgdG8gYXJyYXkgRVM2XG4vLyBjb25zdCBsaW5lcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5wLTMnKTtcbi8vIEFycmF5LmZyb20obGluZXMpLmZvckVhY2goY3Vycj0+e1xuLy8gICAgIGN1cnIuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJ2JsdWUnO1xuLy8gICAgIGN1cnIuc3R5bGUuY29sb3IgPSAnd2hpdGUnO1xuLy8gfSk7XG5cblxuLy8gJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkIC0gTm9kZSBMaXN0IHRvIGFycmF5IEVTNSAtIENvbnRpbnVlIEJyZWFrXG4vLyBjb25zdCBsaW5lcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5wLTMnKTtcbi8vIGNvbnN0IGxpbmVzQXJyID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwobGluZXMpO1xuLy8gZm9yKGxldCBpPTA7aTxsaW5lc0Fyci5sZW5ndGg7aSsrKXtcbi8vICAgICBpZihsaW5lc0FycltpXS5jbGFzc05hbWUgPT09ICdibHVlLWJsb3gnKXtcbi8vICAgICAgICAgbGluZXNBcnJbaV0uc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJ3JlZCc7XG4vLyAgICAgICAgIGJyZWFrO1xuLy8gICAgIH1cbi8vICAgICBsaW5lc0FycltpXS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAncmVkJztcbi8vICAgICBsaW5lc0FycltpXS50ZXh0Q29udGVudCA9ICdDZWx0YXMnO1xuLy8gfVxuXG5cbi8vICQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCAtIE5vZGUgTGlzdCB0byBhcnJheSBFUzYgLSBDb250aW51ZSBCcmVha2tjb25zdCBsaW5lcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5wLTMnKTtcbi8qIGNvbnN0IGxpbmVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnAtMycpO1xuY29uc3QgbGluZXNBcnIgPSBBcnJheS5mcm9tKGxpbmVzKTtcbmZvcihjb25zdCBjdXJyIG9mIGxpbmVzQXJyKXtcbiAgICBpZihjdXJyLmNsYXNzTmFtZS5pbmNsdWRlZCA9PT0gJy5ibHVlLWJsb3gnKXtcbiAgICAgICAgbGluZXNBcnIudGV4dENvbnRlbnQgPSAnZWVlQ2VsdGFzJztcbiAgICAgICAgY29udGludWU7XG4gICAgfVxuICAgIC8vIGxpbmVzQXJyLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICdyZWQnO1xuICAgIGxpbmVzQXJyLnRleHRDb250ZW50ID0gJ0NlbHRhcyc7XG59XG4gKi9cblxuXG4vLyAkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCRcbi8vIEFycmF5IEVTNSAtIENoZWtpbmcgb25lIGVsZW1lbnQgb2YgdGhlIEFycmF5XG4vKiBjb25zdCBhZ2VzID0gWyAxMiwgMTYsIDEyLCAxNywgOSwgMTAsIDM0IF07XG5jb25zdCBmdWxsQWdlID0gYWdlcy5tYXAoY3Vycj0+e1xuICAgIGNvbnNvbGUubG9nKGN1cnIgPj0gMTgpO1xufSk7XG5jb25zdCBpc2Z1bGwgPSBhZ2VzW2Z1bGxBZ2UuaW5kZXhPZih0cnVlKV07XG5cbmNvbnNvbGUubG9nKCdUaGlzIGlzIHRoZSB0cnVlICcgKyBpc2Z1bGwpOyAqL1xuXG5cbi8vICQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJFxuLy8gQXJyYXkgRVM2IC0gQ2hla2luZyBvbmUgZWxlbWVudCBvZiB0aGUgQXJyYXlcbi8qIGNvbnN0IGFnZXMgPSBbIDE2LCAxMiwgMTcsIDksIDEwLCAyMiwgIDEzIF07XG5cbmNvbnN0IGZ1bGxBZ2UgPSBhZ2VzLm1hcChjdXJyID0+IGN1cnIgPj0gMTgpO1xuY29uc29sZS5sb2coZnVsbEFnZSk7XG5cbmNvbnNvbGUubG9nKGFnZXMuZmluZChjdXJyID0+IGN1cnIgPj0gMTgpKTtcblxuY29uc29sZS5sb2coYWdlcy5maW5kSW5kZXgoY3VyciA9PiBjdXJyID49IDE4KSk7XG5cbiovXG4vLyAkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQgUGFzc2luZyBhIGVudGlyZSBBcnJheSBpbnRvIGEgZnVuY3Rpb25cbi8vIGVzNSBcblxuLy8gY29uc3QgbnVtTGlzdCA9IChhLGIsYyxkKT0+e1xuLy8gICAgIHJldHVybiBhK2IrYytkO1xuLy8gfVxuLy8gY29uc29sZS5sb2cobnVtTGlzdCgyMywzNCw2Niw4OCkpO1xuLy8gdmFyIG51bUFyciA9IFsyMywzNCw2Niw4OF07XG4vLyBjb25zdCBzdW0yID0gbnVtTGlzdC5hcHBseShudWxsLCBudW1BcnIpO1xuLy8gY29uc29sZS5sb2coc3VtMik7XG5cblxuXG4vLyAkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQgUGFzc2luZyBhIGVudGlyZSBBcnJheSBpbnRvIGEgZnVuY3Rpb25cbi8vIGVzNiAtIHNwcmVhZCBvcGVyYXRvclxuXG4vLyBjb25zdCBzb21lQWdlcyA9IChhLGIsYywgZCk9Pntcbi8vICAgICByZXR1cm4gYStiK2MrZDtcbi8vIH07XG4vLyBjb25zdCBhZ2VzID0gWzEyLDQ1LDY3LCA0NV07XG5cbi8vIGNvbnN0IHN1bTMgPSBzb21lQWdlcyguLi5hZ2VzKTtcbi8vIGNvbnNvbGUubG9nKHN1bTMpO1xuXG4vLyBjb25zdCBmYW1pbHkxID0gWydTYWxseScsJ01pbGwnLCdLYXRpJywnQ2FybG9zJ107XG4vLyBjb25zdCBmYW1pbHkyID0gWydNaWNoYWVsJywnU2ljaycsJ01pbmlzdHJvaXRlcicsJ1N1bGEnXTtcblxuLy8gY29uc3Qgam9pbkZhbWlseSA9IFsnSmhvbicsLi4uZmFtaWx5MiwgLi4uZmFtaWx5MV07XG4vLyBjb25zb2xlLmxvZyhqb2luRmFtaWx5KTtcblxuXG5cbi8vIC8vICQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCBTcHJlZWQgdG8gYWNlc3Npbmcgbm9kZSBlbGVtZW50c1xuXG4vLyBjb25zdCBoMSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2gxJyk7XG4vLyBjb25zdCBsaW5lcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5wLTMnKTtcbi8vIGNvbnN0IHVuaW9uID0gW2gxLCAuLi5saW5lc107XG4vLyBBcnJheS5mcm9tKHVuaW9uKS5mb3JFYWNoKGN1cnI9Pntcbi8vICAgICBjdXJyLnN0eWxlLmNvbG9yID0gJ2JsdWUnO1xuLy8gfSk7XG5cblxuXG4vLyAvLyAkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQgQXJndW1uZXRzIHByb3BlcnR5IGVzNVxuLy8gZnVuY3Rpb24gYWdlcygpe1xuLy8gICAgIGNvbnNvbGUubG9nKGFyZ3VtZW50cyk7XG4vLyB9XG4vLyBhZ2VzKCdsb3ZlJywgMTIsIDM0NSk7XG5cblxuLy8gLy8gJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkIEFyZ3VtbmV0cyB0byBhcnJheSBFUzVcblxuLy8gZnVuY3Rpb24gaXNGdWxsQWdlICgpe1xuLy8gICAgIGNvbnN0IGFyZ3NBcnIgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMpO1xuLy8gICAgIGFyZ3NBcnIuZm9yRWFjaChjdXJyPT57XG4vLyAgICAgICAgIGxldCBhcmdzQXJyID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzLCAxKTtcbi8vICAgICAgICAgY29uc29sZS5sb2coYXJnc0Fycik7XG4vLyAgICAgICAgIGxldCBub3cgPSBuZXcgRGF0ZSgpLmdldEZ1bGxZZWFyKCk7XG4vLyAgICAgICAgIGNvbnNvbGUubG9nKChub3cgLSBjdXJyKSA+PSAxOCk7XG4vLyAgICAgfSk7XG4vLyB9XG4vLyBpc0Z1bGxBZ2UoMTk4NywgMTk4MiwgMjAxMCwgMjAwMiwgMjAxNyk7XG5cbi8qIGNvbnN0IGlmRnVsbEFnZSA9ICguLi55ZWFyKSA9PiB7XG4gICAgY29uc29sZS5sb2coLi4ueWVhciArICcgICcpO1xuICAgIHllYXIuZm9yRWFjaChjdXJyPT57XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9ICgyMDE4IC0gY3VyciApID49IDE4O1xuICAgICAgICBjb25zb2xlLmxvZyhyZXN1bHQpO1xuICAgICAgICBjb25zb2xlLmxvZygyMDE4IC0gY3Vycik7XG4gICAgfSk7XG59O1xuaWZGdWxsQWdlKDIwMDAsIDIwMTMsIDIwMTIsIDE5NzggKTtcbiAqL1xuXG5cblxuLy8gLy8gJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkIC8vIERlZmF1bHQgcGFyYW1ldGVycyAgRVM1XG4vKiBjbGFzcyBQZXJzb257XG4gICAgY29uc3RydWN0b3IoZmlyc3ROYW1lLCB5ZWFyT2ZCaXJ0aCwgTGFzdG5hbWUsIGNpdHlPZkJpcnRoKXtcbiAgICBcbiAgICAgTGFzdG5hbWUgPT09IHVuZGVmaW5lZCA/IExhc3RuYW1lID0gJ21hY2tlbnppZScgOiBMYXN0bmFtZSA9IExhc3RuYW1lOyBcbiAgICAgY2l0eU9mQmlydGggPT09IHVuZGVmaW5lZCA/IGNpdHlPZkJpcnRoID0gJ2xhbWNzdGVyJyA6IGNpdHlPZkJpcnRoID0gY2l0eU9mQmlydGg7IFxuICAgICAgIFxuICAgICAgXG4gICAgICB0aGlzLmZpcnN0TmFtZSA9IGZpcnN0TmFtZTtcbiAgICAgIHRoaXMueWVhck9mQmlydGggPSB5ZWFyT2ZCaXJ0aDtcbiAgICAgIHRoaXMuTGFzdG5hbWUgPSBMYXN0bmFtZTtcbiAgICAgIHRoaXMuY2l0eU9mQmlydGggPSBjaXR5T2ZCaXJ0aDtcbiAgICB9XG59XG5jb25zdCBqaG9uID0gbmV3IFBlcnNvbignamhvbicsIDE5NjYpOyAqL1xuXG5cblxuLy8gLy8gJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkICAvLyBEZWZhdWx0IHBhcmFtZXRlcnMgIEVTNlxuLyogY2xhc3MgUGVyc29ue1xuICAgIGNvbnN0cnVjdG9yKGZpcnN0TmFtZSwgeWVhck9mQmlydGgsIExhc3RuYW1lID0gJ2xhbmNhc3RlcicsIGNpdHlPZkJpcnRoID0gJ01vc29yeScgKXtcbiAgICAgIHRoaXMuZmlyc3ROYW1lID0gZmlyc3ROYW1lO1xuICAgICAgdGhpcy55ZWFyT2ZCaXJ0aCA9IHllYXJPZkJpcnRoO1xuICAgICAgdGhpcy5MYXN0bmFtZSA9IExhc3RuYW1lO1xuICAgICAgdGhpcy5jaXR5T2ZCaXJ0aCA9IGNpdHlPZkJpcnRoO1xuICAgIH1cbn1cbmNvbnN0IGpob24gPSBuZXcgUGVyc29uKCdqaG9uJywgMTk2Nik7XG5jb25zdCBtYWcgPSBuZXcgUGVyc29uKCdNYWdhbGknLCAxOTkwKTtcbiAqL1xuXG4vLyAvLyAkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQgTWFwXG4vKiBcbmNvbnN0IHF1ZXN0aW9uID0gbmV3IE1hcCgpO1xucXVlc3Rpb24uc2V0KCdxdWVzdGlvbicsICdXaGF0IGlzIHRoZSBiZXN0IE1ldGFsIEJhbmQgb2YgdGhlIFdvcmxkPycpO1xucXVlc3Rpb24uc2V0KDEsICdQYW50ZXJhJyk7XG5xdWVzdGlvbi5zZXQoMiwgJ0lyb24gTXlkZW4nKTtcbnF1ZXN0aW9uLnNldCgzLCAnQWdub3N0aWMgRnJvbnQnKTtcbnF1ZXN0aW9uLnNldCg0LCAnSGVhZGJyZWVkJyk7XG5xdWVzdGlvbi5zZXQoJ2NvcnJlY3QnLCA0KTtcbnF1ZXN0aW9uLnNldCh0cnVlLCdDb3JyZWN0IGFuc3dlYXInKTtcbnF1ZXN0aW9uLnNldChmYWxzZSwnV3JvbmcgTURGJyk7XG5cblxuaWYocXVlc3Rpb24uaGFzKDQpKXtcbiAgICBjb25zb2xlLmxvZygnVGhlIHBvc3NpYmxlIGNvb2wgYW5zd2VhciBpcyBIRVJFJyk7XG59XG5cbmNvbnNvbGUubG9nKHF1ZXN0aW9uLmdldCgncXVlc3Rpb24nKSk7XG5jb25zb2xlLmxvZyhxdWVzdGlvbi5zaXplKTtcblxuZm9yKGxldCBba2V5LCB2YWx1ZV0gb2YgcXVlc3Rpb24uZW50cmllcygpKXtcblxuICAgIGlmKHR5cGVvZihrZXkpID09PSAnbnVtYmVyJyl7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKGBFc3NhIMOpIG8ga2V5OiAke2tleX0sIGVzc2Ugw6kgbyBWYWxvcjogJHt2YWx1ZX1gKTtcblxuICAgICAgICAgbGV0IGFucyA9IHBhcnNlSW50KHByb21wdCgnQW5zd2VyIHRoZSBxdWVzdGlvbicpKTtcbiAgICAgICAgIFxuICAgICAgICBjb25zb2xlLmxvZyhxdWVzdGlvbi5nZXQoYW5zID09PSBxdWVzdGlvbi5nZXQoJ2NvcnJlY3QnKSkpO1xuICAgICAgICBjb25zb2xlLmxvZyhhbnMpOyBcbiAgICB9XG59XG4gKi9cblxuXG4vLyAvLyAkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQgY2xhc3NlcyBcbi8vIEVTNVxuXG4vKiBmdW5jdGlvbiBQZXJzb24obmFtZSwgeWVhck9mYmlydGgsIGNpdHlPZkJpcnRoKXtcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgIHRoaXMueWVhck9mYmlydGggPSB5ZWFyT2ZiaXJ0aDtcbiAgICB0aGlzLmNpdHlPZkJpcnRoID0gY2l0eU9mQmlydGg7XG59XG5QZXJzb24ucHJvdG90eXBlLmNhbGNBZ2UgPSBmdW5jdGlvbiAoKXtcbiAgICBsZXQgbm93ID0gbmV3IERhdGUoKS5nZXRGdWxsWWVhcigpO1xuICAgIHJldHVybiBub3cgLSB0aGlzLnllYXJPZmJpcnRoO1xufVxuXG5jb25zdCBqb3NlID0gbmV3IFBlcnNvbignSm9zw6kgQ2FybG9zJywgMTk3OCwgJ1PDo28gUGF1bG8nKTtcblxuY29uc29sZS5sb2coam9zZSk7XG5jb25zb2xlLmxvZyhqb3NlLmNhbGNBZ2UoKSk7ICovXG5cblxuXG4vLyAvLyAkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQgY2xhc3NlcyBcbi8vIEVTNlxuXG5jbGFzcyBQZXJzb257XG4gICAgY29uc3RydWN0b3IobmFtZSwgeWVhc3JPZkJpcnRoLCBjaXR5T2ZCaXJ0aCl7XG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgICAgIHRoaXMueWVhc3JPZkJpcnRoID0geWVhc3JPZkJpcnRoO1xuICAgICAgICB0aGlzLmNpdHlPZkJpcnRoID0gY2l0eU9mQmlydGg7XG4gICAgfVxuICAgIGNhbGNhQWdlKCl7XG4gICAgICAgIGxldCBub3cgPSBuZXcgRGF0ZSgpLmdldEZ1bGxZZWFyKCk7XG4gICAgICAgIHJldHVybiBub3cgLSB0aGlzLnllYXNyT2ZCaXJ0aDtcbiAgICB9XG4gICAgc3RhdGljIGxlbWJyYW5jZSgpe1xuICAgICAgICBjb25zb2xlLmxvZygnVGhpcyBpcyB0aGUgcHJvdG90eXBlJyk7XG4gICAgfVxufVxuY29uc3QgbWFyaWEgPSBuZXcgUGVyc29uKCdNYXJpYSBDbG9yZGUnLCAxOTg2LCAnTWljaGlnYW4nKTtcbmNvbnNvbGUubG9nKG1hcmlhKTtcbmNvbnNvbGUubG9nKG1hcmlhLmNhbGNhQWdlKCkpO1xuUGVyc29uLmxlbWJyYW5jZSgpO1xuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
