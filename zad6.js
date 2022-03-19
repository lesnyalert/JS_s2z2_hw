class Translator{
    constructor(text, translateMethod){
        this.text = text;
        this.translateMethod = translateMethod;
    }
    Translate(){
        return this.translateMethod(this.text);
    }
}
class TranslationsEngine{
    ToPigLatin(text){
        // acctual code transformation
        return text + "after modificatin";
    }
    ReverseFromPigLatin(text){
        // accual code transformation
        return text + "after modificatin";
    }
}
let translationEngine = new TranslationsEngine();
let toPigLatinTranslator = new Translator("The quick brown fox", translationEngine.ToPigLatin);
console.log(toPigLatinTranslator.Translate());
let fromPigLatinToEnglish = new Translator("Hetay uickqay rownbay oxfay", translationEngine.ReverseFromPigLatin);
console.log(fromPigLatinToEnglish.Translate());









