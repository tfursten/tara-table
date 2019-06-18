/* global data */
const root = document.getElementById('root')

// Initialize Materialize-CSS Tabs
M.Tabs.init(document.querySelector('.tabs'))

const { ranks } = data.meta

const buildTree = (data) => {

  const body = data.children.length === 0
    ? ''
    : `
      <div class="collapsible-body">
        ${data.children.map(item => buildTree(item)).join('\n')}
      </div>
    `

  return `
    <ul class="node collapsible expandable active">
      <li>
        <div class="row collapsible-header ${ranks[data.level].color}">
          <div class="col s2">${data.level} - ${data.name}</div>
          ${data.values.map(value => `<div class="col s2">${Number(value).toFixed(0)}</div>`).join('\n')}
        </div>
        ${body}
      </li>
    </ul>
  `

}

const header = `
  <div id="data-header" class="row blue darken-3 white-text">
      ${data.values.map(value =>
        `<div class="col s2">${value}</div>`
      ).join('\n')}
  </div>
`

root.innerHTML = header + data.children.map(buildTree).join('\n')

// Array.from(document.getElementsByClassName('expando')).forEach(li => { 
//   li.addEventListener('click', () => {
//     const lists = Array.from(li.parentElement.getElementsByTagName('UL'))
//     const leaves = Array.from(li.parentElement.getElementsByClassName('leaf'))
//     lists.concat(leaves).forEach(ul => { ul.classList.toggle('inactive') })
//   })
// })

const collapsibles = document.querySelectorAll('.collapsible.expandable');
const collapsible_instances = M.Collapsible.init(collapsibles, {accordion: false});