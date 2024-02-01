import { InputText } from "./style";

export function Input({
    placeholder,
    editable,
    fieldValue,
    onChangeText,
    keyType,
    maxLength
}){
    return(
        <InputText
            placeholder={placeholder}
            editable={editable}
            keyType={keyType}
            value={fieldValue}
            onChangeText={onChangeText}
            maxLength={maxLength}
        />
    )
}