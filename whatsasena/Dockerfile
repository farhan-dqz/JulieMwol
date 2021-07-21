FROM fusuf/whatsasena:latest

RUN git clone https://afnanplk:pallikkel1@github.com/afnanplk/asenatest /root/WhatsAsenaDuplicated
WORKDIR /root/WhatsAsenaDuplicated/
ENV TZ=Europe/Istanbul
RUN npm install supervisor -g
RUN yarn install --no-audit

CMD ["node", "bot.js"]
