import React, {ChangeEvent, useState} from "react";
import s from "./dropDownMenu.module.scss";
import user from "../../asseds/images/icons-user.svg";
import logout from "../../asseds/images/icons-logout.svg";
import password from "../../asseds/images/icons-change-password.svg";

export const DropDownMenu = () => {
    const [salary, setSalary] = useState<string>("Vasilina Kazachonak")
    const [options, setOptions] = useState<Array<string>>(["Vasilina Kazachonak", "Logout", "Change password"])

    const currentValue = (e: ChangeEvent<HTMLSelectElement>) => {
        setSalary(e.currentTarget.value);
    }

    return <div className={s.container}>
        <img src={
            salary === "Logout" ? logout
                : salary === "Change password" ? password
                    : salary === "Vasilina Kazachonak" ? user : ""
        } alt={""}/>
        <select className={s.select} onChange={currentValue}>
            {options.map(option => <option className={s.select} key={option}>{option}</option>)}
        </select>
    </div>
}
