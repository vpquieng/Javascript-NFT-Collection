/*
Assessment Requirements
1. Create a variable that can hold a number of NFT's. What type of variable might this be?
2. Create an object inside your mintNFT function that will hold the metadata for your NFTs. 
   The metadata values will be passed to the function as parameters. When the NFT is ready, 
   you will store it in the variable you created in step 1
3. Your listNFTs() function will print all of your NFTs metadata to the console (i.e. console.log("Name: " + someNFT.name))
4. For good measure, getTotalSupply() should return the number of NFT's you have created
*/

// create a variable to hold your NFT's

// this function will take in some values as parameters, create an
// NFT object using the parameters passed to it for its metadata, 
// and store it in the variable above.
const NFT_Collection = [];

function mintNFT (name, cardType, attack, defense, rarity) {
    const NFT_Card = {
        "name" : name,
        "cardType" : cardType,
        "attack" : attack,
        "defense" : defense,
        "rarity" : rarity
    }
    NFT_Collection.push(NFT_Card);
    console.log("Card added " + name);
}

// create a "loop" that will go through an "array" of NFT's
// and print their metadata with console.log()
function listNFTs () {
    for(let i = 0; i < NFT_Collection.length; i++){
        console.log("\nName \t\t" + NFT_Collection[i].name),
        console.log("Type \t\t" + NFT_Collection[i].cardType),
        console.log("Attack \t\t" + NFT_Collection[i].attack),
        console.log("Defense \t" + NFT_Collection[i].defense),
        console.log("Rarity \t\t" + NFT_Collection[i].rarity)
    }
}

// print the total number of NFTs we have minted to the console
function getTotalSupply() {
    console.log(NFT_Collection.length);
}

// call your functions below this line
mintNFT("Dark Magician", "Monster", 2500, 2100, "Ultra Rare");
mintNFT("Blue-Eyes White Dragon", "Monster", 3000, 2500, "Ultra Rare");
mintNFT("Mystical Space Typhoon", "Spell", 0, 0, "Common");
mintNFT("Mirror Force", "Trap", 0, 0, "Super Rare");

listNFTs();
getTotalSupply();