import { useState, useEffect } from "react";
import { BoxInput } from "../../components/BoxInput";
import { ScrollForm, ContainerForm, ContainerUF } from "./style";
import axios from 'axios'

export function HomeScreen() {

    const [cep, setCep] = useState();
    const [endereco, setEndereco] = useState({});

    useEffect(() => {
        if (cep) {
            buscarEndereco();
        }
        else {

        }
    }, [cep]);

    const buscarEndereco = async () => {
        try {
            const response = await axios.get(`https://viacep.com.br/ws/${cep}/json/`)
            setEndereco(response.data)
        } catch (error) {
            console.log(error);
        }
    }
    return (
        <ScrollForm>
            <ContainerForm>
                <BoxInput
                    textLabel="Informe o seu CEP"
                    placeholder="Cep..."
                    keyType="numeric"
                    editable={true}
                    onChangeText={text => setCep(text)}
                    fieldValue={cep}
                />
                <BoxInput
                    textLabel="Logradouro"
                    placeholder="Logradouro..."
                    fieldValue={(endereco.logradouro)}
                />
                <BoxInput
                    textLabel="Bairro"
                    placeholder="Bairro..."
                    fieldValue={(endereco.bairro)}
                />
                <BoxInput
                    textLabel="Cidade"
                    placeholder="Cidade..."
                    fieldValue={(endereco.localidade)}
                />
                <ContainerUF>
                    <BoxInput
                        fieldWidth={60}
                        textLabel="Estado"
                        placeholder="Estado..."
                        editable={true}
                        // fieldValue={(endereco.uf)}
                    />
                    <BoxInput
                        fieldWidth={25}
                        textLabel="UF"
                        placeholder="UF..."
                        fieldValue={(endereco.uf)}
                    /></ContainerUF>
            </ContainerForm>
        </ScrollForm>
    )
}