import React, { useEffect, useState } from "react";
import axios from "axios";
import Actividades from "./actividades"

const Aprendiz = () => {
    const URL = "http://localhost:3000/aprendiz";

    return (
        <div>
            <Actividades />
            <div class="row align-itmes-center justify-content-center">
                <form class="row g-4 col-md-8">
                    <div class="col-md-4">
                        <label for="validationDefault01" class="form-label">Nombres</label>
                        <input type="text" class="form-control" id="validationDefault01" required></input>
                    </div>
                    <div class="col-md-4">
                        <label for="validationDefault02" class="form-label">Apellidos</label>
                        <input type="text" class="form-control" id="validationDefault02" required></input>
                    </div>
                    <div class="col-md-4">
                        <label for="validationDefaultUsername" class="form-label">Correo Electronico</label>
                        <div class="input-group">
                            <span class="input-group-text" id="inputGroupPrepend2">@</span>
                            <input type="text" class="form-control" id="validationDefaultUsername" aria-describedby="inputGroupPrepend2" required></input>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <label for="validationDefault03" class="form-label">Ciudad</label>
                        <input type="text" class="form-control" id="validationDefault03" ></input>
                    </div>
                    <div class="col-md-3">
                        <label for="validationDefault04" class="form-label">Estrato</label>
                        <select class="form-select" id="validationDefault04" >
                            <option selected disabled value=""></option>
                            <option>Estrato - 1</option>
                            <option>Estrato - 2</option>
                            <option>Estrato - 3</option>
                            <option>Estrato - 4</option>
                            <option>Estrato - 5</option>
                        </select>
                    </div>
                    <div class="col-md-3">
                        <label for="validationDefault05" class="form-label">Recomendaciones</label>
                        <input type="text" class="form-control" id="validationDefault05"></input>
                    </div>
                    <div class="col-12">
                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" value="" id="invalidCheck2" required></input>
                            <label class="form-check-label" for="invalidCheck2">
                                Aceptar terminos y condiciones
                            </label>
                        </div>
                    </div>
                    <div class="col-12">
                        <button class="btn btn-primary" type="submit">Enviar</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Aprendiz;

