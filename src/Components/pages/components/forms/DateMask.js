
import ReactInputDateMask from 'react-input-date-mask';
export const DateInput = (props) => {
    return <ReactInputDateMask mask='dd/mm/yyyy' showMaskOnFocus={true} className={props.className} value={props.value} onChange={props.onChange} showMaskOnHover={true} />;

} 