import Button from "@mui/material/Button";
import Table from "@mui/material/Table";
import TableContainer from "@mui/material/TableContainer";
import Paper from "@mui/material/Paper";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import TableBody from "@mui/material/TableBody";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import { filledInputClasses } from "@mui/material/FilledInput";
import { inputBaseClasses } from "@mui/material/InputBase";
import FormControl from "@mui/material/FormControl";
import Input from "@mui/material/Input";
import InputLabel from "@mui/material/InputLabel";
import FormHelperText from "@mui/material/FormHelperText";
import { useEffect, useState } from "react";
import api from "../API/routes";

function Home({ user, onTrigger, trigger }) {
  const [dessert, setDessert] = useState("");
  const [fat, setFat] = useState("");
  const [calories, setCal] = useState("");
  const [carbs, setCarb] = useState("");
  const [protein, setProtein] = useState("");
  const [err, setErr] = useState(false);
  const [select, setSelect] = useState("");

  async function handleDelete(todo) {
    console.log("id", todo);

    // const itemSelected = user.filter((user) => user.id === e);

    // console.log(itemSelected);

    try {
      const res = await api.delete(`/dessert/${todo}`);
      onTrigger(() => !trigger);
      console.log("Deleted", res.data);
    } catch (error) {
      console.log(error);
    }
  }

  async function handleSubmit(e) {
    e.preventDefault();
    const fields = [dessert, fat, calories, carbs, protein];

    if (fields.some((field) => field === "")) {
      setErr(true); // trigger error
      return; // stop submission
    }
    setErr(false);
    // if (dessert === "") return setErr(true);

    const details = {
      dessert,
      fat,
      calories,
      carbs,
      protein,
    };

    try {
      const res = await api.post(`/dessert`, details);
      onTrigger(() => !trigger);
      setDessert("");
      setFat("");
      setCal("");
      setCarb("");
      setProtein("");
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <form action="" onSubmit={handleSubmit}>
        <Container maxWidth="xl">
          <Grid
            container
            spacing={6}
            justifyContent={"center"}
            style={{ padding: "30px" }}
          >
            <Grid>
              <TextField
                error={err}
                id="standard-basic des"
                label="Dessert"
                variant="standard"
                value={dessert}
                helperText={err && "Don't leave empty"}
                size="small"
                onChange={(e) => setDessert(e.target.value)}
                style={{ width: "200px" }}
              />
            </Grid>
            <Grid>
              <TextField
                error={err}
                id="standard-suffix-shrink calories"
                label="Calories"
                variant="standard"
                value={calories}
                size="small"
                helperText={err && "Don't leave empty"}
                onChange={(e) => setCal(e.target.value)}
                style={{ width: "150px" }}
                slotProps={{
                  htmlInput: {
                    sx: { textAlign: "left" },
                  },
                  input: {
                    endAdornment: (
                      <InputAdornment
                        position="end"
                        sx={{
                          alignSelf: "flex-end",
                          margin: 0,
                          marginBottom: "5px",
                          opacity: 0,
                          pointerEvents: "none",
                          [`[data-shrink=true] ~ .${inputBaseClasses.root} > &`]:
                            {
                              opacity: 1,
                            },
                        }}
                      >
                        gram/s
                      </InputAdornment>
                    ),
                  },
                }}
              />
            </Grid>
            <Grid>
              <TextField
                error={err}
                id="standard-suffix-shrink fat"
                label="Fat"
                variant="standard"
                value={fat}
                size="small"
                helperText={err && "Don't leave empty"}
                onChange={(e) => setFat(e.target.value)}
                style={{ width: "150px" }}
                slotProps={{
                  htmlInput: {
                    sx: { textAlign: "left" },
                  },
                  input: {
                    endAdornment: (
                      <InputAdornment
                        position="end"
                        sx={{
                          alignSelf: "flex-end",
                          margin: 0,
                          marginBottom: "5px",
                          opacity: 0,
                          pointerEvents: "none",
                          [`[data-shrink=true] ~ .${inputBaseClasses.root} > &`]:
                            {
                              opacity: 1,
                            },
                        }}
                      >
                        gram/s
                      </InputAdornment>
                    ),
                  },
                }}
              />
            </Grid>
            <Grid>
              <TextField
                error={err}
                id="standard-suffix-shrink carbs"
                label="Carbs"
                variant="standard"
                value={carbs}
                size="small"
                helperText={err && "Don't leave empty"}
                onChange={(e) => setCarb(e.target.value)}
                style={{ width: "150px" }}
                slotProps={{
                  htmlInput: {
                    sx: { textAlign: "left" },
                  },
                  input: {
                    endAdornment: (
                      <InputAdornment
                        position="end"
                        sx={{
                          alignSelf: "flex-end",
                          margin: 0,
                          marginBottom: "5px",
                          opacity: 0,
                          pointerEvents: "none",
                          [`[data-shrink=true] ~ .${inputBaseClasses.root} > &`]:
                            {
                              opacity: 1,
                            },
                        }}
                      >
                        gram/s
                      </InputAdornment>
                    ),
                  },
                }}
              />
            </Grid>
            <Grid>
              <TextField
                error={err}
                id="standard-suffix-shrink pro"
                label="Protein"
                variant="standard"
                value={protein}
                width="100"
                size="small"
                helperText={err && "Don't leave empty"}
                onChange={(e) => setProtein(e.target.value)}
                style={{ width: "150px" }}
                slotProps={{
                  htmlInput: {
                    sx: { textAlign: "left" },
                  },
                  input: {
                    endAdornment: (
                      <InputAdornment
                        position="end"
                        sx={{
                          alignSelf: "flex-end",
                          margin: 0,
                          marginBottom: "5px",
                          opacity: 0,
                          pointerEvents: "none",
                          [`[data-shrink=true] ~ .${inputBaseClasses.root} > &`]:
                            {
                              opacity: 1,
                            },
                        }}
                      >
                        gram/s
                      </InputAdornment>
                    ),
                  },
                }}
              />
            </Grid>
          </Grid>
          <Grid container spacing={12} style={{ paddingLeft: "140px" }}>
            <Button variant="contained" type="submit">
              Submit
            </Button>
          </Grid>
        </Container>
      </form>
      <Container maxWidth="xl">
        <TableContainer component={Paper}>
          <Table>
            <TableHead sx={{ minWidth: 650 }} aria-label="simple table">
              <TableRow>
                <TableCell>Dessert (100g serving)</TableCell>
                <TableCell align="right">Calories</TableCell>
                <TableCell align="right">Fat&nbsp;(g)</TableCell>
                <TableCell align="right">Carbs&nbsp;(g)</TableCell>
                <TableCell align="right">Protein&nbsp;(g)</TableCell>
                <TableCell align="right">Action</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {user.map((users) => (
                <TableRow key={users.id}>
                  <TableCell>{users.dessert}</TableCell>
                  <TableCell align="right">{users.calories}</TableCell>
                  <TableCell align="right">{users.fat}</TableCell>
                  <TableCell align="right">{users.carbs}</TableCell>
                  <TableCell align="right">{users.protein}</TableCell>
                  <TableCell align="right">
                    <Button
                      style={{ margin: "0 10px" }}
                      variant="contained"
                      onClick={() => handleDelete(users.id)}
                    >
                      Remove
                    </Button>
                    <Button
                      variant="contained"
                      onClick={() => onUpdate(users.id)}
                    >
                      Update
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Container>
    </>
  );
}

export default Home;
