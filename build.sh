#!/bin/bash

cd ./webflux-poc
chmod +x gradlew
./gradlew bootBuildImage

cd ../webflux-poc-block
chmod +x gradlew
./gradlew bootBuildImage

cd ../webflux-validation-api-poc
chmod +x gradlew
./gradlew bootBuildImag
