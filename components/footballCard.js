import React from 'react'
import styles from '../styles/index.module.scss';


const FootballCard = ({ playerData, setModal, setPlayer }) => {

    const handleClick = () => {
        setModal(modal => !modal);
        setPlayer(playerData);
    }

    return (
        <>
            <div className={styles.card} onClick={handleClick}  >

                <div className={styles.card__image}>
                    <img src={playerData.image} alt="logo" />
                </div>
                <div className={styles.card__content}>
                    <h4>{playerData.name}</h4>
                    <h4>{playerData.nationalities[0].name}</h4>
                    <h4> ShirtNumber:{playerData.shirtNumber}</h4>
                    <h4 className={playerData.captain ? styles.captain : null}>{playerData.captain ? "Captain" : null}</h4>
                </div>
            </div>
        </>


    )
}



export default FootballCard
