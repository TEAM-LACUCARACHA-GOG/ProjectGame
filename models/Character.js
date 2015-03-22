
var characterModel = (function(){
    var Character;
    Character = (function(){
        function Character(Strength, Intelligence, Agillity){
            this.setStrength(Strength);
            this.setIntelligence(Intelligence);
            this.setAgillity(Agillity);
        }

        Character.prototype.setStrength = function (value) {
            this._Strength = value;
        }

        Character.prototype.getStength = function(){
            return this._Strength;
        }

        Character.prototype.setIntelligence = function (value) {
            this._Intelligence = value;
        }

        Character.prototype.getIntelligence = function(){
            return this._Intelligence;
        }

        Character.prototype.setAgillity = function (value) {
            this._Agillity = value;
        }

        Character.prototype.getAgillity = function(){
            return this._Agillity;
        }



        Character.prototype.InitCharacterStats = function(){
            this._MaxHealth = this._Strength * 5;
            this._CurrentHealth = this._MaxHealth;
            this._MaxMana = this._Intelligence * 5;
            this._CurrentMana = this._MaxMana;
            this._PhisicalDamage = this._Strength/2;
            this._MagicDamage = this._Intelligence/2;
            this._PhisicalResistance = this._Strength/4;
            this._MagicResistance = this._Intelligence/4;
        }
    }());
}());
