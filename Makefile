CONTAINER_FLAGS = --rm --detach \
		  --publish 8080:80 \
		  --volume ./:/usr/share/nginx/html:ro,U,Z
IMAGE = docker.io/library/nginx:alpine
pod:
	podman run $(CONTAINER_FLAGS) $(IMAGE) $(CONTAINER_CMD)
