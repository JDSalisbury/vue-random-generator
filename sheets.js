const fetch = require("node-fetch");



let api_url = `https://spreadsheets.google.com/feeds/worksheets/1VhCYzkaGSTjYhuq7PSymUhy9OapbNQPevOJabd5-gNA/public/full?alt=json`

let master_link = 'https://spreadsheets.google.com/feeds/list/1VhCYzkaGSTjYhuq7PSymUhy9OapbNQPevOJabd5-gNA/o88wbp9/public/full?alt=json'
let some_data = []

async function set_data(url){
    let response = await fetch(url)
    
    let link_list = await response.json()
    // console.log(link_list.feed.entry)
    return link_list.feed.entry
}

console.log(set_data(api_url))

// fetch(api_url)
//     .then(res => res.json())
//     .then(data => console.log(data.feed.entry))
//     .catch((error) => {
//         console.error('Error:', error);
//     });


// fetch(master_link).then(res => res.json()).then(data => console.log(data.feed.entry));