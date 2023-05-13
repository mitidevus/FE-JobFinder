
/* eslint-disable react/jsx-no-comment-textnodes */
import React from "react";
import { FaGithub } from "react-icons/fa";
import { RiShareBoxLine } from "react-icons/ri";
import avt from "../assets/company_avt.jfif"
import bg from "../assets/company_bg.jfif"
import { data } from "../data/Notification"

function ThoiGian() {
    const content = data[0]
    return (
        <React.Fragment>
            <p className="mt-2"><span className="font-semibold leading-normal mb-2 text-blueGray-700 mb-2">Thoi gian:</span>{content.thoiGian}</p>
            <p className="mt-2"><span className="font-semibold leading-normal mb-2 text-blueGray-700 mb-2">Ngay:</span>{content.ngay}</p>
            <p className="mt-2"><span className="font-semibold leading-normal mb-2 text-blueGray-700 mb-2">Dia diem:</span>{content.diaDiem}</p>
        </React.Fragment>
    );
}
function Details() {
    const content = data[0]
    if (content.status === 1) {
        return (
            <React.Fragment>

                <p className="mt-5"><span className="font-semibold leading-normal mb-2 text-blueGray-700 text-xl">Dear {content.to}</span></p>
                <p className="mt-5 mb-5">{content.message}</p>
                <ThoiGian></ThoiGian>

            </React.Fragment>
        );
    }
    return (
        <React.Fragment>
            <p className="mt-5"><span className="font-semibold leading-normal mb-2 text-blueGray-700 text-xl">Dear {content.to}</span></p>
            <p className="mt-5 mb-5">{content.message}</p>
            <p className="mt-5 mb-5">Rat tiec ban chua dat yeu cau</p>
        </React.Fragment>

    );
}

function Notification_details() {
    const content = data
    return (

        <div className="bg-[#393E46] antialiasedr">
            <div className="container mx-auto my-60">


                <div className="bg-white relative shadow rounded-lg w-5/6 md:w-5/6  lg:w-4/6 xl:w-3/6 mx-auto">


                    <div className="mt-16 pt-5 pb-5 ml-5">

                        <Details></Details>
                        <a href="/notification">
                            <button className="mt-5 bg-transparent hover:bg-blue-500 text-[#393E46] font-semibold hover:text-white py-2 px-4 border border-[#393E46] hover:border-transparent rounded">
                                Back
                            </button>
                        </a>
                    </div>

                </div>

            </div>

        </div>
    );
}
export default Notification_details;