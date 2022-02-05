import { myFirestore, storage, timestamp , dTimeStamp } from '../firebase/config'
import { getDownloadURL, ref , uploadBytesResumable } from 'firebase/storage'
import { useEffect, useState } from 'react'
import {  addDoc, collection } from 'firebase/firestore'

const useStorage = (file) =>{
    const [progress,setProgess] = useState(0)
    const [error,setError] = useState(null)
    const [url,setUrl] = useState(null)

    useEffect(()=>{
        const storageRef = ref(storage, file.name)
        const uploadTask = uploadBytesResumable( storageRef , file )
        const collectionRef = collection(myFirestore,'feeds')
        const favoriteRef = collection(myFirestore,"favorite")

        uploadTask.on('state_changed',(snap)=>{
            const calProgress = (snap.bytesTransferred / snap.totalBytes) * 100;
            setProgess(calProgress)
        },(err)=>{
            setError(err)
        },()=>{
            const createdAt = timestamp;
            const Name = file.name;
            const options ={
                day : 'numeric',
                month : 'long',
                year : 'numeric'
              }
            const date = dTimeStamp.toDate().toLocaleDateString('en-US',options);
                getDownloadURL(uploadTask.snapshot.ref).then((url) =>{
                    addDoc(collectionRef,{url,createdAt,Name,date})
                    setUrl(url)
                })
            }) 
    },[file])

    return { progress , error , url }
}

export default useStorage



