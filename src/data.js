
export const BG = "*";
export const LARGE = 10;

export const GOOD_LUCK_TIMES = [9,21,40];
const MESSAGE_LIST = [
    '猜猜这个是啥？' ,
    '小心点哦！',
    '要不要再想想？',
    '它可能是个炸弹！',
    '不要点这个，它是炸弹！'
 ]
export const site =()=> ({
    x: Math.floor(Math.random() *  LARGE) + 0,
    y: Math.floor(Math.random() *  LARGE) + 0
})
export const generateBg = (mineArray)=>{
    const {x,y} = site();
    const item = mineArray[x][y];
    const newItem = {...item,value:BG};
    mineArray[x].splice(y,1,newItem);
    return mineArray
}
export const addTitle = (mineArray)=>{
    return mineArray.map(arrays=>arrays.map(k=>{
        let msgIndex = -1;
       if(!k.clicked){
          if(k.value===BG ){
             msgIndex = MESSAGE_LIST.length - 1;
          } else if(!k.title){
             msgIndex = Math.floor(Math.random()*3) +1;
            //  console.log('msgIndex: ', msgIndex);
          } 
       } else {
          msgIndex = -1;
       }
       const newTitle = (k.title && msgIndex > -1) ?  k.title  : MESSAGE_LIST[msgIndex];
       const newItem = {...k,title:newTitle};
       return newItem;
    }))
 }

 export const initArray = ()=>new Array(LARGE).fill(0)
 .map(i=>i=new Array(LARGE).fill(new Object({value:LARGE})));

export const mineArray = initArray();

export const mineBgArray = ()=>{
   const data= addTitle(generateBg(initArray()))
   console.log('data: ', data);
   return data;
};