import { BoxInput } from "../../components/BoxInput";
import { ScrollForm, ContainerForm, ContainerUF } from "./style";

export function HomeScreen() {



    return (


        <ScrollForm>
            <ContainerForm>
                <BoxInput
                    textLabel="Informe o seu CEP"
                    placeholder="Cep..."
                    keyType="numeric"
                    editable={true}
                />
                <BoxInput
                    textLabel="Logradouro"
                    placeholder="Logradouro..."
                />
                <BoxInput
                    textLabel="Bairro"
                    placeholder="Bairro..."
                />
                <BoxInput
                    textLabel="Cidade"
                    placeholder="Cidade..."
                />
                <ContainerUF>
                    <BoxInput
                        fieldWidth={60}
                        textLabel="Estado"
                        placeholder="Estado..."
                    />
                    <BoxInput
                        fieldWidth={25}
                        textLabel="UF"
                        placeholder="UF..."
                    /></ContainerUF>
            </ContainerForm>
        </ScrollForm>
    )
}