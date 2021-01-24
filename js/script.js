$(document).ready (function (){

    // Creo un array di oggetti di icone
    // I create an array of icon objects
      const icons = [
          {
            name: 'cat',
            prefix: 'fa-',
            type: 'animal',
            family: 'fas',
          },
          {
            name: 'crow',
            prefix: 'fa-',
            type: 'animal',
            family: 'fas',
          },
          {
            name: 'dog',
            prefix: 'fa-',
            type: 'animal',
            family: 'fas',
          },
          {
            name: 'dove',
            prefix: 'fa-',
            type: 'animal',
            family: 'fas',
          },
          {
            name: 'dragon',
            prefix: 'fa-',
            type: 'animal',
            family: 'fas',
          },
          {
            name: 'horse',
            prefix: 'fa-',
            type: 'animal',
            family: 'fas',
          },
          {
            name: 'hippo',
            prefix: 'fa-',
            type: 'animal',
            family: 'fas',
          },
          {
            name: 'fish',
            prefix: 'fa-',
            type: 'animal',
            family: 'fas',
          },
          {
            name: 'carrot',
            prefix: 'fa-',
            type: 'vegetable',
            family: 'fas',
          },
          {
            name: 'apple-alt',
            prefix: 'fa-',
            type: 'vegetable',
            family: 'fas',
          },
          {
            name: 'lemon',
            prefix: 'fa-',
            type: 'vegetable',
            family: 'fas',
          },
          {
            name: 'pepper-hot',
            prefix: 'fa-',
            type: 'vegetable',
            family: 'fas',
          },
          {
            name: 'user-astronaut',
            prefix: 'fa-',
            type: 'user',
            family: 'fas',
          },
          {
            name: 'user-graduate',
            prefix: 'fa-',
            type: 'user',
            family: 'fas',
          },
          {
            name: 'user-ninja',
            prefix: 'fa-',
            type: 'user',
            family: 'fas',
          },
          {
            name: 'user-secret',
            prefix: 'fa-',
            type: 'user',
            family: 'fas',
          }
      ];

    // Creo un array di colori
    // I create an array of colors
      const colors = [
          'blue',
          'orange',
          'purple'
      ];

    // Creo un array di 3 elementi (types) utilizzando forEach
    // I create an array of 3 elements (types) using forEach

    // // //  const types = [];
    // // // icons.forEach((element) => {
    // // //     if (!types.includes(element.type)) {
    // // //         types.push(element.type);
    // // //     }
    // // // });
    // // // console.log(types);

      const genderTypes =  getTypes(icons);
      console.log(genderTypes);


    // Mappo l'array (icons) per collegare gli indici di (colors) e (type)
    // I map the array (icons) to link the index of (colors) and (type)
      const iconsColor = icons.map((element) => {

          const indexOfType = genderTypes.indexOf(element.type);
          console.log(indexOfType);

          return {
              ...element,
              color : colors[indexOfType]
          }

      });
      console.log(iconsColor);


    // Stampo tutti gli elementi colorati con il proprio colore
    // I print all the colored elements with their own color
      function printIcons(array,container) {
        container.html('');
        array.forEach((element) => {

          const {name, family, prefix, type, color} = element;

          container.append(
            `
            <div class="icon">
                <i class="${family} ${prefix}${name}" style="color:${color};"></i>
                <div class="title">${name.toUpperCase()}</div>
            </div>
            `
          )

        });
      };
      const container = $('.icons');
      printIcons(iconsColor,container);


    // Stampo le opzioni della select riferendomi all'array dei tipi che abbiamo generato
    // I print the options of the select referring to the array of types we have generated
      const select = $('#type');
      printOptions(genderTypes,select);


    // Vizualizzo gli elementi filtrati ogno volta che cambia la opzione
    // I display the filtered items every time the option changes
      select.change(function(){
        const selected = $(this).val();

        const filteredIcon = filterValue(iconsColor,selected);

        printIcons(filteredIcon,container);
      });

});






// - ******************** FUNCTIONS ********************

// Funzione che crea un nuovo array che estrapola i valori 'type' di un oggetto
// Function that creates a new array that extrapolates the 'type' values of an object
  function getTypes(array){

      const types = [];

      array.forEach((element) => {

          if (!types.includes(element.type)) {
              types.push(element.type);
          };

      });

      return types;
  };


// Funzione per stampare le opzioni della select
// Function to print the options of the select
  function printOptions(array,select){

    array.forEach((element) => {
      select.append (
        `<option value="${element}">${element.toUpperCase()}</option>`
      );
    });

  };

// Filtro le opzioni che faranno visualizzare l'elemento selezionato
// Filter the options that will cause the selected item to be displayed
  function filterValue(array,type){

    const filteredIcons = array.filter((element) => {
      return element.type == type;
    });

    // Se il primo elemento è selezionato visualitto tutti
    // If the first item is selected, all are displayed
    if (filteredIcons.length > 0) {
      return filteredIcons;
    }

    return array;
  };