export const slugify = (text: string): string => {
  return text
    .toString()
    .normalize('NFD') // Descompone caracteres acentuados (á → a + ´)
    .replace(/[\u0300-\u036f]/g, '') // Elimina diacríticos
    .toLowerCase() // Minúsculas
    .trim() // Elimina espacios al inicio/final
    .replace(/\s+/g, '-') // Espacios → guiones
    .replace(/[^\w\-]+/g, '') // Elimina caracteres no alfanuméricos (excepto guiones)
    .replace(/\-\-+/g, '-'); // Colapsa guiones múltiples
};

// // Ejemplo con tu texto:
// const texto = "Explorando Funciones de ES6 !!";
// const slug = slugify(texto);

// console.log(slug); // "explorando-funciones-de-es6"
