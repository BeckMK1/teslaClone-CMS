import { defineRule } from 'vee-validate';
export default defineNuxtPlugin(() => {
    defineRule('required', value => {
        if (!value || !value.length) {
          return 'This field is required';
        }
        return true;
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