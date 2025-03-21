import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { firestore } from '../../firebaseConfig'; 

// Mesajları almak için bir async thunk oluşturuyoruz
export const fetchMessages = createAsyncThunk('chat/fetchMessages', async (chatRoomId) => {
  const snapshot = await firestore
    .collection('chatRooms')
    .doc(chatRoomId)
    .collection('messages')
    .orderBy('timestamp')
    .get();
  
  const messages = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
  return messages;
});

const chatSlice = createSlice({
  name: 'chat',
  initialState: {
    messages: [],  // İlk başta messages boş bir dizi olacak
    status: 'idle',  // Durum 'idle' olacak, 'loading' ve 'failed' durumları da olabilir
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchMessages.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchMessages.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.messages = action.payload;  // Mesajları store'a ekliyoruz
      })
      .addCase(fetchMessages.rejected, (state) => {
        state.status = 'failed';
      });
  },
});

export default chatSlice.reducer;
