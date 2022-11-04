ARG build_tag=latest
FROM igotregistry.azurecr.io/ui-static:$build_tag

WORKDIR /app/dist
COPY iGOT/client-assets/dist www/en/assets
RUN npm install --production
EXPOSE 3004

CMD [ "npm", "run", "serve:prod" ]
