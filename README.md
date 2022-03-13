# NeoCalendar

## Telepítés
````
npm i https://github.com/sanya6456/Calendar-library.git
````

## Használata

````
import NeoCalendar from "neocalendar";
import "neocalendar/style";      

const testClass = new NeoCalendar('.selector', {
    data: [
        {
            "id": 1,
            "name": "Lakossági fórum",
            "start_date": "2022-03-24T17:30:00",
            "end_date": "2022-03-25T19:00:00",
            "url": "https://www.google.hu"
        }
    ]
}, 'hu');

testClass.render();
````

## Funkciók

- Hónap nézet
- Lista nézet
- Responsive
- Példányosítható
- Nyelvesített (en, hu)

## CSS
Erre az osztályra rakja rá a stílust: **neo-calendar**
````
import "neocalendar/style";       
````     

## JavaScript
````
import NeoCalendar from "neocalendar";      
````

## DOM
````
<div class="neo-calendar selector"></div>
````
