import { db } from '../../firebaseConfig';
import { collection, addDoc, serverTimestamp } from "firebase/firestore";

export const sendMessage = async (chatRoomId, senderId, text) => {
  try {
    await addDoc(collection(db, 'chatRooms', chatRoomId, 'messages'), {
      senderId,
      text,
      timestamp: serverTimestamp(),
    });
  } catch (error) {
    console.error('Mesaj gönderme hatası:', error);
  }
};
