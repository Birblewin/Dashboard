// A FUNCTION TO LOOP THROUGH A STRING TO CHECK IF A VALUE IS A NUMBER
export default function checkIfNumber(string: string, float?: true): boolean{
  if(!string) return false

  for(const letter of string){
    if(letter === "0" || float && letter === '.'){
      continue
    }else if(!parseFloat(letter)){
      return false
    }
  }

  return true
}