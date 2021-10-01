export const googleAuth = (onAuthChange) => {
  window.gapi.load('client:auth2', () => {
    window.gapi.client
      .init({
        clientId:
          '632136157491-9jiuoogqcsokfh1cg4c2138meckpvqvk.apps.googleusercontent.com',
        scope: 'email',
      })
      .then(() => {
        let auth = window.gapi.auth2.getAuthInstance();
        onAuthChange(auth.isSignedIn.get());
        auth.isSignedIn.listen(onAuthChange);
      });
  });
};
