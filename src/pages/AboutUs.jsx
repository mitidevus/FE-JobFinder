/* eslint-disable react/jsx-no-comment-textnodes */
import React from "react";
import ChiHien from "../assets/ChiHien.jpg";
import Khai from "../assets/Khai.jpg";
import MinhTri from "../assets/MinhTri.jpg";
import Tin from "../assets/Tin.jpg";

function AboutUs() {
    return (
        <div name="home" className="w-full h-full text-gray-300 bg-[#393E46]">
            <div className="pt-[120px] pb-[50px] max-w-[1100px] mx-auto p-4 flex flex-col justify-center w-full h-full">
                <p className="text-4xl font-bold inline text-[#00ADB5] text-center">About Us</p>
                <div className="grid sm:grid-cols-2 md:grid-cols-2 gap-5 ">
                    <div className="relative pt-10 flex flex-col justify-center items-center text-center">
                        <img alt="avatar" src={MinhTri} className="rounded-full border h-48 w-48" />
                        <p className="text-3xl font-bold inline text-[#00ADB5] pt-5">Đỗ Minh Trí - 20127651</p>
                    </div>
                    <div className="relative pt-10 flex flex-col justify-center items-center text-center">
                        <img alt="avatar" src={ChiHien} className="rounded-full border h-48 w-48" />
                        <p className="text-3xl font-bold inline text-[#00ADB5] pt-5">Trương Chí Hiển - 20127494</p>
                    </div>
                    <div className="relative pt-10 flex flex-col justify-center items-center text-center">
                        <img alt="avatar" src={Khai} className="rounded-full border h-48 w-48" />
                        <p className="text-3xl font-bold inline text-[#00ADB5] pt-5">Hồ Quang Khải - 20127521</p>
                    </div>
                    <div className="relative pt-10 flex flex-col justify-center items-center text-center">
                        <img alt="avatar" src={Tin} className="rounded-full border h-48 w-48" />
                        <p className="text-3xl font-bold inline text-[#00ADB5] pt-5">Trần Trọng Tín - 20127683</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default AboutUs;
