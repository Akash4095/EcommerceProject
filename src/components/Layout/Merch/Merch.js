import MerchProducts from "./MerchProducts";
import styles from './Merch.module.css';


const Merch = () => {
    return (
        <div className={styles.merchBody}>
            <h2>MERCH</h2>
            <MerchProducts/>
        </div>
    )
}

export default Merch;
