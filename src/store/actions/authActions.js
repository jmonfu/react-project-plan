export const signIn = (credentials) => {
    return (dispatch, getState, {getFirebase}) => {
        const firebase = getFirebase();

        firebase.auth().signInWithEmailAndPassword(
            credentials.email,
            credentials.password
        ).then(() => {
            dispatch({ type: 'LOGIN_SUCCESS'})
        }).catch((err) => {
            dispatch({ type: 'LOGIN_ERROR', err});
        });
    }
}

export const signOut = () => {
    return (dispatch, getState, {getFirebase}) => {
        const firebase = getFirebase();

        firebase.auth().signOut().then(() => {
            dispatch({ type: 'SIGNOUT_SUCCESS'})
        });
    }
}

export const signUp = (newUser) => {
    return(dispatch, getState, { getFirebase, getFirestore}) => {
        const firebase = getFirebase();
        const firestore = getFirestore();

        //we want to create a new user in the firebase auth database, and then use the same id we get from this to store this user
        //with other data attached inside the firestore datbase, that is why we are using the ID we get from the reponse
        firebase.auth().createUserWithEmailAndPassword(
            newUser.email,
            newUser.password
        ).then((resp) => {
            return firestore.collection('users').doc(resp.user.uid).set({
                firstName: newUser.firstName,
                lastName: newUser.lastName,
                initials: newUser.firstName[0] + newUser.lastName[0]
            })
        }).then(() => {
            dispatch({ type: 'SIGNUP_SUCCESS' })
        }).catch((err) => {
            dispatch({ type: 'SIGNUP_ERROR', err})
        })

    }
}