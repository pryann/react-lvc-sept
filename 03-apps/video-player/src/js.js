function fn() {
  return 'function'
}

const fn_exp_1 = () => 'function'

const fn_exp_2 = () => {
  let a = 10
  return a + 10
}

const fn_exp_3 = () => ({
  a: 1,
  b: 2,
  c: 3,
})

const fn_exp_4 = (a, b) => {
  // statemments
  // statemments
  // statemments
  return {
    a: 1,
    b: 2,
    c: 3,
  }
}

const arr = [1, 2, 3, 4, 5]
const vat = 1.2

const applyVat = (item) => item * vat

const ex = arr.map(applyVat)

function fn() {}
