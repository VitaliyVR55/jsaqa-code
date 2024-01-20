function generateRandomString(length) {   // генератор случайной email и парля
    var result = '';
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for (var i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * (charactersLength-1)));
    }
    return result;
}

const invalidEmail = generateRandomString(7) + '@gmail.com';
const invalidPassword = generateRandomString(10);

module.exports = { invalidEmail, invalidPassword };