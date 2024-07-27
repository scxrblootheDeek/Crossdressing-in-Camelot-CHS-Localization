//==============================================================================
// Eli_MessageActions.js
//==============================================================================

/*:
@plugindesc ♦5.0.4♦ Adds action escape codes to be used on any window!
@author Hakuen Studio

@help
▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬
If you like my work, please consider supporting me on Patreon!
Patreon      → https://www.patreon.com/hakuenstudio
Terms of Use → https://www.hakuenstudio.com/terms-of-use-5-0-0
Facebook     → https://www.facebook.com/hakuenstudio
Instagram    → https://www.instagram.com/hakuenstudio
Twitter      → https://twitter.com/hakuen_studio
▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬
==============================================================================
Plugin Requirements
==============================================================================

Need Eli Book.

Order After Eli Book
Order Before Eli Bitmap Font
Order Before Eli Choice Manager
Order Before Eli Message Common Event

==============================================================================
Features
==============================================================================

● Add new escape codes that can:
• Draw images from any img folder!
• Change switches, self switches, and variables.
• Play common event
• Show animations, balloon
• Scroll, fade(in and out), tint, shake, and flash the map!
• Change wether
• Play BGM, BGS, ME, SE
• Change font to bold or italic
• Change font outline color and width
• Align Left | Center | Right
• Change face image/index of the message window
• Change font face (Eli FontManager or Eli BitmapFontPro)
● Works almost on every window, including scroll text!

==============================================================================
How to use
==============================================================================

First of all, you can go to the plugin parameters and change the escape 
codes to ones that you like.
But you can't change the order of the parameters either add any new ones. 
You can enter the parameters already set up and change the Code for them.

Now, let me explain how you can use it:

♦ General Codes → Designed to work on any window. ♦

● Map only

• Direction → Replace with numbers(2, 4, 6, 8)
• In/out → Replace with Out or In. Not case sensitive.
• WeatherType → Replace type with rain | snow | storm | none

▪ \PCE[commonEventId] → Play a common event
▪ \SBI[eventId, balloonId] → Show a ballon icon
▪ \SAN[eventId, animationId] → Show an animation
▪ \SCROLL[direction, distance, speed] → Scroll the map.
▪ \FADE[in/out, duration] → If duration is ommited, it will be 24.
▪ \TINT[r, g, b, gray, duration] → Tint the screen
▪ \FLASH[r, g, b, intensity, duration] → Flash the screen
▪ \SHAKE[power, speed, duration] → Shake the screen
▪ \WEATHER[weatherType, power, duration] → Change the weather

● Music

You can omit volume, pitch, and pan and they will take default values:
• Volume → The volume set on options.
• Pitch → 100
• Pan → 0
• name → Cannot have spaces. They are case→sensitive.

▪ \PBGM[name, volume, pitch, pan] → Play Bgm
▪ \FBGM[duration] → Fade out the current bgm
▪ \PBGS[name, volume, pitch, pan] → Play Bgs
▪ \FBGS[duration] → Fade out the current bgs
▪ \PME[name, volume, pitch, pan] → Play Me
▪ \PSE[name, volume, pitch, pan] → Play Se

● All

• Color → Replace with HTML colors(red, blue, green...) or Hex(#ffffff) or 
use the window colors 
or window color(0, 1, 2...)
• Flag → Replace with true or false.
• MapId/EventId → If you put 0 on any of these, it will take the current 
map/eventId
• AlignType → Replace with Left | Center | Right.
If you use any other escape code that changes the size or position of 
the text, is recomendable that use the Align code after them.
• Folder/Filename → Are case sensitive. Cannot have spaces.
• KeepRatio/Center → Replace them with true/false. By default keepRatio is 
true and the center is false.

▪ \COLOR[color] → Change color text using html/hex colors.
▪ \CSW[SwitchId, true/false] → Change value to true or false.
▪ \CSSW[mapId, eventId, switchId, flag] → If mapId or eventId are equal to 0,
it will select the current map/event. If you ommit the flag, it will be 
considered false.
▪ \CVAR[varId, operator, value] → Operator can be any of these = + → / * %
▪ \SCRIPT[formula] → This will eval a script.
▪ \BOLD[true/false] → Will make the font BOLD
▪ \ITALIC[true/false] → Will make the font ITALIC
▪ \OUTCOLOR[color] → Change the font outline color. Leave empty for 
default.
▪ \OUTWIDTH[size] → Change the font outline width. Leave empty for 
default.
▪ \ALIGN[alignType] → Change the text align**¹
▪ \DRAWIMG[folder, fileName, keepRatio, center]
▪ \UL[true/false] → Will draw a underline below text.
▪ \TS[true/false] → Will draw a strikethrough in the text.
▪ \BGC[true/false, color] → Paint the text background.

♦ Message Codes → Designed to use only on Message Window ♦

▪ \ACTORFACE[actorId] → Change the message face to the specified actor
▪ \PARTYFACE[memberIndex] → Change the message face to the specified party 
member
▪ \FACENAME[filename] → Change only the face message(not the message index)
▪ \FACEINDEX[number] → Change only the Face
▪ \CHANGEFACE[filename, index]
▪ \WAIT[frames]

♦ Scroll Text Codes → Designed to use only on Scroll Text Window ♦

This is a little bit different than the other ones. 
You have to put an id for each DrawImg command on the Scroll Text command. 
And you don't have the keep ration and center arguments.
The ids are only valid for the current Scroll Text command. When you use 
it again, you can start with other IDs.

• Id → A number starting from 1.

▪ \DRAWIMG[id, folder, fileName]

♦ Plugin Parameter: Align Behavior ♦

If you set this parameter to true, you don't have to use the ALIGN escape 
code on every line/command of a window to adjust the alignment.
Although the alignment will be set back to its default "LEFT" when the 
window initializes.
Otherwise, you will need to set the ALIGN escape code on every 
line/command.

♦ Extensions: Font Manager and Bitmap Font Pro ♦

▪ \FNT[FontFace/Index] → If using Eli Font Manager, you need to type the
font face name. If using Eli Bitmap Font Pro, you can use either the
font face name or the Bitmap Font index.

============================================================================
Update Log
============================================================================

https://tinyurl.com/messageActionsLog

============================================================================

@param generalCodes
@text General Codes
@type struct<escapeCodes>[]
@desc General escape codes that can be used in any window.
@default ["{\"name\":\"Change color using HTML or Hex or CSS\",\"reg\":\"COLOR\"}","{\"name\":\"Change Switch\",\"reg\":\"CSW\"}","{\"name\":\"Change Self Switch\",\"reg\":\"CSSW\"}","{\"name\":\"Change Variable\",\"reg\":\"CVAR\"}","{\"name\":\"Play Common Event\",\"reg\":\"PCE\"}","{\"name\":\"Show Balloon\",\"reg\":\"SBI\"}","{\"name\":\"Show Animation\",\"reg\":\"SAN\"}","{\"name\":\"Scroll Map\",\"reg\":\"SCROLL\"}","{\"name\":\"Fade in/out\",\"reg\":\"FADE\"}","{\"name\":\"Tint Screen\",\"reg\":\"TINT\"}","{\"name\":\"Flash Screen\",\"reg\":\"FLASH\"}","{\"name\":\"Shake screen\",\"reg\":\"SHAKE\"}","{\"name\":\"Change weather\",\"reg\":\"WEATHER\"}","{\"name\":\"Play BGM\",\"reg\":\"PBGM\"}","{\"name\":\"Fade Out Bgm\",\"reg\":\"FBGM\"}","{\"name\":\"Play BGS\",\"reg\":\"PBGS\"}","{\"name\":\"Fade out bgs\",\"reg\":\"FBGS\"}","{\"name\":\"Play ME\",\"reg\":\"PME\"}","{\"name\":\"Play SE\",\"reg\":\"PSE\"}","{\"name\":\"Evaluate code (eval)\",\"reg\":\"SCRIPT\"}","{\"name\":\"Make font Bold\",\"reg\":\"BOLD\"}","{\"name\":\"Make Font Italic\",\"reg\":\"ITALIC\"}","{\"name\":\"Change font outline color\",\"reg\":\"OUTCOLOR\"}","{\"name\":\"Change font outline width\",\"reg\":\"OUTWIDTH\"}","{\"name\":\"Align\",\"reg\":\"ALIGN\"}","{\"name\":\"Draw Image from any folder inside IMG folder\",\"reg\":\"DRAWIMG\"}","{\"name\":\"Underline\",\"reg\":\"UL\"}","{\"name\":\"Strikethrough\",\"reg\":\"TS\"}","{\"name\":\"Text Background Color(Highlight)\",\"reg\":\"BGC\"}","{\"name\":\"Change Font\",\"reg\":\"FNT\"}"]

@param msgCodes
@text Message Codes
@type struct<escapeCodes>[]
@desc Exclusive Escape codes to be used only on message window.
@default ["{\"name\":\"Set actor face\",\"reg\":\"ACTORFACE\"}","{\"name\":\"Set Party member face\",\"reg\":\"PARTYFACE\"}","{\"name\":\"Set a face file only(not index)\",\"reg\":\"FACENAME\"}","{\"name\":\"Change face index\",\"reg\":\"FACEINDEX\"}","{\"name\":\"Change face file and index\",\"reg\":\"CHANGEFACE\"}","{\"name\":\"Wait frames\",\"reg\":\"WAIT\"}"]

@param underlineHeight
@text Underline height
@type text
@desc the height of the line that will be used as underline.
@default 1

@param strikeThroughHeight
@text Strike Through height
@type text
@desc The height of the line that will be used to strike through the text.
@default 1

@param alignMode
@text Persistent Alignment
@type boolean
@on Auto
@off Manual
@desc If true, the align style will persist across new lines, until you remove it or the window initialize again.
@default true

*/

