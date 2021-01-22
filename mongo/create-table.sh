#!/bin/bash
# https://www.stuartellis.name/articles/shell-scripting/#enabling-better-error-handling-with-set
set -Eeuo pipefail
    
# Based on mongo/docker-entrypoint.sh
# https://github.com/docker-library/mongo/blob/master/docker-entrypoint.sh#L303
if [ "root" ] && [ "123456" ]; then
    "${mongo[@]}" -u "root" -p "123456" --authenticationDatabase "admin" "customer-app" <<-EOJS
        db.createCollection('meuuser2');
        db.meuuser2.insert({
            "first_name": "teste4",
            "last_name": "teste4",
            "email": "teste4",
            "phone": "teste4",
            "address": "teste4",
            "description": "teste4",
        });
    EOJS
fi