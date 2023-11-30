import { AnyARecord } from "dns";
import { validateHeaderValue } from "http";
import {Resend} from "resend";

const resend = new Resend(process.env.RESEND_API_KEY); 
const validatString = ((stringData: unknown, maxLength:number) => {
     if(!stringData|| typeof stringData !== "string" || stringData.length > maxLength){
        return false
       }
    return true
})

export const sendEmail = async (formData: FormData) => {
   const senderEmail = formData.get('senderEmail' )            
   const message = formData.get('message' ) 

  
   if(!validatString(senderEmail, 500)){
        return{
            error: "Invalid sender email"
        }
   }

   if(!validatString(message, 5000)){
    return{
        error: "Invalid message"
        }
    }

    try{
        await resend.sendEmail({
            from: 'Contact Form<onbboarding@resend.dev>',
            to:'corpuz52@gmail.com', 
            subject:'message from portfolio',
            replyTo: senderEmail as string,
            text:message as string 
        })
    } catch (error: any) {
      return{
        error: error.message 
      }  
    }

   

}