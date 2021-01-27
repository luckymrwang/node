FROM node:v1

RUN sed -i 's/dl-cdn.alpinelinux.org/mirrors.aliyun.com/g' /etc/apk/repositories
RUN apk add --no-cache python3 py3-pip
RUN npm config set registry https://registry.npm.taobao.org/
COPY node_modules /node_modules
WORKDIR /home/banana