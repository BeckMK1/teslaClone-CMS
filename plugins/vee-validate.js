import { defineRule } from 'vee-validate';
import postCodes from '~/data/postcodes';
export default defineNuxtPlugin(() => {
    defineRule('required', value => {
        if (!value || !value.length) {
          return 'This field is required';
        }
        return true;
      });

      defineRule('file', value =>{
        if(!value || !value.length){
          return true;
        }
        const filePngPattern = new RegExp('([a-zA-Z]:(\\w+)*\\[a-zA-Z0_9]+)?.png')
        const fileJpgPattern = new RegExp('([a-zA-Z]:(\\w+)*\\[a-zA-Z0_9]+)?.jpg')
        if(filePngPattern.test(value) || fileJpgPattern.test(value)){
          return true
        }
        return "This field must be a file path and type"
      });

      defineRule('link', value => {
        if(!value || !value.length){
            return true;
        }
        const  urlPattern = new RegExp('^(https?:\\/\\/)?'+ // protocol
        '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|'+ // domain name
        '((\\d{1,3}\\.){3}\\d{1,3}))'+ // OR ip (v4) address
        '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*'+ // port and path
        '(\\?[;&a-z\\d%_.~+=-]*)?'+ // query string
        '(\\#[-a-z\\d_]*)?$','i')
        const fileMp4Pattern = new RegExp('([a-zA-Z]:(\\w+)*\\[a-zA-Z0_9]+)?.mp4')
        if(urlPattern.test(value) || fileMp4Pattern.test(value)){
          return true
        }
        return "This field must be a valid link"
      
      });
      defineRule('postCode', value => {
        if(!value || !value.length){
            return true;
        }
        if(!postCodes.includes(value)){
            return "This field must be a valid postcode"
        }
        return true
      });
})