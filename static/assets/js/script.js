const wrapper = document.querySelector('.wrapper')

const header_row = data.values.map(value => `<div class="col s2">${value}</div>`).join('\n')

const colors = {
  "species": "white",
  "genus": "blue lighten-5",
  "family": "blue lighten-4",
  "class": "blue lighten-3",
  "order": "blue lighten-2",
  "phylum": "blue lighten-1",
  "superkingdom": "blue"
};


const buildTree = (data) => {

  if (data.children.length === 0) {
    return (
      `<li class="row collection-item list-item ${colors[data.level]}">
          <div class="col s2">${data.name} - ${data.level}</div>
          ${data.values.map(value => `<div class="col s2">${Number(value).toFixed(0)}</div>`).join('\n')}
        </li>`
    )
  }

  const row = data.name === 'root'
    ? (
        `<li class="row collection-item header-list-item blue darken-3 white-text">
          ${data.values.map(value => 
            `<div class="col s2">${value}</div>`
          ).join('\n')}
        </li>`
      )
    : (
      `<li class="row collection-item list-item ${colors[data.level]} expando" data-item="${data.name}">
          <div class="col s2">${data.name} - ${data.level}</div>
          ${data.values.map(value => `<div class="col s2">${Number(value).toFixed(0)}</div>`).join('\n')}
        </li>`
      )
      

  return (
    `<ul class="collection">
      ${row}
      ${data.children.map(item => buildTree(item)).join('\n')}
    </ul>`
  )

}

wrapper.innerHTML = buildTree(data)

Array.from(document.getElementsByClassName('expando')).forEach(li => { 
  li.addEventListener('click', () => {
    const lists = Array.from(li.parentElement.getElementsByTagName('UL'))
    
    lists.forEach(ul => { ul.classList.toggle('active') })
  })
})