/* ------------------------------- ESCAPE CODE ------------------------------ */
{
/*~struct~escapeCodes:

@param name
@text Name
@type name
@desc The name of the escape code. Do nothing, is just a label.
@default

@param reg
@text Code
@type name
@desc The letter used to execute this escape code.
Only A-Z. Not case sensitive.
@default

*/
}

"use strict"

var Eli = Eli || {}
var Imported = Imported || {}
Imported.Eli_MessageActions = true

/* ========================================================================== */
/*                                    ALERT                                   */
/* ========================================================================== */
{
const pluginName = "Eli Message Actions"
const requiredVersion = 5.07
const messageVersion = "5.0.7"

if(!Eli.Book){

    const msg = `${pluginName}:\nYou are missing the core plugin: Eli Book.\nPlease, click ok to download it now.`
    if(window.confirm(msg)){
        nw.Shell.openExternal("https://hakuenstudio.itch.io/eli-book-rpg-maker-mv-mz")
    }

}else if(Eli.Book.version < requiredVersion){

    const msg = `${pluginName}:\nYou need Eli Book version ${messageVersion} or higher.\nPlease, click ok to download it now.`
    if(window.confirm(msg)){
        nw.Shell.openExternal("https://hakuenstudio.itch.io/eli-book-rpg-maker-mv-mz")
    }
}

}

