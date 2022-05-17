import React from 'react'
import styles from "../styles/modal.module.scss"

const Modal = ({ setModal, player }) => {

    return (

        <div className={styles.modal_container} >
            <div className={styles.modal}>

                <div className={styles.close_modal} onClick={() => setModal(false)}>

                    <img src="./assets/close-svgrepo-com.svg" alt="logo" />
                </div>

                <div className={styles.modal_content}>
                    <img src={player.image} alt="logo" />
                    <div >
                        <h4>Name:{player.name}</h4>
                        <h4> Age: {player.age}</h4>
                        <h4>Country: {player.nationalities[0].name}</h4>
                        <h4 className={styles.captain} >{player.captain ? "Captain" : null}</h4>
                        <h4>Positions: {player.positions.first.name}</h4>
                        <h4>ShirtNumber: {player.shirtNumber}</h4>
                        <h4> Market Value: {player.marketValue.currency} {player.marketValue.value}  </h4>

                    </div>
                </div>
            </div>

        </div>
    )
}

export default Modal
