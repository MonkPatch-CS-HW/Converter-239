const area10 = document.getElementById('num10')
const area239 = document.getElementById('num239')

const charset = '239'
const table = { to: {}, from: {} }
for (let i = 0; i < charset.length; i++) {
  table.to[i] = charset[i]
  table.from[charset[i]] = i
}

area10.addEventListener('input', (e) => {
  area10.value = (`${area10.value}`.match(/[0-9]/g) ?? []).join('')
  const num = bigInt(area10.value, 10)
  area239.value = num.toString(3).replace(/[012]/g, (m) => table.to[m])
})

area239.addEventListener('input', (e) => {
  area239.value = (`${area239.value}`.match(/[239]/g) ?? []).join('')
  const num = bigInt(area239.value.replace(/[239]/g, (m) => table.from[m]), 3)
  area10.value = num.toString(10)
})