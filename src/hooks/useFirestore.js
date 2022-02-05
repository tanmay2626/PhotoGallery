import { collection, deleteDoc , doc , onSnapshot, orderBy, query } from 'firebase/firestore'
import { useEffect, useState } from 'react'
import { myFirestore } from '../firebase/config'

const useFirestore = (col,selectedDoc,confirm,setConfirm,fav) =>{
    const [docs,setDocs] = useState([])

   if(confirm===true){
    deleteDoc(doc(myFirestore,col,selectedDoc))
    setConfirm(false)
   }

    useEffect(()=>{
        const unsub = query(collection(myFirestore,col),orderBy("createdAt","desc"))
        onSnapshot(unsub,(snap)=>{
            let document = []
            snap.forEach(doc =>{
                document.push({...doc.data(),id : doc.id})
            })
            setDocs(document)
        })
    },[col])

    return { docs }
}

export default useFirestore