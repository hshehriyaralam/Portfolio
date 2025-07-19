import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { storage } from  './firebaseConfig'


export const uploadImageToFirebase  = async (file : File) => {
    if(!file) return null

    const storageRef  = ref(storage, `images/${Date.now()}-${file.name}`)
    const snapshot =  await uploadBytes(storageRef,file)
    const downloadURL = await getDownloadURL(snapshot.ref)
    return downloadURL
    
}