import {ios, android} from "platform-detect/os.mjs"
import vcard from "vcard-generator";

import {
    isAndroid
} from "react-device-detect";

import { saveAs } from "file-saver";


export function isIos(name, surname, midname, phone, androidFunc) {
    /*try{
        if (isAndroid) {
            androidFunc()
        }
        else {
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
                    ]
                })
           ]), name+".vcf")
        }        
    }catch (e){
        console.log(e)
    }*/
    androidFunc()

}