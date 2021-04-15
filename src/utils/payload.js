export default function (){
    const token = window.localStorage.getItem('token')
    if(token){
        const [header,payload,signature] = token.split('.')

        const base64 = payload.replace('-','+').replace('_','/')

        const jsonObj = JSON.parse(window.atob(base64))

        return jsonObj
    }else{return null}
}