# graylog-mongo-docker

Graylog Password Secret:
Generate using:
pwgen -N 1 -s 96

Generate Password SHA2:
echo -n "Enter Password: " && head -1 </dev/stdin | tr -d '\n' | sha256sum | cut -d" " -f1

Mongo graylog password:
Please change in mongo-init.js and graylog/.env