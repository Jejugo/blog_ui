import EditorJsToHtml from "editorjs-html"

export const edjsParser = EditorJsToHtml({
  checkList: (block) => {
    const items = block.data.items || []
    const html = items
      .map((item) => {
        const checked = item.checked ? "checked" : ""
        return `
          <div class="checklist-item">
            <input type="checkbox" disabled ${checked}>
            <span>${item.text}</span>
          </div>
        `
      })
      .join("")
    return `<div class="checklist-block">${html}</div>`
  },
  table: (block) => {
    const { content, withHeadings } = block.data
    let html = `<table style="border-collapse: collapse; border: 1px solid grey;">`

    content.forEach((row, rowIndex) => {
      html += "<tr>"
      row.forEach((cell) => {
        if (withHeadings && rowIndex === 0) {
          html += `<th>${cell}</th>`
        } else {
          html += `<td style="border: 1px solid grey;" ${!cell.length && `style="width: 80px"`}>${cell}</td>`
        }
      })
      html += "</tr>"
    })

    html += "</table>"
    return html
  },
  // image: (block) => {
  //   const { src, alt } = block.data
  //   return `<img src="${src}" alt="${alt}" style="max-width: 80%;">`
  // },
})
