module.exports = class Google {

    static match(message) {
        return message.content.startWith(',google')
    }

    static action (message) {
        let args = message.content.split(' ')
        args.shift
        message.reply('https://www.google.fr/#q=' + args.join('%20'))
    }

}