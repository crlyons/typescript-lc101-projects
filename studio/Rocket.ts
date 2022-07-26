import { Payload } from "./Payload";
import { Cargo } from "./Cargo";
import { Astronaut } from "./Astronaut";

export class Rocket {
   name: string;
   totalCapacityKg: number;
   cargoItems: [];
   astronauts: [];

   constructor(name: string, totalCapacityKg: number){
    this.name = name;
    this.totalCapacityKg = totalCapacityKg;
 }

    sumMass( items: Payload[] ): number{
        let mass = 0;
        for (i=0; i <this.items.length; i++){
             mass +=  items[i].massKg;
           }
        return mass
 }

    currentMassKg(): number {
        let astroMass = this.sumMass(this.astronauts) ;
        let cargoMass = this.sumMass(this.cargoItems);

        return astroMass + cargoMass;
    }

    canAdd(item: Payload): boolean {
        if (this.currentMassKg() + item.massKg <= this.totalCapacityKg) {
            return true;
        }
        else return false;
    }

    addCargo(cargo: Cargo): boolean {
        if(this.canAdd(cargo)) {
            this.cargoItems.push(cargo);
            return true;
        }
        else return false;
    }


    addAstronaut(astronaut: Astronaut): boolean {
        if(this.canAdd(astronaut)) {
            this.astronauts.push(astronaut);
            return true;
        }
        else return false;
    }
}; 
