import config from "@/config/config";
import { Client,Account,ID } from "appwrite";

type CreateUserAccount = {
    email: string;
    password: string;
    name: string;
}

type LoginUserAccount = {
    email: string;
    password: string;
}


const appwriteClient = new Client()

appwriteClient.setEndpoint(config.appwriteurl).setProject(config.appwriteproject)


export const account = new Account(appwriteClient);


export class AppwriteService{


    // create new user account inside appwrite

    async  createAccount({email,password,name}:CreateUserAccount) {
        try {
          const useraccount = await account.create(ID.unique(),email, password, name);
          
          if(useraccount){
            return this.loginAccount({email,password})
          }
          else{
                return useraccount
          }
        } catch (error:any) {
            console.log(error)
        } 
        
    }


    async loginAccount({email,password}:LoginUserAccount) {
        
    }
}
