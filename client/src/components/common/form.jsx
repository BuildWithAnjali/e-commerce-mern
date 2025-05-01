// import { SelectContent, SelectItem, SelectTrigger, SelectValue } from "@radix-ui/react-select";

import {SelectContent, SelectItem, SelectTrigger, SelectValue} from "../components/ui/select"
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { Textarea } from "../components/ui/textarea";
import { Select } from "../components/ui/select";
import {Button } from "../components/ui/button";







function CommonForm({formControls , formData , setFormData , onSubmit ,buttonText,isBtnDisabled}) {


 function renderInputsByComponentType(getControlItem){
    let element = null;

    const value = formData[getControlItem.name] || ''
    
    switch (getControlItem.componentType) {
        case 'input':
            element = (<input className="bg-slate-50 hover:bg-gray-200"
            name={getControlItem.name}
            placeholder={getControlItem.placeholder}
            id = {getControlItem.name}
            type = {getControlItem.type}
           value={value}
           onChange={event=>setFormData({
            ...formData,
            [getControlItem.name] : event.target.value
           })}
            
            />);
            break;

            case 'select':
            element =(
                <Select    onValueChange={(value)=>setFormData({
                    ...formData,
                    [getControlItem.name] : value
                })}          value={value}>
                    <SelectTrigger className="w-full">
                        <SelectValue placeholder={getControlItem.label}/>
                    </SelectTrigger>

                    <SelectContent>
                        {
                            getControlItem.options &&
                            getControlItem.options.length > 0 ?
                            getControlItem.options.map(optionItem => <SelectItem key= {optionItem.id} value={optionItem.id}>{optionItem.label}</SelectItem>) 
                            : null
                        }
                    </SelectContent>
                </Select>
            )
            break;

            case 'textarea':
            element = (
                <Textarea
                name={getControlItem.name}
                placeholder={getControlItem.placeholder}
                id ={getControlItem.id }
                value={value}
           onChange={event=>setFormData({
            ...formData,
            [getControlItem.name] : event.target.value
           })}
                />
            )
            break;
    
        default:
            element = (<Input
            name={getControlItem.name}
            placeholder={getControlItem.placeholder}
            id = {getControlItem.name}
            type = {getControlItem.type}
            value={value}
           onChange={event=>setFormData({
            ...formData,
            [getControlItem.name] : event.target.value
           })}
            />);
            break;
    }
    return element
 }




    return(
        <form onSubmit={onSubmit }>
           <div className="flex flex-col gap-3">

            {
             formControls.map(controlItem => (<div key={controlItem.name}  className="grid w-full gap-1.5 "> 
             <Label className="mb-1 text-left">{controlItem.label}</Label>
             {
                renderInputsByComponentType(controlItem)
             }
             </div>))
            }

           </div>
           <Button disabled={isBtnDisabled} type="submit" className="mt-2 w-full bg-gray-950 text-white hover:bg-slate-200 hover:text-black">{buttonText || 'Submit'}</Button>
        </form>
    )
}
export default CommonForm;