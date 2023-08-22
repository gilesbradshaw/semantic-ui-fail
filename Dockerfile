FROM node as build
COPY . /app
WORKDIR /app
RUN npm install
RUN npm run build

FROM nginx
COPY --from=build /app/dist/ /usr/share/nginx/html
COPY ./nginx.conf /etc/nginx/conf.d/default.conf
