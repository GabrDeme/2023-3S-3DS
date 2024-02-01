import { Input } from "../Input/index"
import { Label } from "../Label/index"
import { FieldContent } from "./style"

export const BoxInput = ({
    fieldWidth = 100,
    editable = false,
    textLabel,
    placeholder,
    fieldValue = null,
    onChangeText = null,
    keyType = 'default',
    maxLenght
}) => {
    return (
        <FieldContent fieldWidth={fieldWidth}>
        <Label textLabel={textLabel}/>
        <Input
            placeholder={placeholder}
            editable={editable}
            keyType={keyType}
            maxLenght={maxLenght}
            fieldValue={fieldValue}
            onChangeText={onChangeText}
        />
        </FieldContent>
    )
}
