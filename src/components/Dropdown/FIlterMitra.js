import { useState } from "react";
import { UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from "reactstrap";

const FilterMitra = (props) => {
    const [dataChoose, setDataChoose] = useState('');
    const dataStatus = [
        {
            name: "Tanggal Terbaru",
            idStatus: "-1"
        },
        {
            name: "Nominal Tertinggi",
            idStatus: "-2"
        }
    ]

    return (
        <UncontrolledDropdown>
            <DropdownToggle caret>
            {dataChoose || 'Pilih Mitra'}
            </DropdownToggle>
            <DropdownMenu>
                <DropdownItem
                        onClick={()=>{
                            setDataChoose("Semua")
                            props.sendData("")
                        }}
                    >
                    Semua
                </DropdownItem>
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

export default FilterMitra;