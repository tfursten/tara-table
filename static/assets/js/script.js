const wrapper = document.querySelector('.wrapper')

const header_row = data.values.map(value => `<div class="col s2">${value}</div>`).join('\n')

const buildTree = (data) => {

  if (data.children.length === 0) {
    return (
      `<li class="row collection-item list-item green lighten-4">
          <div class="col s2">${data.name} - ${data.level}</div>
          ${data.values.map(value => `<div class="col s2">${Number(value).toFixed(2)}</div>`).join('\n')}
        </li>`
    )
  }

  const row = data.name === 'root'
    ? (
        `<li class="row collection-item header-list-item blue">
          ${data.values.map(value => 
            `<div class="col s2">${value}</div>`
          ).join('\n')}
        </li>`
      )
    : (
        `<li class="row collection-item list-item blue lighten-3 expando" data-item="${data.name}">
          <div class="col s2">${data.name} - ${data.level}</div>
          ${data.values.map(value => `<div class="col s2">${Number(value).toFixed(2)}</div>`).join('\n')}
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