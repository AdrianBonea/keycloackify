FROM node:18 AS keycloakify_jar_builder

RUN apt-get update \
    && apt clean

RUN apt-get install -y openjdk-11-jdk \ 
    && apt clean
RUN apt-get install -y maven \ 
    && apt clean


COPY ./package.json ./yarn.lock /opt/app/
WORKDIR /opt/app
RUN yarn install --frozen-lockfile
COPY ./ /opt/app/
RUN yarn build-keycloak-theme

FROM quay.io/keycloak/keycloak:latest AS builder
WORKDIR /opt/keycloak
COPY --from=keycloakify_jar_builder /opt/app/build_keycloak/target/keycloakify-starter-keycloak-theme-5.1.3.jar /opt/keycloak/providers/
RUN /opt/keycloak/bin/kc.sh build

FROM quay.io/keycloak/keycloak:latest
COPY --from=builder /opt/keycloak/ /opt/keycloak/
ENV KC_HOSTNAME=localhost
ENTRYPOINT ["/opt/keycloak/bin/kc.sh", "start-dev"]