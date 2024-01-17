import { defineRule } from 'vee-validate';
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
        if(!urlPattern.test(value)){
            return "This field must be a valid link"
        }
        return true
      });
})