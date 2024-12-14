import editorjsCodecup from "@calumk/editorjs-codecup"
import CheckList from "@editorjs/checklist"
import EditorJS from "@editorjs/editorjs"
import Header from "@editorjs/header"
import ImageTool from "@editorjs/image"
import List from "@editorjs/list"
import Table from "@editorjs/table"
import EditorJsToHtml from "editorjs-html"
import React, { memo, useEffect } from "react"

const edjsParser = EditorJsToHtml({
  // Custom parser for the 'checkList' block type
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
  image: (block) => {
    const { file } = block.data
    return `<img src="${file.url}" style="max-width: 80%;">`
  },
})

export const EDITOR_JS_TOOLS = {
  header: Header,
  checkList: CheckList,
  code: editorjsCodecup,
  table: Table,
  list: {
    class: List,
    inlineToolbar: true,
    config: {
      defaultStyle: "unordered",
    },
  },
  image: {
    class: ImageTool,
    config: {
      // Custom uploader for Firebase Storage
      uploader: {
        /**
         * Upload file to Firebase Storage and return an object containing the image URL
         * @param {File} file - File selected from the device
         * @return {Promise.<{success: number, file: {url: string}}>}
         */
        uploadByFile: (file) => {
          return new Promise((resolve, reject) => {
            const formData = new FormData()
            formData.append("file", file)

            fetch(`${process.env.NEXT_PUBLIC_LOCAL_API_URL}/api/upload`, {
              method: "POST",
              headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`,
              },
              body: formData,
            })
              .then((res) => res.json())
              .then((response) => {
                if (response.success) {
                  resolve({
                    success: 1,
                    file: {
                      url: response.file.url,
                    },
                  })
                } else {
                  reject(response.message || "Upload failed")
                }
              })
              .catch((error) => {
                console.error("Upload error:", error)
                reject(error)
              })
          })
        },
        /**
         * Optional: Handle image upload by URL
         * @param {string} url - Image URL
         * @return {Promise.<{success: number, file: {url: string}}>}
         */
        uploadByUrl: (url) => {
          // You can impl ement uploading by URL if needed
          return Promise.resolve({
            success: 1,
            file: {
              url,
            },
          })
        },
      },
    },
  },
}

const Editor = ({
  value,
  setValue,
  editorRef,
  editorBlock = "editorjs-container",
}) => {
  useEffect(() => {
    if (!editorRef.current) {
      const editor = new EditorJS({
        holder: editorBlock,
        data: value,
        tools: EDITOR_JS_TOOLS,
        placeholder: "Start typing...",
        async onChange(api) {
          const data = await api.saver.save()
          const htmlArray = edjsParser.parse(data)
          const html = htmlArray.join("")

          setValue(html)
        },
      })
      editorRef.current = editor
    }

    return () => {
      if (editorRef.current && editorRef.current.destroy) {
        editorRef.current.destroy()
      }
    }
  }, [])

  return <div id={editorBlock} />
}

export default memo(Editor)
