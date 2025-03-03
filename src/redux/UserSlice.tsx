import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { createUserWithEmailAndPassword, sendEmailVerification, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { auth } from '../../firebaseConfig';
import AsyncStorage from '@react-native-async-storage/async-storage';

// Sadece gerekli ve serileştirilebilir alanları içeren bir user objesi oluşturdum
const serializeUser = (firebaseUser) => {
    if (!firebaseUser) return null;
    
    return {
        uid: firebaseUser.uid,
        email: firebaseUser.email,
        emailVerified: firebaseUser.emailVerified,
        displayName: firebaseUser.displayName || null,
        photoURL: firebaseUser.photoURL || null,
        lastLoginAt: firebaseUser.lastLoginAt || null,
        createdAt: firebaseUser.createdAt || null
    };
};

export const login = createAsyncThunk(
    'user/login',
    async ({ email, password }, { rejectWithValue }) => {
        try {
            const userCredential = await signInWithEmailAndPassword(auth, email, password);
            
            // User ve token bilgilerini serileştirilebilir formatta döndür
            const token = await userCredential.user.getIdToken();
            await AsyncStorage.setItem("userToken", token);
            
            return {
                token,
                user: serializeUser(userCredential.user)
            };
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);

// Logout işlemi için async thunk
export const logoutAsync = createAsyncThunk(
    'user/logoutAsync',
    async (_, { rejectWithValue }) => {
        try {
            await signOut(auth);
            await AsyncStorage.removeItem("userToken");
            return null;
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);

// Register işlemi için async thunk
export const register = createAsyncThunk(
    'user/register',
    async ({ email, password }, { rejectWithValue }) => {
        try {
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            const user = userCredential.user;
            
            // Email doğrulama gönder
            await sendEmailVerification(user);
            
            // Token'ı kaydet ve serileştirilebilir user objesini oluştur
            const token = user.stsTokenManager.accessToken;
            await AsyncStorage.setItem("userToken", token);
            
            return {
                token,
                user: serializeUser(user)
            };
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);

const initialState = {
    currentUser: null,
    token: null,
    isAuth: false,
    isLoading: false,
    error: null
};

export const UserSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        logout: (state) => {
            state.currentUser = null;
            state.token = null;
            state.isAuth = false;
            state.error = null;
        },
        clearError: (state) => {
            state.error = null;
        }
    },
    extraReducers: (builder) => {
        builder
            // Login cases
            .addCase(login.pending, (state) => {
                state.isLoading = true;
                state.error = null;
            })
            .addCase(login.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isAuth = true;
                state.currentUser = action.payload.user;
                state.token = action.payload.token;
                state.error = null;
            })
            .addCase(login.rejected, (state, action) => {
                state.isLoading = false;
                state.isAuth = false;
                state.error = action.payload;
            })
            // Logout cases
            .addCase(logoutAsync.pending, (state) => {
                state.isLoading = true;
                state.error = null;
            })
            .addCase(logoutAsync.fulfilled, (state) => {
                state.isLoading = false;
                state.isAuth = false;
                state.currentUser = null;
                state.token = null;
                state.error = null;
            })
            .addCase(logoutAsync.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            })
            // Register cases
            .addCase(register.pending, (state) => {
                state.isLoading = true;
                state.error = null;
            })
            .addCase(register.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isAuth = true;
                state.currentUser = action.payload.user;
                state.token = action.payload.token;
                state.error = null;
            })
            .addCase(register.rejected, (state, action) => {
                state.isLoading = false;
                state.isAuth = false;
                state.error = action.payload;
            });
    }
});

export const { logout, clearError } = UserSlice.actions;
export default UserSlice.reducer;