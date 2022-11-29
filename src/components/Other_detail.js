import {COLORS} from "../../values/colors.js"
export default function Other_detail({data}){
    return(
        <>
         <span style={{ color: COLORS.grey }}>
                            {data[0]?.ride_otherdetail}
                        </span>
        </>
    )
}