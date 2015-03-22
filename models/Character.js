
var characterModel = (function(){
    var Character;
    Character = (function(){
        function Character(strength, intelligence, agillity){
            this.setStrength(strength);
            this.setIntelligence(intelligence);
            this.setAgillity(agillity);
        }

        Character.prototype.setStrength = function (value) {
            this._strength = value;
        };

        Character.prototype.getStrength = function(){
            return this._strength;
        };

        Character.prototype.setIntelligence = function (value) {
            this._intelligence = value;
        };

        Character.prototype.getIntelligence = function(){
            return this._intelligence;
        };

        Character.prototype.setAgillity = function (value) {
            this._agillity = value;
        };

        Character.prototype.getAgillity = function(){
            return this._agillity;
        };

        Character.prototype.InitCharacterStats = function(){
            this._maxHealth = this.getStrength() * 5;
            this._currentHealth = this.this.getStrength() * 5;
            this._maxMana = this.getIntelligence() * 5;
            this._currentMana = this.getIntelligence() * 5;
            this._phisicalDamage = this.getStrength()/2;
            this._magicDamage = this.getIntelligence()/2;
            this._phisicalResistance = this.getStrength()/4;
            this._magicResistance = this.getIntelligence()/4;
            this._dodgeChance = this.getAgillity()/10;
            this.currentDodgeChance =this.getAgillity()/10;
            this._criticalChance = this.getAgillity()/10;
            this._currentCriticalChance = this.getAgillity()/20;
        }

        Character.prototype.getCriticalDamage = function(damage){
            return (damage*(1+this.getAgillity()/100))+0.3;
        }

    }());
}());
