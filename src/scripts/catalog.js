export const catalog = (harvestedFood) => {

    let htmlString = `<article><div class="crops">`

    for (const crop of harvestedFood) {

        htmlString += `<section class="crop__card">
            <div class="crop__type">${crop.type}</div>
            </section>`
    }
    htmlString += `</div></article>`

    return htmlString
}