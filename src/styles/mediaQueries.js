export const m = '@media (min-width: 880px)'
export const l = '@media (min-width: 1440px)'
export const lx = '@media (min-width: 2460px)'

const repeatCharacter = (character, amount) => {
    let newCharacter = ''

    if (amount === 0) {
        return ''
    }

    for (; newCharacter.length <= amount;) {
        newCharacter += character
    }
}
const breakpoints = [ 880, 1440, 2460 ]
let mq = {}

breakpoints.map(
    (bp, i ) => {
        mq = { ...mq, i: "" }
    }
)

export default mq