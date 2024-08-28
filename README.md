# Prerequisites
- Docker
- NodeJs v20.0.0 

# Installing
## 1. Create docker bridge
````
docker network create -d bridge ticket_love_u_data_network
````

## 2. Start all services
````
docker-compose up --build -d
````

## 3. Enjoy!
---
## DOCKER
- ## Command
    - inspect: `docker <network> inspect`
    - rebuild: `docker compose up --build -d`
    - into container: `docker exec -it <container_service> sh`
    - compose-up: `docker compose up --build -d`
    - compose-down: `docker-compose down`