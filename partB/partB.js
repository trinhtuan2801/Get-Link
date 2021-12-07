let input = document.getElementById('input')
let getlinkbutton = document.getElementById('getlinkbutton')
let resultbox = document.getElementById('result-box')
let result = document.getElementById('result')
let resultlink = document.getElementById('result-link')

resultbox.style.display = 'none'

getlinkbutton.addEventListener('click', ()=>
{
    let value = input.value
    if (value)
    {
        let getlink = `https://api.shrtco.de/v2/shorten?url=${value}`
        fetch(getlink)
        .then(response => response.json())
        .then(data => 
        {
            resultbox.style.display = 'flex'

            if (data.ok)
            {
                let link = data.result.short_link
                result.innerHTML = 'Link generated!'
                resultlink.innerHTML = link
            }
            else
            {
                result.innerHTML = 'Get link failed!'
                resultlink.innerHTML = ''
            }
            console.log(data)
        })
    }
})


