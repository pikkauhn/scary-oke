"use client"

import { MegaMenu } from 'primereact/megamenu';
import { InputText } from 'primereact/inputtext';
import Image from 'next/image';

import Logo from '../assets/images/logo.png';

export default function Navbar() {
    const items = [
        {
            label: 'User', icon: 'pi pi-fw pi-user',
            items: [

            ]
        }
    ];

    const start = <Image alt="scaryoke-logo" src={Logo} width="40" className="mr-2" />;
    const end = <InputText placeholder="Search" type="text" />

    return (
        <div className="card">
            <MegaMenu model={items} start={start} end={end} />
        </div>
    )
} 