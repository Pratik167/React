function List(props){
    // const fruits = [{id:1,name:"apple",cal:95},
    //     {id:2,name:"orange",cal:45},
    //     {id:3,name:"coco",cal:54},
    //     {id:4,name:"banana",cal:105},
    //     {id:5,name:"tangerine",cal:54}];
    // fruits.sort((a,b)=>a.name.localeCompare(b.name));//alphabetical
    // fruits.sort((a,b)=> b.name.localeCompare(a.name));//reverse
    // fruits.sort((a,b) => a.cal-b.cal);// based on cal
    // fruits.sort((a,b)=> b.cal-a.cal);//reverse cal
        // const lowCalFruits=fruits.filter(fruit=>fruit.cal<100);
    // const listItems = lowCalFruits.map(lowCalFruit => <li key={lowCalFruit.id}>
    //     {lowCalFruit.name}:&nbsp;
    //     <b>{lowCalFruit.cal}</b></li>);
        // const highCalFruits=fruits.filter(fruit=>fruit.cal>=100);
        // const listItems = highCalFruits.map(highCalFruit => <li key={highCalFruit.id}>
        // {highCalFruit.name}:&nbsp;
        // <b>{highCalFruit.cal}</b></li>);
        const category = props.category;
        const itemList=props.items;
        const listItems = itemList.map(item => <li key={item.id}>
        {item.name}:&nbsp;
        <b>{item.cal}</b></li>);
        
 return (<>
 <h3 className="listCategory">{category}</h3>
 <ol className="listItems ">{listItems}</ol>
 </>)
}
export default List