**Todo list**
*Lägg till todos till din att göra lista och sätt prioritet mellan 1-3 på dessa. Välj om du ska markera din todo som klar eller om du ska radera den helt.*
*Att göra listan sorteras med utförda todos längst ned och icke-utförda högst upp. De icke-utförda todosen sorteras utifrån sin prioritet.*

**ITodo.ts**
Interface ITodo med strukturen:
<li>Task: strängvariabel</li>
<li>Completed: Boolvariabel</li>
<li>Priority: nummervariabel</li>

**Todo.ts**
Hämtar interfacet ITodo från ITodo.ts.

Klassen TodoList implementerar interfacet ITodo. 
En array av ITodo-objekt skapas för att lagra alla tasks som klassen hanterar. 
I konsturktorn initieras attributet todos med det sparade värdet som finns i localstorage - om lovalstorage är tom så används en tom array som standardvärde. 

Klassen innehåller vidare en rad metoder för att lägga till ny todo, markera todo som avklarad, spara till localstorage, hämta från localstorage, radera todo och rensa localstorage. 
I metoden addtodo så kontrolleras även så att de 'krav' som ställs uppfylls.

**main.ts**
*Innehåller metoder som hanterar information till och från gränssnittet*
Hämtar TodoList från todo.ts

Innehåller funktioner för att lägga till todos - funktionen hämtar input från DOM och kör sedan funktionen addTodo från klassen TodoList. 
Funktionen printTodos som kör funktionen getTodos från todolist. Loopar igenom, sorterar och skriver ut till DOM. Skriver även ut knapp för att köra funktionen marktodocompleted från todoList samt knapp för att köra funktionen deletetodo som i sin tur kör todolist funktionen deletetodo. 
Filen innehåller även en funktion för att tömma localstorage samt DOM. 


