import { useState } from "react";
import { UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from "reactstrap";

const FilterUrutan = (props) => {
    const [dataChoose, setDataChoose] = useState('');
    const dataStatus = [
        {
            name: "Tanggal Terbaru",
            idStatus: "-1"
        },
        {
            name: "Nominal Tertinggi",
            idStatus: "-2"
        },
        {
            name: "Alphabet A-Z",
            idStatus: "1"
        },
    ]

    return (
        <UncontrolledDropdown>
            <DropdownToggle caret>
            {dataChoose || 'Urutkan Berdasarkan'}
            </DropdownToggle>
            <DropdownMenu>
                {dataStatus.map((item, key)=> (
                    <DropdownItem key={key} 
                        onClick={()=>{
                            setDataChoose(item.name)
                            props.sendData(item.idStatus)
                        }}
                    >
                    {item.name}
                    </DropdownItem>
                ))}
            </DropdownMenu>
        </UncontrolledDropdown>
    )
}

export default FilterUrutan;