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
    console.log(contacts.map(e => `URL;TYPE=${e.type}:${e.uri}`).join("\n"))
    const template = `BEGIN:VCARD\nVERSION:3.0\nN:${name};${surname};${midname}\n\
NICKNAME;CHARSET=UTF-8:1\nTITLE;CHARSET=UTF-8:${name}\nTEL:${phone}\n${contacts.map(e => `URL;TYPE=${e.type}:${e.uri}`).join("\n")}\nEND:VCARD`
    console.log(template)
saveAs(new Blob([template]), "easycard.vcf")
}