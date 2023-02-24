const fs = require('fs')
const path = require('path')

export function getJson() {
  const rawData = fs.readFileSync(path.resolve(process.cwd(), 'contentData.json'))
  let jsonData = JSON.parse(rawData)
  return jsonData
}

export function saveJson(jsonData) {
  fs.writeFileSync(path.resolve(process.cwd(), '../../contentData.json'), JSON.stringify(jsonData))
}