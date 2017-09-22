FROM node:8.5

WORKDIR /app

COPY package.json /app/
COPY package-lock.json /app/
RUN npm install

COPY . /app

ENTRYPOINT [ "node", "bin/sms_brigadistas" ])
