const axios = require("axios")
const prompts = require('prompts');

const sendQuestion = async(target, question) => {
    return await axios.post('https://ngl.link/'+target, {question: question},
    {headers: {
        'Content-Type': 'application/json',
    } })

}

(async() => {
    const NGL = await prompts([{
        type: 'text',
        name: 'target',
        message: 'Target ?',
        validate: value => value.length >= 1 ? true : "Question tidak boleh kosong"
    }, {

        type: 'text',
        name: 'question',
        message: 'Question ?',
        validate: value => value.length >= 1 ? true : "Question tidak boleh kosong"
    }])

    sendQuestion(NGL.target, NGL.question)
    .then(async res => {
        if(res.status){
            console.log("Sukses")
        }else{
            console.log("Gagal")
        }
    })
    process.exit(1)
})();