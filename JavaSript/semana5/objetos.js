let persona;
function crearPersona(){
    persona = {
        name: "yona",
        years: 23,
        gender: "M",
        is_adult: function(){
            return this.years >= 18;
        },
        inches: function(){
            return this.talla/2.54;
        }
        upper_name: function(){
            return this.name.toUpperCase();
        },
        capital_name: function(){
            return 
            {
                this.upper_name().substring(0,1) +
                this.name.substring(1,this.name.lenght)
            };
        },
    };
    console.log(persona);
};
