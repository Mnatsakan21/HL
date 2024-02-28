export const address = "http://localhost:5005/"
 
export const dates = {
    '01': 'Հունվար',
    '02': 'Փետրվար',
    '03': 'Մարտ',
    '04': 'Ապրիլ',
    '05': 'Մայիս',
    '06': 'Հունիս',
    '07': 'Հուլիս',
    '09': 'Սեպտեմբեր',
    '10': 'Հոկտեմբեր',
    '11': 'Նոյեմբեր',
    '12': 'Դեկտեմբեր',
}

export const countries = {
  "armenia":"Հայաստան",
  "1":"Հայաստան",
  "turkey":"Թուրքիա",
  "2":"Թուրքիա",
  "georgia":"Վրաստան",
  "3":"Վրաստան",
  "iran":"Իրան",
  "4":"Իրան",
  "azerbaijan":"Ադրբեջան",
  "5":"Ադրբեջան",

}
export const countriesfilter = {
  "turkey":2,
  "georgia":3,
  "iran":4,
  "azerbaijan":5,

}

export const categories = {
  "1":"Քաղաքական",
  "2":"Իրավական",
  "3":"Ռազմական",
  "4":"Հասարակություն",
  "politics":1,
  "legal":2,
  "military":3,
  "society":4

}
export function handleDate(createdAt){
    if(!createdAt)return
    const date = createdAt.split("-")
    return `${dates[date[1]]} ${date[2].slice(0,2)},${date[0]}`
  }

export function scrollTop(){
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  })
}