
export function getData() {
  return fetch("https://jsonplaceholder.typicode.com/posts")
  .then((data) => data.json())
  .then((result) => {
    const template = `
        ${result.title}
    `; 
    return template
  }); 
}
 
