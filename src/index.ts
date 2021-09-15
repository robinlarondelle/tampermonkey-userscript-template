import { add } from './example'

async function main () {
  console.log('script start')
  console.log(`1 + 2 = ${add(1, 2)}`)
}

main().catch(e => {
  console.log(e)
})
