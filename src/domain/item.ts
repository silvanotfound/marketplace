export class DimensionsItem {
    constructor(readonly height: number, readonly width: number, readonly depth: number, readonly weight: number) {
    }
}

export class Item {
    constructor(readonly id: number, readonly name: string, readonly price: number, readonly dimensions?: DimensionsItem ) {        
    }

    getVolume(): number {
        if(this.dimensions == undefined) throw new InvalidItemError("Item não possui parametros de dimensão");
        return this.dimensions?.height / 100 * this.dimensions?.width / 100 * this.dimensions?.depth / 100;
    }

    getDensity(): number {
        if(this.dimensions == undefined) throw new InvalidItemError("Item não possui parametros de dimensão");
        return Math.trunc(this.dimensions?.weight / this.getVolume());
    }    
}

export class InvalidItemError extends Error {
    constructor(message: string) {
        super(message);
    }
}