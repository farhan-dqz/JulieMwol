FROM fusuf/whatsasena:latest

RUN git clone https://Ichukarikk:8547583939hisham@github.com/Ichukarikk/sophia-2.0 /root/WhatsAsenaDuplicated
WORKDIR /root/WhatsAsenaDuplicated/
ENV TZ=Europe/Istanbul
RUN npm install supervisor -g
RUN yarn install --no-audit

CMD ["node", "bot.js"]




