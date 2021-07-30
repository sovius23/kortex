import {ios, android} from "platform-detect/os.mjs"
import vcard from "vcard-generator";

import {
    isAndroid
} from "react-device-detect";

import { saveAs } from "file-saver";


export function isIos(name, surname, 
    midname, phone, 
    facebook=null, 
    twitter=null,
    vk=null,
    telegram=null, 
    web=null, 
    whatsapp=null, 
    inst=null, photo=null) {

    var contacts = []
    if (telegram) {
        contacts.push({
            type: "telegram",
            uri: telegram
        })
    }
    if (web) {
        contacts.push({
            type: "internet",
            uri: web
        })
    }
    if (whatsapp) {
        contacts.push(
            {
                type: "whatsapp",
                uri: whatsapp
            }
        )
    }
    if (facebook) {
        contacts.push(
            {
                type: "facebook",
                uri: facebook
            }
        )
    }
    if (twitter) {
        contacts.push(
            {
                type: "twitter",
                uri: twitter
            }
        )
    }
    if (vk) {
        contacts.push(
            {
                type: "vk",
                uri: vk
            }
        )
    }
    if (inst) {
        contacts.push(
            {
                type: "instagram",
                uri: inst
            }
        )
    }
    
    try{
            saveAs(new Blob([
                vcard.generate({
                    name : {
                        familyName: name,
                        middleName : midname,
                        givenName: surname
                    },
                    phones : [
                        {
                            type: "work",
                            text : phone
                        }
                    ],
                    urls: contacts,
                    photos: [photo]
                })
           ]), name+".vcf")
        } catch{}
}