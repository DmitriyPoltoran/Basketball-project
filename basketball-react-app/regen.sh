rm -rf gen && rm -rf node_modules/typescript-fetch-api && java -jar ../basketball-api-service/utils/swagger-codegen-cli-3.0.16.jar generate -i ../basketball-api-service/api/swagger/swagger.yaml -l openapi -o ../basketball-api-service/gen && yarn run api && yarn add typescript typescript-fsa typescript-fsa-reducers && yarn add file:gen/api 