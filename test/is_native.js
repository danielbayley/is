
/* IMPORT */

const {describe} = require ( 'fava' );
const {isNative} = require ( '../dist' );
const {realm} = require ( './_utils.js' );

/* MAIN */

describe ( 'isNative', test => {

  test ( 'should return "true" for values', t => {

    t.true ( isNative ( Array.prototype.push ) );

  });

  test ( 'should return "false" for everything else', t => {

    t.false ( isNative ( isNative ) );

  });

  test ( 'should work with values from another realm', t => {

    t.true ( isNative ( realm.array.push ) );

  });

});
