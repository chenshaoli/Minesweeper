
const BG = "*";
const LARGE = 10;
const site = {
    x: Math.floor(Math.random() *  LARGE) + 0,
    y: Math.floor(Math.random() *  LARGE) + 0
}
const generateBg = (mineArray)=>{
    const {x,y} = site;
    const item = mineArray[x][y];
    const newItem = {...item,value:BG};
    mineArray[x].splice(y,1,newItem);
    return mineArray
}

export const mineArray = new Array(LARGE).fill(0)
.map(i=>i=new Array(LARGE).fill(new Object({value:LARGE})));

export const mineBgArray = generateBg(mineArray);