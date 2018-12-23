import { apiUrl } from '../consts';
export async function download(url) {
    return await fetch(`${apiUrl}/single/download/${url}`, {
        method:"GET"
    }).then(res=>{
        return res.blob()
    })
    .then(blob=>URL.createObjectURL(blob))
    .catch(err=>{console.error(err)})
}