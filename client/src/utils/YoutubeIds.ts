/**
 * Extracts youtube id from url or youtube id
 * @throws if the format is invalid
 * @param url an url or an id
 */
export const extractIdFromUrl = (url: string) => {
  if(isValidId(url)){
    return url
  } 

  let id = (new URL(url)).searchParams.get('v');
  if(id && isValidId(id)) return id;

  throw 'No id found'
};

const isValidId = (id: string)=>{
  return /^[a-zA-Z0-9-_]{11}$/.test(id)
}