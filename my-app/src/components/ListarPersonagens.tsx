import { useAppSelector } from "../store/hooks"
import { Container, Grid, Card, CardMedia, CardContent, Typography, CardActions, IconButton,  } from "@mui/material"
import { Personagem } from "../store/modules/personagens/personagens.slice";

function ListarPersonagens() {

    const personagem = useAppSelector((state) => state.personagens)
    

    return (
        <>
            <Container maxWidth="md" sx={{ paddingY: 8 }}>
            toma FELIPE!
            <Grid container spacing={4}>
              {personagem.map((item: Personagem) => {
                return (
                  <Grid key={item.id} item xs={12} sm={6} md={4}>
                    <Card sx={{ width: "100%", heigth: "600px" }} elevation={4}>
                      {/* foto */}
                      <CardMedia
                        sx={{ pt: "120%" }}
                        image={item.image}
                        title={item.name}
                      />

                      {/* text */}
                      <CardContent>
                        <Typography  gutterBottom variant="h6">
                            Nome: {item.name}
                        </Typography>

                        <Typography variant="body2" color="GrayText">
                          Gênero: {item.gender}
                        </Typography>

                        <Typography variant="body2" color="GrayText">
                          Casa: {item.house}
                        </Typography>
                      </CardContent>

                    </Card>
                  </Grid>
                );
              })}
            </Grid>
          </Container>
        </>
    )
}

export default ListarPersonagens 