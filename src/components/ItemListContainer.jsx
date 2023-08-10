import styles from "./ItemListContainer.module.css";

const ItemListContainer = ({greetings}) => {
return(
<div className={styles.ItemListContainer}>
    <h2>{greetings}</h2>
    <img src="../img/elsembradorfondo.jpg" alt="" />
</div>

)

}

export default ItemListContainer;