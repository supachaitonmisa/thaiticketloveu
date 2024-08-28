
import express from 'express';
const router = express.Router()
import 'dotenv/config'
import { authRoute } from './routers/auth.route.js';
import { unAuthRoute } from './routers/un-auth.route.js';
import bodyParser from 'body-parser';
const app = express()
const port = process.env.PORT 

const appInitialize = () => {
    let countInvalidMethod = 0;
    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(bodyParser.json());

    // app.use(authPreFix, authentication)
    // app.use(authPreFixAdmin, authentication, authorization(["admin"]))

    authRoute.forEach(EleAuthRoute => {

        if(EleAuthRoute.method.toUpperCase() == "GET"){
            router.get(EleAuthRoute.path, EleAuthRoute.instance)
        }else if(EleAuthRoute.method.toUpperCase() == "PUT"){
            router.put(EleAuthRoute.path, EleAuthRoute.instance)
        }else if(EleAuthRoute.method.toUpperCase() == "POST"){
                router.post(
                    EleAuthRoute.path, 
                    EleAuthRoute.instance
                )
        }else if(EleAuthRoute.method.toUpperCase() == "PATCH"){
            router.patch(EleAuthRoute.path, EleAuthRoute.instance)
        }else if(EleAuthRoute.method.toUpperCase() == "DELETE"){
            router.delete(EleAuthRoute.path, EleAuthRoute.instance)
        }else{
            countInvalidMethod+=1
            console.log("Not match router")
        }
        
    })

    unAuthRoute.forEach(EleUnAuthRoute => {
        if(EleUnAuthRoute.method.toUpperCase() == "GET"){
            router.get(EleUnAuthRoute.path, EleUnAuthRoute.instance)
        }else if(EleUnAuthRoute.method.toUpperCase() == "PUT"){
            router.put(EleUnAuthRoute.path, EleUnAuthRoute.instance)
        }else if(EleUnAuthRoute.method.toUpperCase() == "POST"){
                router.post(
                    EleUnAuthRoute.path, 
                    EleUnAuthRoute.instance
                )
        }else if(EleUnAuthRoute.method.toUpperCase() == "PATCH"){
            router.patch(EleUnAuthRoute.path, EleUnAuthRoute.instance)
        }else if(EleUnAuthRoute.method.toUpperCase() == "DELETE"){
            router.delete(EleUnAuthRoute.path, EleUnAuthRoute.instance)
        }else{
            countInvalidMethod+=1
            
        }
    })

    console.log(`Setting method invalid count ${countInvalidMethod}`)
}

appInitialize();
app.use(router)

app.listen(port, () => {
  console.log(`App started and listening on port ${port}`)
});