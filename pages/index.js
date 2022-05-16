import React from 'react'
import FootballCard from '../components/footballCard'
import styles from '../styles/index.module.scss';
import { useState } from 'react';
import Modal from '../components/modal';

const index = ({ data }) => {
    const [player, setPlayer] = useState(null);
    const [modal, setModal] = useState(false);

    return (
        <>
            <div className={styles.container}>
                {data.squad.map(item => {
                    console.log(item)
                    return <FootballCard setModal={setModal} key={item.id} setPlayer={setPlayer} playerData={item} />
                }
                )}
            </div>
            {modal && <Modal player={player} setModal={setModal} />}


        </>
    )
}
export async function getStaticProps() {
    const url = 'https://transfermarket.p.rapidapi.com/clubs/get-squad?id=46';
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Host': 'transfermarket.p.rapidapi.com',
            'X-RapidAPI-Key': '81a4dc924dmshb8415035efd043fp125d81jsn662bd17a3d78'
        }
    };
    const res = await fetch(url, options)
    const data = await res.json()
    console.log(data)
    return {
        props: {
            data
        },
        revalidate: 300  // güncelleme süresi
    }
}
export default index