export default function SendWhatsapp({num}){
    const url = `whatsapp://send/?phone=${num}`
    
    return url
    
}