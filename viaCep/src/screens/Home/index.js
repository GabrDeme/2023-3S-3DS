import { BoxInput } from "../../components/BoxInput";
import { ScrollForm, ContainerForm } from "./style";

export function HomeScreen() {



    return(


        <ScrollForm>
            <ContainerForm>
                <BoxInput
                    textLabel = "Informe o seu CEP"
                    placeholder="Cep..."
                    keyType="numeric"
                />
            </ContainerForm>
        </ScrollForm>
    )
}