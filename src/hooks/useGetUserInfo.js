import secureLocalStorage from "react-secure-storage"

export const useGetUserInfo = () => {
    const uid = secureLocalStorage.getItem('user')[0].uid;
    const uname = secureLocalStorage.getItem('user')[0].displayName;
    const photo = secureLocalStorage.getItem('user')[0].photoURL;
    const email = secureLocalStorage.getItem('user')[0].email;
    const phone = secureLocalStorage.getItem('user')[0].phoneNumber;
    const emailVerified = secureLocalStorage.getItem('user')[1];
    const lastSignIn = secureLocalStorage.getItem('user')[2];
    
    return {uid, uname, photo, email, phone, emailVerified, lastSignIn};

}