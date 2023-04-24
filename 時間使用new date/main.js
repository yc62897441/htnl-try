const target1 = document.querySelector('#target1')
target1.innerHTML = new Date()

const target2 = document.querySelector('#target2')
target2.innerHTML = new Date(1481361366000)

const target3 = document.querySelector('#target3')
target3.innerHTML = new Date(1990, 0, 1)

const target4 = document.querySelector('#target4')
target4.innerHTML = new Date(1990, 0, 1, 20, 30, 15)

const target5 = document.querySelector('#target5')
target5.innerHTML = new Date('2017-07-09 00:00:00 +0800')

const target6 = document.querySelector('#target6')
target6.innerHTML = Date.now()
