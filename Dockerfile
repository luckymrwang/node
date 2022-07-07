FROM node:14.15-slim

COPY banana /home/banana
WORKDIR /home/banana
ENTRYPOINT [ "node", "app.js" ]

