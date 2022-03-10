
var sha256 = require('crypto-js/sha256');

class Block{
    constructor(index,timeStamp,data,prevHash=''){
        this.index=index;
        this.timeStamp=timeStamp;
        this.data=data;
        this.prevHash=prevHash;
        this.hash=''
    }
    calculateHash(){
        return sha256(this.index) + (this.timeStamp) + (this.prevHash) + JSON.stringify(this.data).toString()
    }
}

class Blockchain{
    constructor(){
        this.chain=[this.createGenesisBlock()];
    }

    createGenesisBlock(){
        return new Block(0,"10-03-2022","Hey First Block","0")
    }

    getLatestBlock(){
        return this.chain[this.chain.length-1];
    }

    addBlock(Block){
        Block.prevHash = this.getLatestBlock().hash;
        Block.hash =  Block.calculateHash();
        this.chain.push(Block);
    }
}

let sahil = new Blockchain();
sahil.addBlock(Block(1,"10-03-2022",{msg:"hey this is first block"},"1"))

console.log (JSON.stringify(sahil,null,4));