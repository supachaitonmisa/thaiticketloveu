# Use an official Nginx image
FROM nginx:alpine

# Remove the default Nginx configuration file
RUN rm /etc/nginx/conf.d/default.conf

# Copy your Nginx configuration file to the container
COPY nginx.conf /etc/nginx/conf.d

# Copy your static files to the Nginx html directory
COPY . /usr/share/nginx/html

# Expose port 80
EXPOSE 3000

# Start Nginx when the container starts
CMD ["nginx", "-g", "daemon off;"]
