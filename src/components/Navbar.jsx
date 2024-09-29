import React from 'react'
import Card from './Card'
import styles from '../styles'

function Navbar() {
    return (
        // <section className={`${styles.outerWrapper}`}>
        <div className={`${styles.wrapper} fixed bottom-0 w-full left-1/2 transform -translate-x-1/2 flex flex-wrap gap-4 items-center justify-center pb-4 sm:pb-6 md:pb-10`}>
            <Card title={"Tropical Rainforest"} link={"/"} imageSrc={"https://images.unsplash.com/photo-1697350978674-4b40261b0dc3?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"} />
            <Card title={"Desert"} link={"desert"} imageSrc={"https://images.unsplash.com/photo-1509316785289-025f5b846b35?q=80&w=1476&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"} />
            <Card title={"Tundra"} link={"tundra"} imageSrc={"https://images.unsplash.com/photo-1701173681184-d949e51add3a?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"} />
            <Card title={"Coral Reef"} link={"coral-reef"} imageSrc={"https://images.unsplash.com/photo-1533713692156-f70938dc0d54?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"} />
            <Card title={"Grassland"} link={"grassland"} imageSrc={"https://plus.unsplash.com/premium_photo-1676218966210-298056b2b978?q=80&w=1523&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"} />
        </div>

        // </section>
    )
}

export default Navbar