import Request from 'super-agent';

export default function doLogin(username, password) {
    return Request
            .post('http://localhost:8080/login')
            .set("Content-Type", "application/json")
            .send({username: username, password: password});

}