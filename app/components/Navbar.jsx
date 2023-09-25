"use client"

import { Menubar } from 'primereact/menubar';
import { InputText } from 'primereact/inputtext';
import Image from 'next/image';

import Logo from '../assets/images/logo.png';

export default function Navbar() {
    const items = [
        {
            label: 'User', icon: 'pi pi-fw pi-user',
            items: [
                {
                    label: 'Favorites',
                    icon: 'pi pi-fw pi-star'
                },
                {
                    label: 'Settings',
                    icon: 'pi pi-fw pi-cog'
                }
            ]
        }
    ]


    const start = <Image alt="scaryoke-logo" src={Logo} width="40" className="mr-2" />;
    const end = (
        <span className="p-input-icon-left">
            <i className="pi pi-search" />
            <InputText placeholder="Search" />
        </span>
    );
    
    return (
        <Menubar model={items} start={start} end={end} />
    )
} 