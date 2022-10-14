db.getSiblingDB('graylog').createUser({
    user: "graylog",
    pwd: "password",
    roles: [{
        role: "readWrite",
        db: "graylog"
    }]
});