const getSecret = (secrets, secretId) => {
    let secret = undefined;
    secrets.forEach((value) => {
        if(value.id === secretId) secret = value;
    });
    return secret;
};

const markSecretAsReaded = (secrets, secretId) => {
    return secrets.map( (value) => {
        if(value.id === secretId) value.status = false;
    })
}

module.exports = {
    getSecret,
    markSecretAsReaded
}