# NeoCalendar

## Telepítés
````
npm i git+ssh://git@gitlab.neosoft.hu:668/NP/neo-calendar.git
````

## Függőségek
- **Fontawesome 5.15.4** (Javítva lesz, hogy ne kelljen!)

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
});

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
