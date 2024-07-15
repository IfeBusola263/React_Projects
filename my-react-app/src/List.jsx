
function List(props) {

    const propsList = props.items;
    const category = props.category;
    const listNames = propsList.map((item)=> {
        return <li key={item.id}>{item.name} :  <b>{item.country}</b></li>
    }); 
    return(
    <>
        <h3 className="list-category">{category}</h3>
        <ul className="list-items">{listNames}</ul>
    </>
    
    );
}

List.defaultProps = {
    category: "Category",
    items: [],

}

export default List