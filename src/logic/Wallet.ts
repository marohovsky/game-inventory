import IObserver from "./interface/IObserver";
import IObserverData from "./interface/IObserverData";

class Wallet implements IObserver {
    private _coinName: string;
    private _coinAmount: number;

    constructor (coinName: string, coinAmount: number) {
        this._coinName = coinName;
        this._coinAmount = coinAmount
    }

    onModifications = ({operationType, item}: IObserverData): void => {
        switch (operationType) {
            case 'add':
                this.reduceAmount(item.price);
                break;
            case 'remove':
                this.addAmount(item.price) 
                break;
          }
    }

    get coinName(): string {
        return this._coinName;
    }
    get coinAmount(): number {
        return this._coinAmount;
    }

    addAmount = (amount: number) => {
        this._coinAmount = this._coinAmount + amount;
    }

    reduceAmount = (amount: number) => {
        this._coinAmount = this._coinAmount - amount;
    }
    

}
export default Wallet;