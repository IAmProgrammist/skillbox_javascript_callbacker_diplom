const Unsplash = require('unsplash-js').default;

const unsplash = new Unsplash({
//real callback http://rchat.info/skillbox_js_diplom/auth
    //local urn:ietf:wg:oauth:2.0:oob
    accessKey: 'cBnPpakxBx-IWxu74sAcs9s2ptvxUSEWKwVICB0KAu8',
  secret:  'j29XTDwZKf9XLUX9LduM47QFwyIUcBLNdnY_9qhEon4',
  callbackUrl: 'http://localhost:8080/',
  //real: http://rchat.info/skillbox_js_diplom/auth
  //test server: http://localhost:8080/
});

const authenticationUrl = unsplash.auth.getAuthenticationUrl([
"public",
"write_likes"
]);

location.assign(authenticationUrl);