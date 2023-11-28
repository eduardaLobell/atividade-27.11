import AppBarStyled from "../components/AppBarStyled"
import ListarPersonagens from "../components/ListarPersonagens"
import { useAppDispatch } from "../store/hooks";
import { useEffect } from 'react';
import { listarPersonagens } from "../store/modules/personagens/actions";


function Home () {

    
    const dispatch = useAppDispatch();

	useEffect(() => {
		dispatch(listarPersonagens());
	}, []);


    return (
		<>
            <AppBarStyled />
			<ListarPersonagens/>
		</>
	)
}

export default Home