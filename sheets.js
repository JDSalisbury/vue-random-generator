const fetch = require("node-fetch");



let api_url = `https://spreadsheets.google.com/feeds/worksheets/1VhCYzkaGSTjYhuq7PSymUhy9OapbNQPevOJabd5-gNA/public/full?alt=json`

let master_link = 'https://spreadsheets.google.com/feeds/list/1VhCYzkaGSTjYhuq7PSymUhy9OapbNQPevOJabd5-gNA/o88wbp9/public/full?alt=json'
let some_data = []
const resp = fetch(api_url).then(res => res.json()).then(data => data.feed.entry);

console.log(resp)
// fetch(master_link).then(res => res.json()).then(data => console.log(data.feed.entry));