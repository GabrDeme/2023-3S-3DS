import { useState, useEffect } from "react";
import { BoxInput } from "../../components/BoxInput";
import { ScrollForm, ContainerForm, ContainerUF } from "./style";
import axios from 'axios'

export function HomeScreen() {

    const [cep, setCep] = useState();
    const [endereco, setEndereco] = useState({});
    const [estado, setEstado] = useState()

    const buscarEndereco = async () => {
        try {
            const response = await axios.get(`https://viacep.com.br/ws/${cep}/json/`)
            setEndereco(response.data)
             const estado = await axios.get (`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${response.data.uf}`)
            setEstado(estado.data.nome);
        } catch (error) {
            console.log(error);
        }
    }

    function apagarEndereco(){
        setEndereco({})
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
                    onBlur={cep ? buscarEndereco : apagarEndereco}
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
                        fieldValue={estado}
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