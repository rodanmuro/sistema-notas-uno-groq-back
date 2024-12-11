export const normalizarQuery = (query:string):string=>{
    return query
    .replace(/[\r\n]+/g, ' ') // Replace newline characters with a space
    .replace(/\s{2,}/g, ' ') // Replace multiple spaces with a single space
    .replace(/[´`]/g, "'")   // Replace backticks or slanted quotes with single quotes
    .trim();
}