# micro-frontends-react-vue-auth-mongo

modify the environment variable "MONGODB_HOST" in ./server/.env file to set the mongo connection string

```
copy the ./master-app/env.sample to ./master-app/.env
replace the MASTER_TOKEN value

copy the ./sub-react-app/env.sample to ./sub-react-app/.env
replace the CREATE_CONTENT_REQUEST_URL value

cd sub-react-app
npm install
cd ..

cd sub-vue-app
npm install
cd ..

cd master-app
npm install
cd ..

npm install
npm start

```

Navigate to http://localhost:8080/react

![image](https://github.com/pierluigi-linardi/micro-frontends-react-vue-auth-mongo/assets/15787703/b87c1570-9fb4-470c-b26c-d345e7ddeed9)


