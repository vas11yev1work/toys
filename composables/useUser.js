import {onAuthStateChanged, isSignInWithEmailLink, signInWithEmailLink} from 'firebase/auth';

const useUser = () => {
  const user = ref(null);
  const auth = useState('auth').value;
  onMounted(() => {
    // onAuthStateChanged(auth, (currentUser) => {
    //   if (currentUser) {
    //     user.value = currentUser;
    //   }
    // })
    if (isSignInWithEmailLink(auth, window.location.href)) {
      signInWithEmailLink(auth, 'aniki515151@gmail.com', window.location.href)
        .then((result) => {
          user.value = result.user;
          console.log('_result', result);
          // Clear email from storage.
          // window.localStorage.removeItem('emailForSignIn');
          // You can access the new user via result.user
          // Additional user info profile not available via:
          // result.additionalUserInfo.profile == null
          // You can check if the user is new or existing:
          // result.additionalUserInfo.isNewUser
        })
        .catch((error) => {
          console.log('_error', error);
          // Some error occurred, you can inspect the code: error.code
          // Common errors could be invalid email and invalid or expired OTPs.
        });
    }
  })
  return user;
}

export default useUser;