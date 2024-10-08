const { z } = require('zod');

// Schema validaiton object

// body = {
//  title : string
//  desc  : string
// }


const create_todo = z.object({
    title: z.string(),
    desc: z.string()
})

const update_todo = z.object({
    id: z.string(),
})

// exporting both object
module.exports = {
    create_todo: create_todo,
    update_todo: update_todo
}