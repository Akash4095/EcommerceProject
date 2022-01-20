import MerchProducts from "./MerchProducts";
import styles from './Merch.module.css';


const Merch = () => {
    return (
        <div className={styles.merchBody}>
            <h1>MERCH</h1>
            <MerchProducts/>
        </div>
    )
}

export default Merch;