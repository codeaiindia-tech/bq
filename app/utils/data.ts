import { RiToothLine } from 'react-icons/ri';
import { BsLungs } from "react-icons/bs";
import { LuBrain } from 'react-icons/lu';
import { BiReceipt } from 'react-icons/bi';

export const services = [
    {
        id: 1,
        name: "Dental Care",
        symbol: "https://res.cloudinary.com/dfdy6igxt/image/upload/v1772870726/tooth_f4osd7.png",
        icons: RiToothLine
    },
    {
        id: 2,
        name: "Pulmonary Care",
        symbol: "https://res.cloudinary.com/dfdy6igxt/image/upload/v1772870726/lungs_1_p89dtp.png",
        icons: BsLungs
    },
    {
        id: 3,
        name: "Neurological Care",
        symbol: "https://res.cloudinary.com/dfdy6igxt/image/upload/v1772870726/human-brain_q2zrej.png",
        icons: LuBrain
    },
    {
        id: 4,
        name: "Pediatrics",
        symbol: "https://res.cloudinary.com/dfdy6igxt/image/upload/v1772870726/medical-file_xy7dtw.png",
        icons: BiReceipt
    }
]

export const uspa = [
    {
        title: "Qualified Doctors",
        img: "https://res.cloudinary.com/dfdy6igxt/image/upload/v1772870726/doctor-woman_yhmofz.png",
    },
    {
        title: "Emergency Care",
        img: "https://res.cloudinary.com/dfdy6igxt/image/upload/v1772870726/doctor-woman_copy_vmec0t.png",
    },
    {
        title: "24 Hours Service",
        img: "https://res.cloudinary.com/dfdy6igxt/image/upload/v1772870726/doctor-woman_copy_2_ovzror.png",
    },
]

export const doctors = [
    {
        id: 1,
        name: "Dr. Awaatif Al",
        desc: "Dental Care"
    },
    {
        id: 2,
        name: "Dr. Filipa Gaspar",
        desc: "Cardiology"
    },
    {
        id: 3,
        name: "Dr. Sukhmeet Gorae",
        desc: "Neurological"
    },
    {
        id: 4,
        name: "Dr. Siri Jakobsson",
        desc: "Prediatrics"
    }
]