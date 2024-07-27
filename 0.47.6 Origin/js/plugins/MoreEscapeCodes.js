//=============================================================================
// More Escape Codes
// by Shaz
// Last Update: 2015.11.23
//
// Revisions
// 2015.11.23 Added escape codes for busts
//=============================================================================

/*:
 * @plugindesc Extends the number of escape codes in the Show Text command
 * @author Shaz
 *
 * @param Face ID Index
 * @desc Escape code for ID of actor and index for face graphic
 * @default f
 *
 * @param Bust ID Index
 * @desc Escape code for ID of actor and index for bust graphic
 * @default b
 *
 * @param Bust X
 * @desc X position of bust image
 * @default 0
 *
 * @param Bust Y
 * @desc Y position of bust image
 * @default 0
 *
 * @param Bust Width
 * @desc Width of a single bust
 * @default 180
 *
 * @param Bust Height
 * @desc Height of a single bust
 * @default 200
 *
 * @param Bust Text Position
 * @desc X position of text when bust is displayed
 * @default 200
 *
 * @param Nickname/Handle
 * @desc Escape code for actor nickname/handle
 * @default h
 *
 * @help This plugin has no plugin commands
 *
 * Escape Codes:
 *
 * Hover the mouse over the text input box of the Show Text command to see
 * the default escape codes.  Do not use values that are already being used.
 *
 * ---Face Graphic---
 * if the Face ID Index value is 'f', use \f[1,2] in a Show Text command
 * to add the face at index 2 of Actor 1's face graphic.  Remember indexes
 * start at 0.  This escape code can be used multiple times within a
 * Show Text command to change expressions.
 *
 * ---Bust Graphic---
 * if the Bust ID Index value is 'b', use \b[filename] in a Show Text command
 * to add the bust graphic in the filename image.  This escape
 * code can be used multiple times within a Show Text command to change
 * expressions.
 *
 * ---Bust X---
 * X position where bust will be displayed
 *
 * ---Bust Y---
 * Y position where bust will be displayed
 *
 * ---Bust Width---
 * Width of an individual bust (should be 1/4 of full image width)
 *
 * ---Bust Height---
 * Height of an individual bust (should be 1/2 of full image height)
 *
 * ---Bust Text Position---
 * X position of text when a bust image is displayed. For comparison, when
 * a face image is displayed, the text position is 168.
 *
 * ---Nickname/Handle---
 * if the Nickname/Handle value is 'h', use \h[1] to show Actor 1's nickname.
 *
 */

(function() {

  var parameters = PluginManager.parameters('MoreEscapeCodes');
  var reFace = String(parameters['Face ID Index'] || '').toUpperCase();
  var reBust = String(parameters['Bust ID Index'] || '').toUpperCase();
  var bustX = parseInt(parameters['Bust X'] || 0);
  var bustY = parseInt(parameters['Bust Y'] || 0);
  var bustWidth = parseInt(parameters['Bust Width'] || 180);
  var bustHeight = parseInt(parameters['Bust Height'] || 200);
  var bustTextPosition = parseInt(parameters['Bust Text Position'] || 0);
  var reHandle = String(parameters['Nickname/Handle'] || null);
  var reHandlePattern = reHandle ? new RegExp('\\x1b' + reHandle + '\\[(\\d+)\\]', 'gi') : null;

  var _Game_Interpreter_command101 = Game_Interpreter.prototype.command101;
  Game_Interpreter.prototype.command101 = function() {
    if (!$gameMessage.isBusy()) {
      $gameMessage.setBustImage('');
    };
    _Game_Interpreter_command101.call(this);
  };

  Window_Base.prototype.obtainMultiEscapeParams = function(textState) {
    var arr = /^\[(\d+,\d+)\]/.exec(textState.text.slice(textState.index));
    if (arr) {
      textState.index += arr[0].length;
      return arr[1].split(',');
    } else {
      return '';
    }
  };

  var _Window_Base_convertEscapeCharacters = Window_Base.prototype.convertEscapeCharacters;
  Window_Base.prototype.convertEscapeCharacters = function(text) {
    text = _Window_Base_convertEscapeCharacters.call(this, text);
    if (reHandle) {
      text = text.replace(reHandlePattern, function() {
        return this.actorNickname(parseInt(arguments[1]));
      }.bind(this));
    }
    return text;
  };

  Window_Base.prototype.actorNickname = function(n) {
    var actor = n >= 1 ? $gameActors.actor(n) : null;
    return actor ? actor.nickname() : '';
  };

  var _Window_Message_initMembers = Window_Message.prototype.initMembers;
  Window_Message.prototype.initMembers = function() {
    _Window_Message_initMembers.call(this);
    this._bustSprite = new Sprite();
    this._bustSprite.x = bustX;
    this._bustSprite.y = bustY;
    this._bustSprite.bitmap = new Bitmap(bustWidth, bustHeight);
    this.addChild(this._bustSprite);
  };

  var _Window_Message_processEscapeCharacter = Window_Message.prototype.processEscapeCharacter;
  Window_Message.prototype.processEscapeCharacter = function(code, textState) {
    switch (code) {
      case reFace:
        this.changeFace(textState);
        break;
      case reBust:
        this.changeBust(textState);
        break;
      default:
        _Window_Message_processEscapeCharacter.call(this, code, textState);
        break;
    }
  };

  Window_Message.prototype.changeFace = function(textState) {
    newFace = this.obtainMultiEscapeParams(textState);
    if (newFace) {
      $gameMessage.setFaceImage($gameActors.actor(newFace[0]).faceName(), newFace[1]);
      this.contents.clearRect(0, 0, Window_Base._faceWidth, Window_Base._faceHeight);
      this.loadMessageFace();
      this.drawMessageFace();
    }
  };

  Window_Message.prototype.changeBust = function(textState) {
    newBust = this.obtainMultiEscapeParams(textState);
    if (newBust) {
      $gameMessage.setBustImage($gameActors.actor(newBust[0]).bustName(), newBust[1]);
      this.loadMessageBust();
      this.drawMessageBust();
    }
  };

  Window_Message.prototype.loadMessageBust = function() {
    this._bustSprite = ImageManager.loadBust($gameMessage.bustName());
  };

  Window_Message.prototype.drawMessageBust = function() {
    var px = $gameMessage.bustIndex() % 4 * bustWidth;
    var py = Math.floor($gameMessage.bustIndex() / 4) * bustHeight;
    this._bustSprite.setFrame(px, py, bustWidth, bustHeight);
  }

  var _Window_Message_newLineX = Window_Message.prototype.newLineX;
  Window_Message.prototype.newLineX = function() {
    var facePattern = new RegExp('\\\\' + reFace + '\\[(\\d+,\\d+)\\]', 'i');
    var bustPattern = new RegExp('\\\\' + reBust + '\\[(\\d+,\\d+)\\]', 'i');
    if ($gameMessage.allText().match(bustPattern)) {
      return bustTextPosition;
    } else if ($gameMessage.allText().match(facePattern)) {
      return 168;
    } else {
      return _Window_Message_newLineX.call(this);
    }
  };

  Game_Message.prototype.setBustImage = function(bustName, bustIndex) {
    this._bustName = bustName;
    this._bustIndex = bustIndex;
  };

  Game_Message.prototype.bustName = function() {
    return this._bustName;
  };

  Game_Message.prototype.bustIndex = function() {
    return this._bustIndex;
  };

  ImageManager.loadBust = function(filename, hue) {
    return this.loadBitmap('img/busts/', filename, hue, true);
  };
})();