/* global data */
const root = document.getElementById('root')

// Initialize Materialize-CSS Tabs
M.Tabs.init(document.querySelector('.tabs'))

const { ranks } = data.meta

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

const buildTree = (data) => {

  const isLeaf = data.children.length === 0
  const body = isLeaf
    ? ''
    : `
      <div class="collapsible-body">
        ${data.children.map(item => buildTree(item)).join('\n')}
      </div>
    `

  return `
    <ul class="node collapsible expandable active">
      <li class="${isLeaf ? 'leaf' : 'node'}">
        <div class="row collapsible-header ${ranks[data.level].color} ">
          <div class="col s4">
            ${ isLeaf
              ? '<i class="material-icons arrow-wrapper"></i>'
              : '<i class="material-icons arrow-wrapper arrow">keyboard_arrow_right</i>'
            }
            <div>${capitalizeFirstLetter(data.level)} - ${capitalizeFirstLetter(data.name)} - ${data.taxid}</div>
          </div>
          ${data.values.map(value => `<div class="col s2">${Number(value).toFixed(0)}</div>`).join('\n')}
        </div>
        ${body}
      </li>
    </ul>
  `

}

const header = `
  <div id="data-header" class="row blue darken-3 white-text">
    <div class="col s4">${data.values[0]}</div>
      ${data.values.slice(1,5).map(value =>
        `<div class="col s2">${value}</div>`
      ).join('\n')}
  </div>
`

root.innerHTML = header 

root.innerHTML += data.children.map(buildTree).join('\n')



// const headers = Array.from(document.getElementsByClassName('collapsible-header'))
// headers.forEach(header => {
//   header.addEventListener('click', () => {
//     if ([...header.parentElement.classList].includes('active')) {
//       header.querySelector('.arrow').textContent = '▶'
//     } else {
//       header.querySelector('.arrow').textContent = '▼'
//     }
//   })
// })

const collapsibles = document.querySelectorAll('.collapsible.expandable');
const collapseOptions = {
  accordion: false,
  onOpenStart: li => li.querySelector('.arrow').textContent = "keyboard_arrow_down",
  onCloseStart: li => li.querySelector('.arrow').textContent = "keyboard_arrow_right",
}
const collapsible_instances = M.Collapsible.init(collapsibles, collapseOptions);