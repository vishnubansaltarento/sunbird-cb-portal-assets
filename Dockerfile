ARG build_tag=latest
ARG portal_dir=iGOT
ARG image_name=ui-static
FROM igotregistry.azurecr.io/$image_name:$build_tag

WORKDIR /app/dist
COPY $portal_dir/client-assets/dist www/en/assets
RUN npm install --production
EXPOSE 3004

CMD [ "npm", "run", "serve:prod" ]
