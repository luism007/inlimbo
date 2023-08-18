FROM nginx

EXPOSE 80
# Delete the default welcome page for nginx
RUN rm /usr/share/nginx/html/*

# Copy custom configurations from default.conf over
COPY ./default.conf /etc/nginx/conf.d/default.conf

# Start nginx in the foreground to interface nicely with Docker.
CMD ["nginx", "-g", "daemon off;"]