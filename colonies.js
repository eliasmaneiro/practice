const cities = require('./ubication')

class AllColonies {
    groupAllColonies (){
        return cities.flatMap(e => e.cities).flatMap(e => e.colonies)
    }
}