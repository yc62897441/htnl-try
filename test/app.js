const o = {
  a: 'aa',
  b: 'bb',
  c: 'cc',
}

// o?.a?.b || 'ccc' ? console.log('aaa') : console.log('bbb')
o?.a?.b?.c && 'ccc' ? console.log('aaa') : console.log('bbb')

// if (o?.a?.b) {
//   console.log('aaa')
// } else {
//   console.log('bbb')
// }

// error.response?.data?.error?.message || '登入失敗 ! 請檢查帳號密碼'
//   ? '登入失敗 ! 請檢查帳號密碼'
//   : '伺服器異常'

const elements = document.querySelectorAll('.element')
const rollLeft = document.querySelector('#rollLeft')
const rollRight = document.querySelector('#rollRight')

rollLeft.addEventListener('click', () => {
  console.log('rollLeft')

  elements.forEach((element) => {
    element.classList.remove('right')
    element.classList.add('left')
  })
})

rollRight.addEventListener('click', () => {
  console.log('rollRight')
  elements.forEach((element) => {
    element.classList.remove('left')
    element.classList.add('right')
  })
})
