import React, { useState, useEffect } from 'react'
import { NavigationContainer } from '@react-navigation/native';
import AuthStack from './AuthStack';
import UserStack from './UserStack';
import firebase from 'firebase/compat/app';

const RootNavigation = () => {
    // Kullanıcı oturum durumu için state oluşturun
    const [isAuth, setIsAuth] = useState(false);
    
    // Burada kimlik doğrulama durumunu kontrol eden bir useEffect ekleyebilirsiniz
    // Örnek:
    // useEffect(() => {
    //     // Örneğin AsyncStorage'dan token kontrol ederek:
    //     checkAuthStatus().then(status => {
    //         setIsAuth(status);
    //     });
    // }, []);

    return (
        <NavigationContainer>
            {
                !isAuth
                    ? <AuthStack/> 
                    : <UserStack/>
            }
        </NavigationContainer>
    );
};

export default RootNavigation;