/* ========================================================================== */
/*                                   PLUGIN                                   */
/* ========================================================================== */
{

Eli.MessageActions = {

    version: 5.04,
    url: "https://hakuenstudio.itch.io/eli-message-actions-for-rpg-maker",
    parameters: {
        codes: {
            general: [ {name:'', reg:''} ],
            message: [ {name:'', reg:''} ],
        },
        underlineHeight: 1,
        strikeThroughHeight: 1,
        alignMode: true,
    },
    alias: {},
    removeCodes_1: /\x1b.+?\[.+?\]{1,2}/mig,
    removeCodes_2: /\x1b./mig,
    removeCodes_3: /.+?\[.+?\]/mig,
    inlineImgReg: /\\drawimg\[(.+)\]/gmi,
    iconCodes: [],
    commonEvents: [],

    initialize(){
        this.initParameters()
        this.initPluginCommands()
        this.makeIconCodeList()
    },

    initParameters(){
        const rawParameters = PluginManager.parameters("Eli_MessageActions")
        this.parameters.underlineHeight = Number(rawParameters.underlineHeight)
        this.parameters.strikeThroughHeight = Number(rawParameters.strikeThroughHeight)
        this.parameters.alignMode = rawParameters.alignMode === "true"
        this.parameters.codes.general = this.parseEscapeCodesParameters(rawParameters.generalCodes)
        this.parameters.codes.message = this.parseEscapeCodesParameters(rawParameters.msgCodes)
    },

    parseEscapeCodesParameters(rawCodeString){
        const rawCodeArray = JSON.parse(rawCodeString)

        for(let i = 0; i < rawCodeArray.length; i++){
            rawCodeArray[i] = JSON.parse(rawCodeArray[i])
        }

        return rawCodeArray
    },

    initPluginCommands(){},

    makeIconCodeList(){
        const escapeChar = "i"
        const iconCodes = [new RegExp(`\\x1b${escapeChar}\\[([^\\[]*)\\]`, 'gi')]

        if(Imported.Eli_EscapeCodes){
            const extraIconCodes = Eli.EscapeCodes.list.filter(item => item.functionName.toLowerCase().includes("icon"))
            extraIconCodes.forEach(item => {
                iconCodes.push(item.reg)
            })
        }

        this.iconCodes = iconCodes
    },

    getIconWidthOnText(text){
        let iconWidth = 0
        for(const code of this.iconCodes){
            while(code.exec(text)){
                iconWidth += Window_Base._iconWidth
            }
        }

        return iconWidth
    },

    getBitmapFromDrawCode(folder, filename){
        const path = `img/${folder}/`
        const bitmap = ImageManager.loadBitmap(path, filename)

        return bitmap
    },

    calculateVariableValue(operationType, currentValue, newValue){
        switch(operationType){
            case "=": return newValue
            case "+": return currentValue + newValue
            case "-": return currentValue - newValue
            case "*": return currentValue * newValue
            case "/": return currentValue / newValue
            case "%": return currentValue % newValue
        }

        return 0
    },

    getCharacter(id){
        if(id >= 0){
            return $gameMap.event(id) || $gameMap.event($gameMap._interpreter._eventId)

        } else if(id === -1){
            return $gamePlayer

        }else if(id < -1){
            return $gamePlayer.followers()._data[Math.abs(id + 2)]

        }else{
            return $gameMap.vehicles().find(item => item._type === id.toLowerCase())
        }
    },

    param(){
        return this.parameters
    },

    obtainEscapeParam(textState){
        const text = textState.text.slice(textState.index)
        
        if(text.startsWith("[")){
            return this.getEscapeParamResult(text, textState)
        }else{
            return ""
        }
    },

    getEscapeParamResult(text, textState){
        const end = text.indexOf("]")
        textState.index += end+1
        const result = Eli.String.removeSpaces(text.substring(1, end))

        return result
    },

    removeEval(text){
        const rawText = Eli.EscapeCodes.getRawEvalText(text)
        text = text.replace(rawText, "")

        return text
    },

    removeEvalTernary(text){
        const rawText = Eli.EscapeCodes.getIfRawText(text)
        text = text.replace(rawText, "")

        return text
    },

    removeAllEscapeCodes(text){
        const regex = this.removeCodes_1
        const regex2 = this.removeCodes_2
        const regex3 = this.removeCodes_3 // Attempt to remove it from choices?
        let maxLoop = 0

        text = text.replace(regex, "")
        text = text.replace(regex2, "")
        text = text.replace(regex3, "")

        if(Imported.Eli_EscapeCodes){

            while(text.includes(Eli.EscapeCodes.openIf) && maxLoop < 5){
                text = this.removeEvalTernary(text)
                maxLoop++
            }
    
            maxLoop = 0
    
            while(text.includes(Eli.EscapeCodes.openEval) && maxLoop < 5){
                text = this.removeEval(text)
                maxLoop++
            }
        }

        return text
    },
}

const Plugin = Eli.MessageActions
const Alias = Eli.MessageActions.alias

Plugin.initialize()

class Sprite_InlineImageContainer extends Sprite{}

/* --------------------------------- BITMAP --------------------------------- */
{

Alias.Bitmap_initialize = Bitmap.prototype.initialize
Bitmap.prototype.initialize = function(width, height){
    Alias.Bitmap_initialize.call(this, width, height)
    this.initMsgActionMembers()
}

Alias.Bitmap_drawTextOutline = Bitmap.prototype._drawTextOutline
Bitmap.prototype._drawTextOutline = function(text, tx, ty, maxWidth){
    if(this.background.canDraw){
        this.drawTextBackgroundColor(text, tx, ty)
    }

    Alias.Bitmap_drawTextOutline.call(this, text, tx, ty, maxWidth)
}

Alias.Bitmap_drawTextBody = Bitmap.prototype._drawTextBody
Bitmap.prototype._drawTextBody = function(text, tx, ty, maxWidth){
    Alias.Bitmap_drawTextBody.call(this, text, tx, ty, maxWidth)

    if(this.underline){
        this.drawTextUnderline(text, tx, ty)
    }

    if(this.strikeThrough){
        this.drawTextStrikeThrough(text, tx, ty)
    }
}

Alias.Bitmap_drawText = Bitmap.prototype.drawText
Bitmap.prototype.drawText = function(text, x, y, maxWidth, lineHeight, align){
    this.lineHeight = lineHeight
    if(this.hasInlineImage){
        this.drawTextWithInlineImage(text, x, y, maxWidth, lineHeight, align, Alias.Bitmap_drawText)
    }else{
        Alias.Bitmap_drawText.call(this, text, x, y, maxWidth, lineHeight, align)
    }

}

Bitmap.prototype.initMsgActionMembers = function(){
    this.hasInlineImage = false
    this.underline = false
    this.background = {color: 0, canDraw: false}
    this.strikeThrough = false
    this.imgAreas = []
    this.lineHeight = 0
}

Bitmap.prototype.adjustCharacterToNotDrawAboveImage = function(textState){
    for(const rect of this.imgAreas){
        const x = textState.x
        const y = textState.y
        const character = textState.text[textState.index]
        const charWidth = this.measureTextWidth(character)

        textState.x += rect.contains(x, y) ? rect.width + charWidth : 0
    }

    return textState
}

Bitmap.prototype.drawTextWithInlineImage = function(text, x, y, maxWidth, lineHeight, align, callBack){
    let oldX = x
    let oldWidth = 0

    for(const char of text){
        oldWidth = this.measureTextWidth(char)

        for(const rect of this.imgAreas){
            if(rect.contains(oldX+oldWidth, y)){
                oldX += rect.width + oldWidth
            }
        }

        callBack.call(this, char, oldX, y, maxWidth, lineHeight, align)
        oldX = oldX + oldWidth
    }
}

Bitmap.prototype.drawTextBackgroundColor = function(text, tx, ty){
    const context = this.context
    const textHeight = this.lineHeight/2 + this.fontSize/4
    const width = this.measureTextWidth(text)

    context.fillStyle = this.background.color
    context.fillRect(tx, ty - textHeight, width + 1, this.fontSize)
}

Bitmap.prototype.drawTextStrikeThrough = function(text, tx, ty){
    const width = this.measureTextWidth(text)
    const strikeHeight = Plugin.param().strikeThroughHeight
    const dif = this.fontSize/4 + strikeHeight

    this.context.fillStyle = this.textColor
    this.context.fillRect(tx, ty-dif, width+1, strikeHeight)
}

Bitmap.prototype.drawTextUnderline = function(text, tx, ty){
    const width = this.measureTextWidth(text)
    const underlineHeight = Plugin.param().underlineHeight
    
    this.context.fillStyle = this.textColor
    this.context.fillRect(tx, ty+underlineHeight, width+1, underlineHeight)
}

}

/* ---------------------------- GAME COMMON EVENT --------------------------- */
{

Alias.Game_CommonEvent_isActive = Game_CommonEvent.prototype.isActive
Game_CommonEvent.prototype.isActive = function() {
    return Alias.Game_CommonEvent_isActive.call(this) || this.isActivatedByEscapeCode()
}

Alias.Game_CommonEvent_update = Game_CommonEvent.prototype.update
Game_CommonEvent.prototype.update = function() {
    Alias.Game_CommonEvent_update.call(this)
    if(this.canEndEscapeCodeInterpreter()){
        this.endEscapeCodeInterpreter()
    }
}

Game_CommonEvent.prototype.removeFromMessage = function(id) {
    const index = Plugin.commonEvents.indexOf(id)
    Plugin.commonEvents.splice(index, 1)
}

Game_CommonEvent.prototype.isActivatedByEscapeCode = function() {
    return Plugin.commonEvents.includes(this.event().id)
}

Game_CommonEvent.prototype.interpreterIsNotRunning = function() {
    return this._interpreter && !this._interpreter.isRunning()
}

Game_CommonEvent.prototype.canEndEscapeCodeInterpreter = function() {
    return this.isActivatedByEscapeCode() && this.interpreterIsNotRunning()
}

Game_CommonEvent.prototype.endEscapeCodeInterpreter = function() {
    this.removeFromMessage(this.event().id)
    this._interpreter = null
}

}

/* ---------------------------- GAME INTERPRETER ---------------------------- */
{

Alias.Game_Interpreter_setup = Game_Interpreter.prototype.setup
Game_Interpreter.prototype.setup = function(list, eventId) {
    Alias.Game_Interpreter_setup.call(this, list, eventId)
    this.loadInlineImagesOfShowAndScrollText()
}

Game_Interpreter.prototype.loadInlineImagesOfShowAndScrollText = function(){
    const copyList = this._list.filter(item => item.code === 401 || item.code === 405)

    for(const command of copyList){
        const text = command.parameters[0]
        const match = Plugin.inlineImgReg.exec(text)
        
        if(match){
            let id, folder, filename

            if(command.code === 405){
                [id, folder, filename] = Eli.String.removeSpaces(match[1]).split(",")
            }else{
                [folder, filename] = Eli.String.removeSpaces(match[1]).split(",")
            }

            const path = `img/${folder}/`
            ImageManager.loadBitmap(path, filename)
        }
    }
}

}

/* ------------------------------- WINDOW BASE ------------------------------ */
{

Alias.Window_Base_initialize = Window_Base.prototype.initialize
Window_Base.prototype.initialize = function(x, y, width, height){
    Alias.Window_Base_initialize.call(this, x, y, width, height)
    this.initExtraEscapeCodes()
    this.setDefaultTextAlignment()
}

Window_Base.prototype.setDefaultTextAlignment = function() {
    this.currentAlign = 'left'
}

Alias.Window_Base_processCharacter = Window_Base.prototype.processCharacter
Window_Base.prototype.processCharacter = function(textState) {
    textState = this.contents.adjustCharacterToNotDrawAboveImage(textState)
    this.currentTextState = textState
    Alias.Window_Base_processCharacter.call(this, textState)
}

Alias.Window_Base_processEscapeCharacter = Window_Base.prototype.processEscapeCharacter
Window_Base.prototype.processEscapeCharacter = function(code, textState) {
    if(this.actionEscapeCodes[code]){ 
        this.actionEscapeCodes[code].bind(this, textState)()
    }
    Alias.Window_Base_processEscapeCharacter.call(this, code, textState)
}

Alias.Window_Base_processNewLine = Window_Base.prototype.processNewLine
Window_Base.prototype.processNewLine = function(textState) {
    Alias.Window_Base_processNewLine.call(this, textState)
    this.fixAlign(textState)
}

Window_Base.prototype.initExtraEscapeCodes = function(){
    const functions = [
        "COLOR", "CSW", "CSSW", "CVAR", "PCE", "SBI", "SAN", "SCROLL", "FADE", 
        "TINT", "FLASH", "SHAKE", "WEATHER", "PBGM", "FBGM", "PBGS", "FBGS", 
        "PME", "PSE", "SCRIPT", "BOLD", "ITALIC", "OUTCOLOR", "OUTWIDTH", 
        "ALIGN", "DRAWIMG", "UL", "TS", "BGC", "FNT"
    ]
    this.actionEscapeCodes = {}
    for(let i = 0; i < Plugin.param().codes.general.length; i++){
        const code = Plugin.param().codes.general[i].reg
        const functionName = functions[i]
        this.actionEscapeCodes[code] = this[functionName]
    }

}

Window_Base.prototype.COLOR = function(textState){
    const color = Plugin.obtainEscapeParam(textState)
    if(isNaN(color)){
        this.changeTextColor(Eli.ColorManager.getHexOrName(color))
    }else{
        this.processColorChange(Number(color))
    }
}

// Change Switch
Window_Base.prototype.CSW = function(textState){
    let [id, value] = Plugin.obtainEscapeParam(textState).split(",")
    value = value ? JSON.parse(value.toLowerCase()) : false
    $gameSwitches.setValue(id, value)
}

// Change Self Switch
Window_Base.prototype.CSSW = function(textState){
    let [mapId, eventId, swId, value] = Plugin.obtainEscapeParam(textState).split(",")
    mapId = mapId == 0 ? $gameMap.mapId() : Number(mapId)
    eventId = eventId == 0 ? $gameMap._interpreter._eventId : Number(eventId)
    swId = swId.toUpperCase()
    value = value ? JSON.parse(value.toLowerCase()) : false

    $gameSelfSwitches.setValue([mapId, eventId, swId], value)
}

// Change variable
Window_Base.prototype.CVAR = function(textState){
    let [varId, operator, value] = Plugin.obtainEscapeParam(textState).split(",")
    varId = Number(varId)
    
    if(isNaN(value)){
        value = eval(value)
    }else{
        value = Number(value)
    }

    const currentValue = $gameVariables.value(varId)
    const newValue = Plugin.calculateVariableValue(operator, currentValue, value)
    $gameVariables.setValue(varId, newValue)
}

// Play Common Event
Window_Base.prototype.PCE = function(textState){
    const commonEventId = Number(Plugin.obtainEscapeParam(textState))
    const index = $gameMap._commonEvents.findIndex(item => item._commonEventId === commonEventId)

    if(!Plugin.commonEvents.includes(commonEventId)){
        Plugin.commonEvents.push(commonEventId)
    }

    if(index === -1){
        $gameMap._commonEvents.push(new Game_CommonEvent(commonEventId))
    }
}

// Show Ballon
Window_Base.prototype.SBI = function(textState){
    let [charId, balloonId] = Plugin.obtainEscapeParam(textState).split(",")
    const character = Plugin.getCharacter(Number(charId))

    if(character){
        character.requestBalloon(Number(balloonId))
    }
}

// Show Animation
Window_Base.prototype.SAN = function(textState){
    let [charId, animationId] = Plugin.obtainEscapeParam(textState).split(",")
    const character = Plugin.getCharacter(Number(charId))

    if(character){
        character.requestAnimation(Number(animationId))
    }
}

//Scroll map
Window_Base.prototype.SCROLL = function(textState){
    let [direction, distance, speed] = Plugin.obtainEscapeParam(textState).split(",").map(item => Number(item))
    $gameMap.startScroll(direction, distance, speed)
}

// Fade out/In
Window_Base.prototype.FADE = function(textState){
    const [type, duration] = Plugin.obtainEscapeParam(textState).split(",")
    const isFadeIn = type.toLowerCase().includes("in")

    if(isFadeIn){
        $gameScreen.startFadeIn(Number(duration) || 24)
    }else{
        $gameScreen.startFadeOut(Number(duration) || 24)
    }
}

// Tint Screen
Window_Base.prototype.TINT = function(textState){
    const parameters = Plugin.obtainEscapeParam(textState)
    const [r, g, b, gray, duration] = parameters.split(",").map(item => Number(item))

    $gameScreen.startTint([r, g, b, gray], duration)
}

// FLASH
Window_Base.prototype.FLASH = function(textState){
    const parameters = Plugin.obtainEscapeParam(textState)
    const [r, g, b, intensity, duration] = parameters.split(",").map(item => Number(item))
    $gameScreen.startFlash([r, g, b, intensity], duration)
}

// Shake
Window_Base.prototype.SHAKE = function(textState){
    const parameters = Plugin.obtainEscapeParam(textState)
    const [power, speed, duration] = parameters.split(",").map(item => Number(item))
    $gameScreen.startShake(power, speed, duration)
}

// Set Weather Effect "none", "rain", "storm", "snow"
Window_Base.prototype.WEATHER = function(textState){
    const parameters = Plugin.obtainEscapeParam(textState)
    const [type, power, duration] = parameters.split(",")
    $gameScreen.changeWeather(type.toLowerCase(), Number(power), Number(duration))
}

// Play BGM
Window_Base.prototype.PBGM = function(textState){
    const parameters = Plugin.obtainEscapeParam(textState)
    const [name, volume, pitch, pan] = parameters.split(",")
    const bgm = {
        name: name,
        volume: Number(volume) || AudioManager._bgmVolume,
        pitch: Number(pitch) || 100,
        pan: Number(pan) || 0
    }
    AudioManager.playBgm(bgm)
}

// Fadeout BGM
Window_Base.prototype.FBGM = function(textState){
    const duration = Plugin.obtainEscapeParam(textState)
    AudioManager.fadeOutBgm(Number(duration))
}

// Play BGS
Window_Base.prototype.PBGS = function(textState){
    const parameters = Plugin.obtainEscapeParam(textState)
    const [name, volume, pitch, pan] = parameters.split(",")
    const bgs = {
        name: name,
        volume: Number(volume) || AudioManager._bgmVolume,
        pitch: Number(pitch) || 100,
        pan: Number(pan) || 0
    }
    AudioManager.playBgs(bgs)
}

// Fadeout BGS
Window_Base.prototype.FBGS = function(textState){
    const duration = Plugin.obtainEscapeParam(textState)
    AudioManager.fadeOutBgs(Number(duration))
}

// Play ME
Window_Base.prototype.PME = function(textState){
    const parameters = Plugin.obtainEscapeParam(textState)
    const [name, volume, pitch, pan] = parameters.split(",")
    const me = {
        name: name,
        volume: Number(volume) || AudioManager._meVolume,
        pitch: Number(pitch) || 100,
        pan: Number(pan) || 0
    }
    AudioManager.playMe(me)
}

// Play SE
Window_Base.prototype.PSE = function(textState){
    const parameters = Plugin.obtainEscapeParam(textState)
    const [name, volume, pitch, pan] = parameters.split(",")
    const se = {
        name: name,
        volume: Number(volume) || AudioManager._seVolume,
        pitch: Number(pitch) || 100,
        pan: Number(pan) || 0
    }
    AudioManager.playSe(se)
}

// Eval
Window_Base.prototype.SCRIPT = function(textState){
    const formula = Plugin.obtainEscapeParam(textState)
    eval(formula)
}

// Bold font
Window_Base.prototype.BOLD = function(textState){
    this.contents.fontBold = JSON.parse(Plugin.obtainEscapeParam(textState).toLowerCase())
}

// Italic font
Window_Base.prototype.ITALIC = function(textState){
    this.contents.fontItalic = JSON.parse(Plugin.obtainEscapeParam(textState).toLowerCase())
}

// OutlineColor
Window_Base.prototype.OUTCOLOR = function(textState){
    const color = Plugin.obtainEscapeParam(textState)

    if(isNaN(color)){
        this.contents.outlineColor = Eli.ColorManager.getHexOrName(color)
    }else{
        this.contents.outlineColor = this.textColor(Number(color))
    }
}

Window_Base.prototype.OUTWIDTH = function(textState){
    const width = Number(Plugin.obtainEscapeParam(textState))
    this.contents.outlineWidth = width
}

Window_Base.prototype.ALIGN = function(textState, defaultAlign){
    const align = defaultAlign || Plugin.obtainEscapeParam(textState).toLowerCase() 
    this.currentAlign = align

    if(align === "left") {
        textState.x = textState.left

    }else{

        const rawLineText = textState.text.substring(textState.index).split("\n")[0]
        const lineText = Plugin.removeAllEscapeCodes(rawLineText)
        const textWidth = this.textWidth(lineText)
        const iconWidthOnText = Plugin.getIconWidthOnText(rawLineText)
        
        let x = 0
        let baseWidth = this.contentsWidth()
        
        switch(align){
            case "center":
                x = (baseWidth/2) - (textWidth + iconWidthOnText + this.textPadding())/2
                textState.x = x
            break 
            case "right":
                x = baseWidth - (textWidth + iconWidthOnText + this.textPadding())
                textState.x = x
            break 
        }
    }

}

Window_Base.prototype.DRAWIMG = function(textState){
    let [folder, fileName, keepRatio, center] = Plugin.obtainEscapeParam(textState).split(",")
    const bitmap = Plugin.getBitmapFromDrawCode(folder, fileName)
    keepRatio = keepRatio === undefined ? true : JSON.parse(keepRatio.toLowerCase())
    center = center === undefined ? false : JSON.parse(center.toLowerCase())

    let dx = textState.x
    let dy = textState.y
    this.contents.hasInlineImage = true

    bitmap.addLoadListener(() => {
        const winHeight = this.contentsHeight()
        const sw = bitmap.width
        const sh = bitmap.height
        
        let dw = sw
        let dh = sh

        if(keepRatio && sh > winHeight){
            const ratio = Math.trunc(sh/winHeight)
            dw /= ratio
            dh /= ratio
        }

        if(center && sh < winHeight){
            dy = Math.abs(winHeight/2 - dh/2)
        }

        const rect = new Rectangle(dx, dy, dw, dh)
        this.contents.imgAreas.push(rect)
        this.contents.blt(bitmap, 0, 0, sw, sh, dx, dy, dw, dh)

    })
}

// Underline
Window_Base.prototype.UL = function(textState){
    this.contents.underline = JSON.parse(Plugin.obtainEscapeParam(textState).toLowerCase())
}

// Strikethrough
Window_Base.prototype.TS = function(textState){
    this.contents.strikeThrough = JSON.parse(Plugin.obtainEscapeParam(textState).toLowerCase())
}

// Paint Background
Window_Base.prototype.BGC = function(textState){
    const [flag, color] = Plugin.obtainEscapeParam(textState).split(",")

    if(isNaN(color)){
        this.contents.background.color = color || this.contents.background.color
    }else{
        this.contents.background.color = this.textColor(Number(color))
    }
    
    this.contents.background.canDraw = JSON.parse(flag.toLowerCase()) || false
}

// Change Font
Window_Base.prototype.FNT = function(textState){
    if(Imported.Eli_BitmapFont && Eli.BitmapFont.pro){
        this.changeBitmapFont(textState)

    }else if(Imported.Eli_FontManager){
        this.changeDefaultFont(textState)
    }
}

Window_Base.prototype.changeBitmapFont = function(textState){
    const bitmapFont = Plugin.obtainEscapeParam(textState)
    const fontIndex = Eli.BitmapFont.findParameterFontIndex(bitmapFont)

    Eli.BitmapFont.changeContainerFont(this.constructor.name, fontIndex)
    this.resetFontSettings()
}

Window_Base.prototype.changeDefaultFont = function(textState){
    const fontFace = Plugin.obtainEscapeParam(textState)
    Eli.FontManager.changeContainerFont(this.constructor.name, fontFace)
    this.setCustomFont()
}

Window_Base.prototype.fixAlign = function(textState) {
    if(Plugin.param().alignMode){
        this.ALIGN(textState, this.currentAlign)
    }
}

}

/* ----------------------------- WINDOW COMMAND ----------------------------- */
{

/* ------------ MZ ONLY. IT IS INSIDE THE DRAW TEXT EX FUNCTION ----------- */
// Alias.Window_Command_processAllText = Window_Command.prototype.processAllText
// Window_Command.prototype.processAllText = function(textState) {
//     this.fixAlign(textState)
//     Alias.Window_Command_processAllText.call(this, textState)
// }
Alias.Window_Command_initialize = Window_Command.prototype.initialize
Window_Command.prototype.initialize = function(x, y) {
    this.canFixAlign = false
    Alias.Window_Command_initialize.call(this, x, y)
}

Window_Command.prototype.setDefaultTextAlignment = function() {
    this.currentAlign = 'center'
}

Alias.Window_Command_drawTextEx = Window_Command.prototype.drawTextEx
Window_Command.prototype.drawTextEx = function(text, x, y) {
    this.canFixAlign = true
    const alias = Alias.Window_Command_drawTextEx.call(this, text, x, y)
    this.canFixAlign = false

    return alias
}

Alias.Window_Command_calcTextHeight = Window_Command.prototype.calcTextHeight
Window_Command.prototype.calcTextHeight = function(textState, all){
    if(this.canFixAlign){
        this.fixAlign(textState)
        this.canFixAlign = false
    }
    
    return Alias.Window_Command_calcTextHeight.call(this, textState, all)
}

/* ------------ MZ ONLY. IT IS INSIDE THE DRAW TEXT EX FUNCTION ----------- */

Window_Command.prototype.ALIGN = function(textState, defaultAlign){
    const align = defaultAlign || Plugin.obtainEscapeParam(textState).toLowerCase()
    const rawLineText = textState.text
    const lineText = Plugin.removeAllEscapeCodes(rawLineText)
    const textWidth = this.textWidth(lineText)
    const iconWidthOnText = Plugin.getIconWidthOnText(rawLineText)
    let x = 0
    let baseWidth = this.innerWidth
    let extraX = 0
    let col = 0
    let index = 0

    if(this.isHorizontal() || this.maxCols() > 1){
        let rectWidth = 0

        for(let i = 0; i < this.maxItems(); i++){
            const rect = this.itemRect(i)
            
            if(rect.contains(textState.left, textState.y)){
                index = i
                rectWidth = rect.width
                break
            }
        }

        
        col = index % this.maxCols()
        baseWidth = rectWidth 
        extraX = (baseWidth * col) + (this.spacing() * col)
    }

    this.currentAlign = align

    switch(align){
        case "center":
            x = (baseWidth/2) - (textWidth + iconWidthOnText)/2
            textState.x = x + extraX
        break 
        case "right":
            x = baseWidth - (textWidth + iconWidthOnText + this.textPadding() + extraX)
            textState.x = x
        break 
    }

}

Window_Command.prototype.itemTextAlign = function() {
    return this.currentAlign
}

}

/* --------------------------- WINDOW HORZ COMMAND -------------------------- */
{

Window_HorzCommand.prototype.itemTextAlign = function() {
    return this.currentAlign
}

}

/* ----------------------------- WINDOW OPTIONS ----------------------------- */
{

// We can't fix the align here. It only causes weird behaviors, since the
// options are draw with like "two columns"
Window_Options.prototype.fixAlign = function(textState) {
    // if(Plugin.param().alignMode){
    //     this.ALIGN(textState, this.currentAlign)
    // }
}

Alias.Window_Options_drawText = Window_Options.prototype.drawText
Window_Options.prototype.drawText = function(text, x, y, maxWidth, align) {
    this.currentAlign = align
    Alias.Window_Options_drawText.call(this, text, x, y, maxWidth, align)
}

}

/* ------------------------------- WINDOW MSG ------------------------------- */
{

Alias.Window_Message_initExtraEscapeCodes = Window_Message.prototype.initExtraEscapeCodes
Window_Message.prototype.initExtraEscapeCodes = function(){
    Alias.Window_Message_initExtraEscapeCodes.call(this)
    const functions = [
        "ACTORFACE", "PARTYFACE", "FACENAME", 
        "FACEINDEX", "CHANGEFACE", "WAIT"
    ]
    for(let i = 0; i < Plugin.param().codes.message.length; i++){
        const code = Plugin.param().codes.message[i].reg
        const functionName = functions[i]
        this.actionEscapeCodes[code] = this[functionName]
    }
}

Alias.Window_Message_newPage = Window_Message.prototype.newPage
Window_Message.prototype.newPage = function(textState) {
    Alias.Window_Message_newPage.call(this, textState)
    this.fixAlign(textState)
}

Alias.Window_Message_terminateMessage = Window_Message.prototype.terminateMessage
Window_Message.prototype.terminateMessage = function() {
    Alias.Window_Message_terminateMessage.call(this)
    this.contents.hasInlineImage = false
    this.contents.imgAreas = []
}

Window_Message.prototype.ACTORFACE = function(textState){
    const actorId = Number(Plugin.obtainEscapeParam(textState))
    const actor = $dataActors[actorId]
    if(actor){
        const faceName = actor.faceName
        const faceIndex = actor.faceIndex

        $gameMessage.setFaceImage(faceName, faceIndex)
        this.refreshFace()
    }
}

Window_Message.prototype.PARTYFACE = function(textState){
    const memberIndex = Number(Plugin.obtainEscapeParam(textState))
    const member = $gameParty.members()[memberIndex]
    if(member){
        const faceName = member.faceName()
        const faceIndex = member.faceIndex()

        $gameMessage.setFaceImage(faceName, faceIndex)
        this.refreshFace()
    }
}

Window_Message.prototype.FACENAME = function(textState){
    const faceName = Plugin.obtainEscapeParam(textState)
    const faceIndex = $gameMessage.faceIndex()

    $gameMessage.setFaceImage(faceName, faceIndex)
    this.refreshFace()
}

Window_Message.prototype.FACEINDEX = function(textState){
    const faceName = $gameMessage.faceName()
    const faceIndex = Number(Plugin.obtainEscapeParam(textState))

    $gameMessage.setFaceImage(faceName, faceIndex)
    this.refreshFace()
}

Window_Message.prototype.CHANGEFACE = function(textState){
    const [faceName, faceIndex] = Plugin.obtainEscapeParam(textState).split(",")
    
    $gameMessage.setFaceImage(faceName, Number(faceIndex))
    this.refreshFace()
}

Window_Message.prototype.DRAWIMG = function(textState){
    let [folder, fileName, keepRatio, center] = Plugin.obtainEscapeParam(textState).split(",")
    const bitmap = Plugin.getBitmapFromDrawCode(folder, fileName)
    keepRatio = keepRatio === undefined ? true : JSON.parse(keepRatio.toLowerCase())
    center = center === undefined ? false : JSON.parse(center.toLowerCase())

    let dx = textState.x
    let dy = textState.y
    this.contents.hasInlineImage = true

    bitmap.addLoadListener(() => {
        const winHeight = this.contentsHeight()
        const sw = bitmap.width
        const sh = bitmap.height
        
        let dw = sw
        let dh = sh

        if(keepRatio && sh > winHeight){
            const ratio = Math.trunc(sh/winHeight)
            dw /= ratio
            dh /= ratio
        }

        if(center && sh < winHeight){
            dy = Math.abs(winHeight/2 - dh/2)
        }

        const rect = new Rectangle(dx, dy, dw, dh)
        this.contents.imgAreas.push(rect)
        this.contents.blt(bitmap, 0, 0, sw, sh, dx, dy, dw, dh)

    })
}

// Wait Message
Window_Message.prototype.WAIT = function(textState){
    const waitCount = Number(Plugin.obtainEscapeParam(textState))
    this.startWait(waitCount)
}

Window_Message.prototype.getFaceRect = function() {
    const width = Window_Base._faceWidth
    const height = this.innerWidth
    const x = 0

    return new Rectangle(x, 0, width, height)
}

Window_Message.prototype.refreshFace = function() {
    if(Imported.Eli_FaceWindow){
        Eli.FaceWindow.getFaceWindow().refreshFaceSprite($gameMessage.faceName(), $gameMessage.faceIndex())
    }else{
        this.loadMessageFace()
        this._faceBitmap.addLoadListener( () => {
            const {x, y, width, height} = this.getFaceRect()
            this.contents.clearRect(x, y, width, height)
            this.drawMessageFace()
        })
    }
}

}

/* --------------------------- WINDOW SCROLL TEXT --------------------------- */
{

Alias.Window_ScrollText_initialize = Window_ScrollText.prototype.initialize
Window_ScrollText.prototype.initialize = function(x, y, width, height) {
    Alias.Window_ScrollText_initialize.call(this, x, y, width, height)
    this.createInlineSpriteForImages()
}

Alias.Window_ScrollText_updateMessage = Window_ScrollText.prototype.updateMessage
Window_ScrollText.prototype.updateMessage = function() {
    Alias.Window_ScrollText_updateMessage.call(this)
    if(this.inlineImageSprite){
        this.updateInlineImageSprite()
    }
}

Alias.Window_ScrollText_terminateMessage = Window_ScrollText.prototype.terminateMessage
Window_ScrollText.prototype.terminateMessage = function() {
    Alias.Window_ScrollText_terminateMessage.call(this)
    this.contents.hasInlineImage = false
    this.contents.imgAreas = []
    this.currentAlign = "left"
    this.createInlineSpriteForImages()
}

Window_ScrollText.prototype.createInlineSpriteForImages = function(){
    if(this.inlineImageSprite){
        this.inlineImageSprite.destroy()
    }
    this.inlineImageSprite = new Sprite_InlineImageContainer()
    this.addChild(this.inlineImageSprite)
    this.imageIds = []
}

Window_ScrollText.prototype.updateInlineImageSprite = function(){
    const y = this.origin.y + this.height
    this.inlineImageSprite.y = this.height - y
    this.inlineImageSprite.children.forEach(child => {
        child.visible = child.y < Graphics.height
    })
}

Window_ScrollText.prototype.DRAWIMG = function(textState){
    let [id, folder, fileName, center] = Plugin.obtainEscapeParam(textState).split(",")
    center = center === undefined ? false : true
    const bitmap = Plugin.getBitmapFromDrawCode(folder, fileName)

    let dx = textState.x
    let dy = textState.y

    this.contents.hasInlineImage = true

    bitmap.addLoadListener(() => {
        const sw = bitmap.width
        const sh = bitmap.height
        let dw = sw
        let dh = sh
        if(center){
            dx = this.width/2 - sw/2
        }
        const rect = new Rectangle(dx, dy, dw, dh)
        
        this.contents.imgAreas.push(rect)

        if(this.inlineImageSprite && !this.imageIds.includes(id)){
            const sprite = new Sprite(bitmap)
            sprite.visible = false
            sprite.x = dx +16
            sprite.y = dy
            this.imageIds.push(id)
            this.inlineImageSprite.addChild(sprite)
        }
    })
}

}

/* ------------------------------ WINDOW CHOICE ----------------------------- */
{

Alias.Window_ChoiceList_initialize = Window_ChoiceList.prototype.initialize
Window_ChoiceList.prototype.initialize = function(messageWindow) {
    this.initMessageActionsMembers()
    Alias.Window_ChoiceList_initialize.call(this, messageWindow)
}

Alias.Window_ChoiceList_start = Window_ChoiceList.prototype.start
Window_ChoiceList.prototype.start = function() {
    this.initMessageActionsMembers()
    Alias.Window_ChoiceList_start.call(this)
}

Alias.Window_ChoiceList_itemRectForText = Window_ChoiceList.prototype.itemRectForText
Window_ChoiceList.prototype.itemRectForText = function(index) {
    const rect = Alias.Window_ChoiceList_itemRectForText.call(this, index)
    const textState = {text: this.commandName(index).substring(0), x: rect.x, y: rect.y, left: rect.x}
    this.ALIGN(textState, this.currentAlign)
    rect.x = textState.x
    
    return rect
}

Window_ChoiceList.prototype.initMessageActionsMembers = function() {
    this.cachedMaxChoiceWidth = 0
    this.currentAlign = "left"
}

Window_ChoiceList.prototype.getCleanChoiceTexts = function(text){
    return Plugin.removeAllEscapeCodes(text)
}

// Overwrite
Window_ChoiceList.prototype.maxChoiceWidth = function() {
    if(this.cachedMaxChoiceWidth === 0){
        const choices = $gameMessage.choices().map(this.getCleanChoiceTexts.bind(this))
        let maxWidth = -1

        for (const choice of choices) {
            const textWidth = this.textWidthEx(choice)
            const choiceWidth = Math.ceil(textWidth) + this.textPadding() * 2

            if (maxWidth < choiceWidth) {
                maxWidth = choiceWidth
            }
        }
        this.cachedMaxChoiceWidth = maxWidth

        return maxWidth

    }else{
        return this.cachedMaxChoiceWidth
    }
}

}

}