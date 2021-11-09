export function Card(title) {
  const template = `
    <div class="card">
      <div class="title">
        ${title}
      </div>
    </div>
  `
  return template
}